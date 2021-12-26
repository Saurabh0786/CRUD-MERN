import { Table, TableBody, TableCell, TableHead, TableRow,makeStyles } from "@material-ui/core";
import { useEffect,useState } from "react";
import { getUsers } from "../Service/api";
const useStyle=makeStyles({
    table:{
        width:'90%',
        margin :'50px 0 0 50px'
    },
    thead:{
        '& > *':{
            background:'#000000',
            color:'#ffffff',
            fontSize:20
        },
        row:{
            '& > *':{
                fontSize:20
            }
        }
    }
})
const AllUser = () => {
  const [users,SetUsers]=useState([]);
    const classes=useStyle();
    useEffect(()=>{
        getAllUser();
    },[])

    const getAllUser=async()=>{
      const response= await getUsers();
      console.log(response.data);
      SetUsers(response.data);
    }
  return (
  <Table className={classes.table}>
      <TableHead>
          <TableRow className={classes.thead}>
              <TableCell>id</TableCell>
              <TableCell>name</TableCell>
              <TableCell>designation</TableCell>
              <TableCell>phone</TableCell>
          </TableRow>
      </TableHead>
      <TableBody>
          {
              users.map(user=>(
                  <TableRow className={classes.row}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.designation}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  </TableRow>
              ))
          }
      </TableBody>
  </Table>
  );}

export default AllUser;
