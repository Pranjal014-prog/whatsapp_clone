import { useContext,useState } from "react";
import { AccountContest } from "../../../contest/AccountProvider";
import { Box,styled } from "@mui/material";
import  ChatIcon from '@mui/icons-material/Chat';
import HeaderMenu from "./HeaderMenu.jsx";
import Infodrawer from "../../drawer/InfoDrawer";
const Component = styled(Box)`
  height: 40px;
  margin-top: 5px;
  margin-left: 5px;
  background: #ededed;
  padding: 8px 16px;
  display: flex;
  align-items: center;
`;
const Wrapper=styled(Box)`
   margin-left:auto;
   &>*{
    margin-left:2px;
    padding:8px;
    color:8px;
   }
   &  :first-child{
       font-size:22px;
       margin-right:8px;
       margin-top:3px;
   }
`;
const Image=styled('img')({
    height: 40,
    width: 40,
    borderRadius: '50%'
})
const Header=()=>{
    const image='https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';
    const [openDrawer,setOpenDrawer]=useState(false);
    const {account}=useContext(AccountContest);
    const toggleDrawer=()=>{
        setOpenDrawer(true);
    }
    return (
        <>
        <Component>
           <Image src={image} alt='dp' onClick={()=>toggleDrawer()}/>
           <Wrapper>
            <ChatIcon/>
            <HeaderMenu/>
           </Wrapper>
        </Component>
        <Infodrawer open={openDrawer} setOpen={setOpenDrawer}/>
        </>
    )
}
export default Header;