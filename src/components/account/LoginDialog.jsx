import { useState } from "react";
import { Dialog ,Box,Typography,List,ListItem,styled} from "@mui/material";
import { qrCodeImage } from "../../constant/data";
// import { GoogleLogin } from '@react-oauth/google';
// import { AccountContest } from "../../contest/AccountProvider";
import LoginPage from "./login/Login.jsx";
const Component=styled(Box)`
 display: flex;
`
const Container=styled(Box)`
  padding:50px 0 50px 50px;
`
const Title=styled(Typography)`
   font-size: 26px;
   color :#525252;
   font-weight: 300;
   font-family: inherit;
   margin-bottom:25px;
`
const Qrcode=styled('img')({
    height: 264,
    width: 264,
    margin: '30px 0 0 30px'
})
const StyledList=styled(List)`
&>li{
    padding:0;
    margin-top:15px;
    font-size:16px;
    line-height: 28px;
    color: #4a4a4a;
}
`
const dialogStyle={
    height:'96%',
    marginTop: '12%',
    width: '60%',
    maxWidth: '100%',
    maxHeight: '100%',
    boxShadow:  'none',
    overflow:   'hidden'
}
const LoginDialog = () => {
    // const { setAccount } = useContext(AccountContest);
    const [login, setLogin] = useState(false);
    const onLoginSuccess = () => {
        setLogin(true);
        // const decoded = jwt_decode(res.credential);
        // setAccount(decoded);
    }

    return (
        <Dialog
            open={true}
            PaperProps={{ sx: dialogStyle }}
            hideBackdrop={true}
        >
            {login ?
                <LoginPage />
                :
                <Component>
                    <Container>
                        <Title>To Use WhatsApp On Your Computer</Title>
                        <StyledList>
                            <ListItem>Open WhatsApp on your computer</ListItem>
                            <ListItem>1. Open WhatsApp on your phone</ListItem>
                            <ListItem>2. Tap menu setting and select WhatsApp web</ListItem>
                            <ListItem>3. Point your Phone to this screen to capture the code</ListItem>
                        </StyledList>
                    </Container>
                    <Box style={{ position: 'relative' }}>
                        <Qrcode src={qrCodeImage} alt="qr code" />
                        <Box style={{ position: 'absolute', top: '50%', transform: 'translateY(25%)' }}>
                            <button onClick={onLoginSuccess}>SignIn</button>
                        </Box>
                    </Box>
                </Component>
            }
        </Dialog>
    )
}
export default LoginDialog;