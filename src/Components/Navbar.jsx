import {AppBar,Toolbar,makeStyles} from '@material-ui/core';
import React from 'react'
import { NavLink } from 'react-router-dom';
const useStyle=makeStyles({
    header:{
        background:'#111111'
    },
    tabs:{
        color:'#FFFFFF',
        textDecoration:'none',
        margin:20,
        fontSize:18
    }
})
function Navbar() {
    const classes=useStyle();
    return (
        <div>
             <AppBar className={classes.header} position="static">
           <Toolbar>
<NavLink className={classes.tabs} to="./">Home</NavLink>
<NavLink className={classes.tabs} to="./all">All User</NavLink>
<NavLink className={classes.tabs} to="./add">Add User</NavLink>
           </Toolbar>
       </AppBar>
        </div>
    )
}

export default Navbar;