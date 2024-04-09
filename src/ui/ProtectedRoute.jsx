/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useUser } from '../features/authentication/useUser';
import Spinner from './Spinner';
import { useEffect } from 'react';

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  // ! 1. load authenticated UserActivation
  const { isLoading, isAuthenticated } = useUser();

  // ! 2. if not authentication rederict to login

  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate('/login');
    },
    [isAuthenticated, isLoading, navigate]
  );

  // ! 3. while loadConfigFromFile, show Spinner.
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // ! 4. render app if there is authenticated
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
