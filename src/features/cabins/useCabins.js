import { useQuery } from '@tanstack/react-query';
import { getCabins } from '../../services/apiCabins';

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    // eslint-disable-next-line no-unused-vars
    error,
  } = useQuery({ queryKey: ['cabins'], queryFn: getCabins });
  return { isLoading, error, cabins };
}
