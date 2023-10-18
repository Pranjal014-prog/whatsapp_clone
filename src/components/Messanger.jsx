import {AppBar,Toolbar,styled,Box} from '@mui/material';
import LoginDialog from "./account/LoginDialog.jsx";
import ChatDialog from './chat/ChatDialog.jsx';
import { useContext } from 'react';
import { AccountContest } from '../contest/AccountProvider.jsx';
const Component=styled(Box)`
 height:100vh;
 background-color: #DCDCDC;
`;
const Header=styled(AppBar)`
  height: 125px;
  background-color:#00A884b;
  box-shadow: none;
`
const LoginHeader=styled(AppBar)`
  height: 220px;
  background-color:#00bfa5;
  box-shadow: none;
`
const  Messanger=()=>{
    const {account}=useContext(AccountContest);
    return (
        <Component>
            {
                account?
                <>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog/>
                </>
                :
                // <>
                // <Header>
                //     <Toolbar>

                //     </Toolbar>
                // </Header>
                // <ChatDialog/>
                // </>
                
                // <ChatDialog/>
                <>
                <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <LoginDialog/>
                </>
            }
        </Component>  
    )
}
export default Messanger;