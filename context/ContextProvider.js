import React from 'react';
import { Provider as AuthProvider } from './AuthContext';


export default ({ children }) => {
  return (
    <AuthProvider>

      {children}

    </AuthProvider>
  );
};
