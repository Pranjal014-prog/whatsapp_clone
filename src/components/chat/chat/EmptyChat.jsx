import { EmptyChatImage } from "../../../constant/data";
import { Box, Divider, Typography,styled } from "@mui/material";
const Component=styled(Box)`
 background : #f8f9fa;
 text-align : center;
  height :  100vh;
`
const Container=styled(Box)`
padding :0 0;

`
const StyleDivider=styled(Divider)`
  margin :40px 0;
  opacity: 0.4;
`
const Image=styled('img')({
    width: '100%',
    height: '30%'
})
const Title=styled(Typography)`
   display: flex;
  font-size: 32px;
  justify-content:center;
  font-family:inherit;
  font-weight: 300;
  color :#41525d;
`
const SubTitle=styled(Typography)`
   font-size: 14px;
   color: 667781;
   font-weight: 400;
   font-family:inherit;
`
const EmptyChat=()=>{
    return(
       <Component>
          <Container>
            <Image src={EmptyChatImage}/>
            {/* <Image src='D:/MicrosoftTeams-image'/> */}
            {/* <Title>Whatsapp Web</Title>
            <SubTitle>Now Send And Recieve Image WithOut Keeping Your Phone Online</SubTitle> */}
            {/* <SubTitle>Use Whatsapp Up to 4 link devices and 1 phone at a same time</SubTitle> */}
          </Container>
          <StyleDivider/>
       </Component>
    )
}
export default EmptyChat;