import { useMutation } from 'convex/react';
import { FunctionReference } from 'convex/server';
import { useState } from 'react';

export const useMutationState = (
  mutationToRun: FunctionReference<'mutation'>
) => {
  const [pending, setPending] = useState(false);
  const mutationFn = useMutation(mutationToRun);

  const mutate = (payload: any) => {
    setPending(true);

    return mutationFn(payload)
      .then((res) => {
        return res;
      })
      .catch((error) => {
        throw error;
      })
      .finally(() => setPending(false));
  };

  return { mutate, pending };
};
