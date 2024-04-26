import React, {createContext} from "react";

export interface UserType{
    $id: string ,
    email: string ,
    name: string ,
    phone?:string 
}
interface UserContextValue {
    userState: UserType;
    updateUserState: (newUser: UserType) => void;
  }

export const UserContext = createContext<UserContextValue>({
    userState: {
        $id: '',
        name: '',
        email: '',
        phone: '',
      },
    updateUserState: async() => {},
});

export default UserContext