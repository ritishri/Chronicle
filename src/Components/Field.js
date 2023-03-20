// import '../App.css'
import React from "react"
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Stack from '@mui/material/Stack';

function Field({name,email,index}) {
  return (
   
        <div className="showdata">
          <p>{name}</p>
          <p>{email}</p>
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Stack>  
        </div>

  )
}

export default Field