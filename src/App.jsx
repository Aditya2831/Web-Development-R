
import './App.css'
import { Card } from './Components/Card/Card'
import { Grid } from './Components/Grid/Grid'
import { Icon } from './Components/Icon/Icon'

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {

  return (
  <>
  <ToastContainer position="top-center" theme='dark' />
 <Grid numberOfCards={9}/>
  </>
  )
}

export default App
