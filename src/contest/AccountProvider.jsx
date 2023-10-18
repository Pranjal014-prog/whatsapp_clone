import { createContext, useState } from "react";
export const AccountContest=createContext(null);
const AccountProvider=({children})=>{
    const [account,setAccount]=useState();
    return(
        <AccountContest.Provider value={{
          account,
          setAccount
        }}>
            {children}
        </AccountContest.Provider>
    )
}
export default AccountProvider;