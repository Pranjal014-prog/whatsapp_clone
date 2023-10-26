import { useContext } from "react";
import { Box,styled,Typography } from "@mui/material";
import { AccountContest } from "../../contest/AccountProvider";
const ImageContainer=styled(Box)`
  diaplay: flex,
  justify-content:center;
`
const Image=styled('img')({
    width : 200,
    height:  200,
    borderRadius:'50%',
    padding : '25px 0'
})
const BoxWrapper=styled(Box)`
  background: #FFFFFF;
  padding: 12px 3px 2px;
  box-shadow:0 1px 3px rgba(0 ,0,0,0.08);
  & :first-child{
    font-size: 13px;
    color: #009688;
    fonst-weight:200;
  }
  & :last-child{
    margin: 14px 0;
    color :#4a4a4a
  }
`
const DescriptionContainer=styled(Box)`
  padding: 15px 20px 28px 30px;
  &>p{
    font-size: 13px;
    color : #869680;
  }
`
const Profile=()=>{
    const {account}=useContext(AccountContest);
    console.log(account.imageURL);
    return(
       <>
       <ImageContainer>
        <img src={account.imageURL} alt="dp"/>
       </ImageContainer>
       <BoxWrapper>
        <Typography>Your name</Typography>
        <Typography>{account.Name}</Typography>
       </BoxWrapper>
       <DescriptionContainer>
        <Typography>This is not your Username or pin.This name will be visible to your whatsapp contact</Typography>
       </DescriptionContainer>
       <BoxWrapper>
        <Typography>About</Typography>
        <Typography>Eat Sleep Code Repeat</Typography>
       </BoxWrapper>
       </>
    )
   
}
export default Profile;