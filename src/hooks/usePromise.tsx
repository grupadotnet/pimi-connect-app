import { AxiosError, AxiosResponse } from 'axios';
import { useState } from 'react';

const rethrow = (error: unknown): void => {
  if (error instanceof AxiosError) {
    if (error.response?.status === 500) {
      throw new Error('There was unhandled server error');
    }

    if (error.response?.data?.message) {
      const { message } = error.response.data;

      if (typeof message === 'string') {
        throw new Error(message);
      }

      if (typeof message === 'object') {
        if (Array.isArray(message)) {
          throw new Error(message.join(', '));
        }

        throw new Error(`Something went wrong: ${JSON.stringify(message)}`);
      }
    }
  }

  if (error instanceof Error) {
    throw error;
  }

  throw new Error('Something went wrong');
};

export const usePromise = <T extends any>(
  creator: () => Promise<AxiosResponse<T>>,
  onSuccess: (data: AxiosResponse<T>) => void,
  onFail: (err: Error) => void = rethrow,
): [invoker: () => void, isLoading: boolean] => {
  const [isLoading, setIsloading] = useState(false);

  const invoker = () => {
    setIsloading(true);
    creator()
      .then((res) => {
        setIsloading(false);
        onSuccess(res);
      })
      .catch((reason) => {
        setIsloading(false);
        onFail(reason);
      });
  };

  return [invoker, isLoading];
};
