import { useEffect,useState ,useContext} from "react";
import { getUsers } from "../../../Services/api";
import { Box,styled,Divider } from "@mui/material";
import Conversations from "./Conversations.jsx";
import { AccountContest } from "../../../contest/AccountProvider";
const Component=styled(Box)`
   height: 80vh;
   overflow: overlay;
`
const StyledDivider=styled(Divider)`
  margin: 0 0 0 70px;
  background-color : #e9edef;
  opacity: 0.6;
`
const Conversation=({ text })=>{
    const[users,setUsers]=useState([]);
    const {account,socket,setActiveUsers}=useContext(AccountContest);
    useEffect(()=>{
        const fetchData=async()=>{
            let response=await getUsers();
            const filterData = response.message.filter((user) =>
            user.name.toLowerCase().includes(text.toLowerCase())
             );
            setUsers(filterData);
        }
        fetchData();
    },[text])
    useEffect(()=>{
        socket.current.emit('addUsers',account);
        socket.current.on('getUsers',users=>{
            console.log("oh my god",users);
            setActiveUsers(users);
        })
    },[account])
    return(
       <Component>
        {
            users.map(user=>(
                user.name!==account.Name &&
                <>
                <Conversations user={user}/>
                <StyledDivider/>
                </>
            ))
        }
       </Component>
    )
}
export default Conversation;