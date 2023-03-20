
import './App.css';
import Header from './Components/Header';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button'
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';



function App() {
  let [name,setName]=useState("");
  let [email,setEmail]=useState("");
  let [data,setData]=useState([]);

  const addData=()=>{
    setData([...data,{name,email}]);
    setName="";
    setEmail="";
  }

  const removedata=(index)=>{
    let arr=data;
    arr.splice(index,1);
    setData([...arr]);
  }

  return (
    <div className="App">
      <Header/>
      <div className='form'>
         <Stack direction="row" spacing={5}>
           <TextField id="outlined-basic" value={name} onChange={(event)=>setName(event.target.value)} label="Name" variant="outlined" />
           <TextField id="outlined-basic" value={email} onChange={(event)=>setEmail(event.target.value)} label="E-mail" variant="outlined" />
           <Button onClick={addData} color="secondary">Submit</Button>
         </Stack>
      </div>


  

      <div className="data">
        <div className="showdata">
          <p>Name</p>
          <p>E-mail</p>
          <p>Remove</p>
        </div>
        {
          data.map((element,index)=>{
            return(
              <div key={index} className="showdata">
              <p>{element.name}</p>
              <p>{element.email}</p>
              <Stack direction="row" spacing={2}>
                <Button onClick={()=> removedata(index) } variant="outlined" startIcon={<DeleteIcon />}>
                  Delete
                </Button>
              </Stack>  
            </div>
            )
          })
        }
       
      </div>
    </div>
  );
}

export default App;
