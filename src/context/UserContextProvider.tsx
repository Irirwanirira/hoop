import React, { ReactNode, useState } from 'react'

import UserContext from './UserContext'

type User = {
    $id: any;
    name: string;
    email: string
    phone?: string
};

interface UserContextProviderProps{
    children: ReactNode
}

const UserContextProvider = ({ children }: UserContextProviderProps ) => {
    const [user, setUser] = useState<User | null>(null);
  
    return (
      <UserContext.Provider value={{ user, setUser }}>
        {children}
      </UserContext.Provider>
    );
};

export default UserContextProvider
