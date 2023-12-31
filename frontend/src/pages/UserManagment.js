import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteOutlinedIcon from '@mui/icons-material/EditNoteOutlined';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import { makeStyles, styled } from "@mui/material/styles";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
import Input from '@mui/material/Input'
// import makeStyles from '@mui/material/styles';
// import { api } from ".../config";
import {useState}  from "react";
import axios from "axios";

import {Link} from 'react-router-dom';
import { FormGroup } from '@mui/material';

const drawerWidth = 240;

function UserManagment(){
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

      const StyledPaper = styled(Paper)`
      background-color: #A5FF96; `;


      const [age, setAge] = React.useState('');

      const handleChange = (event) => {
        setAge(event.target.value);
      };
    

      const [SupplierName, setSupplerName] = useState("");
      const [SupplierID, setSupplierID] = useState("");
      const [Email, setEmail] = useState(""); 
      const [Password, setPassword] = useState(""); 
      const [PhoneNo, setPhoneNo] = useState("");
      const [CompanyName, setCompanyName] = useState("");
      const [Address, setAddress] = useState("");
      const [ProvidedMatetial, setProvidedMatetial] = useState("");

      function sendData(e){
        e.preventDefault();
        //alert("Data inserted successfully");
    
        const newSupplier ={
            SupplierName,
            SupplierID,
            Email,
            Password,
            PhoneNo,
            CompanyName,
            Address,
            ProvidedMatetial

    
        }

        
        //console.log(newCategory);
    
        axios.post(`http://localhost:5000/api/suppliers/`,newSupplier).then(()=>{
          alert("New Supplier Added Successfully");
          setSupplerName("");
          setSupplierID("");
          setEmail("");
          setPassword("");
          setPhoneNo("");
          setCompanyName("");
          setAddress("");
          setProvidedMatetial("");
    
        }).catch((err)=>{
          alert(err)
        })
      }
    



    return(<>
    
    <Box
        component="main"
        sx={{
          flexGrow: 1,
          backgroundColor: "#EDF0F7",
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
      
      
      
     {/* content of the page   */}

<br></br>
<br></br>
    <div>
        {/* className={classes.formStyle} */}

        <Button style={{padding: 5,width:"15%",marginLeft: 850,marginTop: 20, backgroundColor: '#080c39'}} variant="contained">View Suppliers</Button>
<form onSubmit={sendData}>
        <FormGroup style={{ width: "50%" ,margin: "auto", padding: 20, marginTop: 50,  paddingTop: 20, boxShadow: "0px 0px 8px rgba(0,0,0,0.5)"}}  >
            <h2 style={{alignSelf: "center"}}>Add Supplier Details</h2>
            <FormControl style={{marginTop:10}}>
            <TextField label="Supplier ID" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }} 
                 value={SupplierID}
                 onChange={(e) => {
                    setSupplierID(e.target.value);
                 }}/>
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Name" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={SupplierName}
                 onChange={(e) => {
                    setSupplerName(e.target.value);
                 }}/>
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Email Address" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={Email}
                 onChange={(e) => {
                    setEmail(e.target.value);
                 }}/>
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Password" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={Password}
                 onChange={(e) => {
                    setPassword(e.target.value);
                 }}/>
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Phone Number" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={PhoneNo}
                 onChange={(e) => {
                    setPhoneNo(e.target.value);
                 }}/>
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Company Name" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={CompanyName}
                 onChange={(e) => {
                    setCompanyName(e.target.value);
                 }}/>
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Address" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={Address}
                 onChange={(e) => {
                    setAddress(e.target.value);
                 }}/>
            </FormControl>

            <FormControl style={{marginTop:10}}>
            <TextField label="Type Of Material Provided" InputLabelProps={{style: {  fontWeight: 'bold', fontSize: '20px' }}}
                 style={{ padding: 5 }}
                 value={ProvidedMatetial}
                 onChange={(e) => {
                    setProvidedMatetial(e.target.value);
                 }}/>
            </FormControl>

           
            <Button  type="submit" style={{padding: 5,width:"30%",alignSelf: "center",marginTop: 20, backgroundColor: '#080c39'}} variant="contained">Save details</Button>

        </FormGroup>
        </form>
        
    </div>

    <br></br>


    {/* <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            maxRows={4}
            variant="standard"
            margintop='12dp'
            />
         */}



      
      
    </Box>
    
    
    
    
    </>);
}

export default UserManagment;