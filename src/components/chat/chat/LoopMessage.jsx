import { useContext } from "react";
import { AccountContest } from "../../../contest/AccountProvider";
import { Box,Typography,styled } from "@mui/material";
import { FormatDate } from "../../../utils/commonUtils";
const Owm=styled(Box)`
    background: #dcf8c6;
    max-width: 60%;
    margin-left: auto;
    padding : 5px;
    width: fit-content;
    display: flex;
    border-radius:10px;
    word-break: break-word;

`
const Wrapper=styled(Box)`
    background: #FFFFFF;
    max-width: 60%;
    padding : 5px;
    width: fit-content;
    display: flex;
    border-radius:10px;
    word-break: break-word;
    
`
const Text =styled(Typography)`
   font-size: 14px;
   padding: 0 25px 0 5px;
`;
const Time=styled(Typography)`
  font-size: 10px;
  color: #919191;
  margin-top: 6px;
  word-break:keep-all;
  margin-top: auto;
`
const LoopMessages= ({mess})=>{
    const {account}=useContext(AccountContest);

    return(
       <>
        {
            account.Name===mess.senderName ?
                    <Owm>
                    <Text>{mess.text}</Text>
                    <Time>{FormatDate(mess.createdAt)}</Time>
                    </Owm>
            :
                    <Wrapper>
                    <Text>{mess.text}</Text>
                    <Time>{FormatDate(mess.createdAt)}</Time>
                    </Wrapper>
        }
       </>
    )
}
export default LoopMessages;