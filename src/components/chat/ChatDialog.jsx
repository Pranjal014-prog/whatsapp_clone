import { Dialog,Box,styled } from "@mui/material";
import EmptyChat from "./chat/EmptyChat";
import Menu from "./menu/Menu";
import ChatBox from "./chat/Chatbox";
import { useContext } from "react";
import { AccountContest } from "../../contest/AccountProvider";
const dialogStyle={
    height:'96%',
    width: '100%',
    margin:  '20px',
    borderRadius :0,
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow:  'none',
    overflow:   'hidden'
}
const Component=styled(Box)`
   display:flex;
`
const LeftComponent=styled(Box)`
     min-width: 450px;
`
const RightComponent=styled(Box)`
   width :75%;
   min-width:300px;
   height: 100%;
   border-left: 1px solid rgba(0,0,0,0.14);
`
const ChatDialog=()=>{
    const {person}=useContext(AccountContest);
    return(
        <Dialog open={true}
           PaperProps={{sx:dialogStyle}}
           hideBackdrop={true}
           maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    {Object.keys(person).length? <ChatBox/> : <EmptyChat/>}
                </RightComponent>
            </Component>
       </Dialog>
    )
}
export default ChatDialog;