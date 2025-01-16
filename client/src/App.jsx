import { Button } from '@mui/material'
import './App.css'

function App() {


  return (
    <>
    <h1>Hello world</h1>
    <Button sx={{ p:2, mt:10 }} className='bg-red-500' variant="contained">
      Material UI Button with Tailwind
    </Button>
    </>
  )
}

export default App
