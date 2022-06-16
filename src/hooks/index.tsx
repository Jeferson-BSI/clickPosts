import React from 'react';
import { PostProvider } from './usePosts';
import { UsersProvider } from './UseUsers';

const AppProvider:React.FC = ({ children }) => {
  return (
    <UsersProvider>
      <PostProvider>
        { children }
      </PostProvider>
    </UsersProvider>
  );
}


export default  AppProvider;