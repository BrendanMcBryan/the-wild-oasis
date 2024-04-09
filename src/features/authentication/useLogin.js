import { useMutation, useQueryClient } from '@tanstack/react-query';
import { login as loginApi } from '../../services/apiAuth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: login, isLoading } = useMutation({
    mutationFn: ({ email, password }) => loginApi({ email, password }),

    // eslint-disable-next-line no-unused-vars
    onSuccess: (user) => {
      queryClient.setQueriesData(['user'], user);
      navigate('/dashboard');
    },
    onError: (err) => {
      console.log('ERROR', err);
      toast.error('Provided Credentails are incorrect');
    },
  });

  return { login, isLoading };
}
