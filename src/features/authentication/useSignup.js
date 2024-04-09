import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/apiAuth';

import { toast } from 'react-hot-toast';

export function useSignup() {
  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signupApi,

    // eslint-disable-next-line no-unused-vars
    onSuccess: (user) => {
      toast.success(
        "User successfully created Please verify new Account from the user's emal address"
      );
    },
    // onError: (err) => {
    //   console.log('ERROR', err);
    //   toast.error('Provided Credentails are incorrect');
    // },
  });

  return { signup, isLoading };
}
