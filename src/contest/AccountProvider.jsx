import { createContext, useState,useRef,useEffect } from "react";

import {Socket, io} from 'socket.io-client'; 

export const AccountContest=createContext(null);
const AccountProvider=({children})=>{
    const [account,setAccount]=useState();
    const [person,setPerson]=useState({});
    const [activeUsers,setActiveUsers]=useState([]);
    const socket=useRef();
    useEffect(()=>{
        socket.current=io('ws://localhost:8000')
    },[]);
    return(
        <AccountContest.Provider value={{
          account,
          setAccount,
          person,
          setPerson,
          socket,
          setActiveUsers
        }}>
            {children}
        </AccountContest.Provider>
    )
}
export default AccountProvider;