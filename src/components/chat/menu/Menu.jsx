import { Box } from "@mui/material";
import Header from "./Header.jsx";
import Search from "./Search.jsx";
import { useState } from "react";
import Conversation from "./Conversation.jsx";
const Menu=()=>{

    const [text,setText]=useState("");
    return(
        <Box>
           <Header/>
           <Search setText={setText}/>
           <Conversation text={text}/>
        </Box>
    )
}
export default Menu;