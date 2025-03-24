import { BrowserRouter, Route } from "react-router-dom"
import Contador from "./components/Contador"
import Login from "./routes/Login"
import Home from "./routes/Home"
import Error from "./routes/Error"


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Error/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
