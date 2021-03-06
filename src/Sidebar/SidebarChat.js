import React, {useState, useEffect} from 'react';
import { Avatar} from '@material-ui/core';
import "./SidebarChat.css";
import db from "../firebase";
import { Link } from "react-router-dom";


function SidebarChat({id, name, addNewChat}) {
    const [seed, setSeed]  = useState("");
    const [messages, setMessages] = useState([]);
    useEffect(() =>{
        if(id){
            db.collection('room').doc(id)
            .collection("messages")
            .orderBy("timestamp", "desc")
            .onSnapshot((snapshot) =>
            setMessages(snapshot.docs.map((doc) =>
            doc.data())))
        };
    })
    
    useEffect(()=>{
        setSeed(Math.floor(Math.random()* 5000));

    },[])
    const createChat = () =>{
        const roomName = prompt("Please enter name for chat");
        if(roomName){
            //
            db.collection('room').add({
                name: roomName,

            });
        }
    };
    
    return !addNewChat ? (
    <Link to={`/room/${id}`}>
        <div className="sidebarChat flex fx-row">

        <div className="  "> 
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        </div>
        <div className="sidebarChat__info">
            <h2>{name}</h2>
            <p>{messages[0]?.message}</p>
            </div>
        </div>
    </Link>
       
    ):(
        <div onClick={createChat}
         className="sidebarChat"
        ><h2>Add New Chat</h2></div>
    )
}

export default SidebarChat;
