import { createContext } from "react";

const UserContext = createContext({
    logedInUser: 'Default Name'
});
export default UserContext;