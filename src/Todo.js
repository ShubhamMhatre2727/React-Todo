import { setDoc, doc, deleteDoc } from '@firebase/firestore'
import { Button, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { db } from './firebase_config'
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';export default function TodoListItem({ todo, inprogress, id }) {
    function toggleInProgress(){
        setDoc(doc(db, "todos", id), {
            todo: todo,
            isinprogress: !inprogress
        })
    }
    function deleteTodo(){
        deleteDoc(doc(db, "todos", id))
    }
    return (
        <div style={{display:"flex"}}>
            <ListItem>
                <ListItemText primary={todo} secondary={inprogress? "In Progress 🟡" : "Completed 🟢"}/>
            </ListItem>

            <Button onClick={toggleInProgress} >{inprogress? "Done" : "UnDone"}</Button>
            <Button onClick={deleteTodo}><DeleteTwoToneIcon/></Button>
        </div>
    )
}
