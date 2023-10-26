import { useContext } from "react";
import { Box,Typography,styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AccountContest } from "../../../contest/AccountProvider";
import { defaultProfilePicture } from "../../../constant/data";
const Header=styled(Box)`
   height: 44px;
   background: #ededed;
   padding: 8px 16px;
   display : flex;
   align-items:center;
`
const Image=styled('img')({
   height: 40,
   width: 40,
    objectFit:'cover',
    borderRadius: '50%'
});
const Name=styled(Typography)`
   margin-left: 12px !important;
`
const Status=styled(Typography)`
margin-left: 12px !important;
font-size: 12px;
color:rgb(0 ,0,0,0.6);
`
const RightContainer=styled(Box)`
   margin-left:auto;
   &> svg{
    padding :8px;
    font-size: 24px;
    color: #000;
   }
`
const ChatHeader=({person})=>{
   const {activeUsers}=useContext(AccountContest);
   console.log("pranjal is printing ActiveUsers",activeUsers);
   return(
    <Header>
        <Image src={defaultProfilePicture} alt="dp"/>
        <Box>
            <Name>{person.name}</Name>
            <Status>{activeUsers?.find(user=>user.Name===person.name)? 'online':'offline'}</Status>
        </Box>
        <RightContainer>
            <SearchIcon/>
            <MoreVertIcon/>
        </RightContainer>
    </Header>
   )
}
export default ChatHeader;