
import { useContext,useState,useEffect } from "react";
import { Box,styled } from "@mui/material";
import Footer from "./Footer";
import LoopMessages from "./LoopMessage";
import { AccountContest } from "../../../contest/AccountProvider";
import { newMessage,getMessage } from "../../../Services/api";
const Wrapper=styled(Box)`
  background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
  background-size: 50%;
`
const Container=styled(Box)`
  padding: 1px 80px;
`
const Component=styled(Box)`
  height: 75vh;
  overflow-y:scroll;
`
const Messages=({ person,conversation })=>{
    const {account}=useContext(AccountContest);
    const [value,setValue]=useState('');
    const [messages,SetMessages]=useState([]);
    const [newMessageFlag,setNewMessageFlag]=useState(false);
    const [file,setFile]=useState();
    const[image,setImage]=useState('');
    useEffect(()=>{
      const getMessageDetails=async()=>{
        let data=await getMessage(conversation._id);
        SetMessages(data);
      }
      conversation._id && getMessageDetails();
    },[person._id,conversation._id,newMessageFlag]);
    const sendText=async(e)=>{
        const code = e.keyCode || e.which;
        if(code === 13){
          let message={};
          if(!file){
            message={
                senderName:account.Name,
                receiverName:person.name,
                conversationId: conversation._id,
                type: 'text',
                text: value
            }
          }else{
            message={
              senderName:account.Name,
                receiverName:person.name,
                conversationId: conversation._id,
                type: 'file',
                text: image
            }
          }
            console.log(image);
            console.log(message);
            await newMessage(message);
            setValue('');
            setFile('');
            setImage('');
            setNewMessageFlag(pre=>!pre);
        }
    }
    return(
        <Wrapper>
            <Component>
              {
                messages && messages.map(mess=>(
                  <Container>
                  <LoopMessages mess={mess}/>
                  </Container>
                ))
              }
            </Component>
            <Footer
              sendText={sendText}
              setValue={setValue}
              value={value}
              file={file}
              setFile={setFile}
              setImage={setImage}
            />
        </Wrapper>
    )
}
export default Messages;
