import { Box,StepContext,Typography,styled } from "@mui/material";
import { useContext } from "react";
import { AccountContest } from "../../../contest/AccountProvider";
import { setConversation } from "../../../Services/api";
const Component=styled(Box)`
  display:flex;
  height: 45px;
  padding: 1px 0;
  curseor:pointer;
`
const Image=styled('img')({
    width:50,
    height:50,
    borderRadius:'50%',
    padding: '0 40px'
})
const Conversations=({user})=>{
    const{setPerson,account}=useContext(AccountContest);
    const getUser=async ()=>{
        setPerson(user);
        await setConversation({senderName:account.Name,receiverName:user.name});
    }
    return(
        <Component onClick={()=>getUser()}>
           <Box>
            <Image src={user.img.data} alt="dp"/>
            </Box> 
            <Box>
                <Typography>{user.name}</Typography>
            </Box>
        </Component>
    )
}
export default Conversations;