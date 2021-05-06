import './Sidebar.css';
import SidebarChat from './SidebarChat'
import { Avatar, IconButton } from '@material-ui/core';
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import React, {useEffect, useState} from 'react';
import {useStateValue} from '../StateProvider';
import db from '../firebase';


function Sidebar() {
    const [rooms, setRooms] = useState([]);
    const [{ user}, dispatch] = useStateValue();
    useEffect(()=>{
     const unsubscribe = db.collection('room').onSnapshot(snapshot => {
            setRooms(snapshot.docs.map(doc => 
                ({
                    id: doc.id,
                    data: doc.data() 
                })
                ))

        })  
        return()=>{
            unsubscribe();
        }
    },[])
    return (
        <div className="sidebar">
            <div className="flex fx-row"  >
                <div className="sidebar__header">
                    <Avatar  src={user?.photoURL}/>
                </div>
                <div className="sidebar__headerRight m-l-auto">
                <IconButton><DonutLargeIcon/> </IconButton>  
                <IconButton> <ChatIcon/></IconButton>
                <IconButton> <MoreVertIcon/></IconButton>
                </div>
            </div>
             <div className="sidebar__search m-10">
            <div className="sidebar__searchContainer">
                <SearchOutlinedIcon/>
                <input placeholder="search or start new chat"
                 type="text"/>
            </div>
            </div>
            <div className="sidebar__chats">
                <SidebarChat addNewChat/>
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id}
                    name={room.data.name}/>
                ))}
            </div>
        </div>
    )
}

export default Sidebar 

