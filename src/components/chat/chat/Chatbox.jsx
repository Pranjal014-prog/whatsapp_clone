import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { useContext, useEffect,useState } from "react";
import { AccountContest } from "../../../contest/AccountProvider";
import { getConversation } from "../../../Services/api";
const ChatBox=()=>{
    const { person,account }=useContext(AccountContest);
    const [conversation,setConversation]=useState({});
    useEffect(()=>{
        const getConversationDetails=async()=>{
            let data=await getConversation({senderName: account.Name,receiverName: person.name});
            setConversation(data);
        }
        getConversationDetails();
    },[person.name]);
    return (
        <Box style={{height:'70%'}}>
            <ChatHeader person={person}/>
            <Messages person={person} conversation={conversation}/>
         </Box>
    )
}
export default ChatBox;