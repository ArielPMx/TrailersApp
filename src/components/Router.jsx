import { Route,Routes, useLocation } from "react-router-dom";
import Login from "./Login";
import Gallery from "../components/Gallery"
import {useState,useEffect} from 'react'
import {useNavigate } from "react-router-dom";
import Home from "./Home";
import System from '../components/System';
import Table from '../components/Table';

const PrivateRoutes = () =>{
  return (
    <div>

    </div>
  )
}

const PublicRoutes = () =>{
  return (
    <div>
        <Routes>
        <Route path="/agregar" element={<System />} />
          <Route path="/lista" element={<Table />} />
            <Route path="/Trailer" element={<Gallery />} />
            <Route path="/Login" element={<Login/>}/>
        </Routes>   
  </div>

  )
}

const Router = () => {

const [Authenticated,SetAuthenticated] = useState(false);

const navegate = useNavigate();
const location = useLocation();

const CheckAuthentication = () => {
//   if(localStorage.getItem('token') != null){
//     SetAuthenticated(true)
//     if (location.pathname.toLocaleLowerCase() == "/login" || location.pathname.toLocaleLowerCase() == "/") {
        // navegate("/Home");
//     }
//   }else{
//     SetAuthenticated(false)
//     localStorage.clear()
//     navegate("/Login");
//   }
// if (location.pathname.toLocaleLowerCase() == "/Login") {
//   localStorage.setItem('Llave', 'False');  
// }

// let LoginKey = localStorage.getItem('Llave')
//   if(LoginKey == "True"){

//   navegate("/home");
      
//   }else{
//     navegate("/Login");
//   }

}

useEffect(() => {
    if (location.pathname.toLocaleLowerCase() == "/") {
      navegate("/Trailer");
  }

  CheckAuthentication()
}, [location.pathname])

  return (
    <div>
      {
        Authenticated
        ?<PrivateRoutes/>
        :<PublicRoutes/>
      }
    </div>
    )
}
export default Router;