import React, {createContext}from "react";

type User = {
    $id: string;
    name: string;
    email: string
    phone?: string
};

// const initialUser: User = {
//     $id: "",
//     name: "",
//     email: "",
//     phone: "",
// };

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType>({
    user: null,
    setUser: () => {},
});

export default UserContext;