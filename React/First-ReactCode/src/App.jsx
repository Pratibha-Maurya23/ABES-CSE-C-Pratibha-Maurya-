import Card from './components/Card'
import './App.css'
import Navbar from './components/Navbar'

function App() {


  return (<>
  <Navbar name="abes"/>
   <Card name="Aditya" edu="Ph.D."/>
   <Card name="Deepak" edu="M.tech"/>
   <Card name="Rupak" edu="B.tech"/>
   </>
  )
}

export default App
