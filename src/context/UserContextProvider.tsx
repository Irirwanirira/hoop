import React, {useState, ReactNode}from "react";
import UserContext, {UserType} from "./UserContext";

interface UserContextProviderProps {
    children: ReactNode;
}

const UserContextProvider = ({children}: UserContextProviderProps) => {
    const [userState, setUserState] = useState<UserType>({
        $id: '',
        name: '',
        email: '',
        phone: '',
      });

    const updateUserState = async(newUser: UserType)=> {
        setUserState(newUser)
    }

    return (
      <UserContext.Provider value={{userState, updateUserState}}>
        {children}
      </UserContext.Provider>
    );
};

export default UserContextProvider