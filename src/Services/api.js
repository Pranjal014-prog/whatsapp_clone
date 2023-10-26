import axios from "axios";
const url='http://localhost:5000';
export const getUsers=async()=>{
    try{
        console.log("pranjal");
        const response=await axios.get(`${url}/data`);
        console.log("pranjal");
        console.log(response);
        return response.data;
    }catch(error){
        console.log("error while calling get User api",error);
    }
}
export const setConversation=async(data)=>{
    try{
       await axios.post(`${url}/conversation/add`,data)
    }catch(error){
        console.log("error while calling setConversation api",error);
    }
}
export const getConversation=async(data)=>{
    try{
       let response=await axios.post(`${url}/conversation/get`,data);
       console.log(response);
       return response.data;
    }catch(error){
        console.log("error while calling getConversation api",error);
    }
} 
export const newMessage=async(data)=>{
    try{
        await axios.post(`${url}/message/add`,data);
    }catch(error){
        console.log("error while calling newMessage api",error);
    }
}
export const getMessage=async(id)=>{
    try{
        let response=await axios.get(`${url}/message/get/${id}`);
        return response.data;
    }catch(error){
        console.log("Error while calling gewMessage api",error);
    }
}
export const uploadFile=async(data)=>{
    try{
        console.log("pranjal Goyal in upload api calling");
       return await axios.post(`${url}/file/upload`,data);
    }catch(error){
        console.log("Error while calling uploadFile api",error);
    }
}
