import { type ComponentType, useEffect, useState } from 'react';
import axios from 'axios';

type withDataFetchingProps<T> = {
  data: T[];
  error: Error | null;
  loading: boolean;
};

function withDataFetching<T>(Component: ComponentType<withDataFetchingProps<T>>, endpoint: string) {
  return function DataFetchingComponent() {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
      (async () => {
        try {
          const { data } = await axios.get<T[]>(endpoint);
          setData(data);
        } catch (error) {
          setError(error instanceof Error ? error : new Error('Unknown error'));
        } finally {
          setLoading(false);
        }
      })();
    }, []);

    return <Component data={data} error={error} loading={loading} />;
  };
}

export default withDataFetching;
