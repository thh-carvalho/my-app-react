import {BrowserRouter, Link} from "react-router-dom";

import './styles/main.css'

import AppRoutes from "./Routes";
import Navbar from "./components/Navbar";

export default function App(){
    return(
        <div className="container">
            <BrowserRouter>
                <Navbar />
                <div className="wrapper">
                    <AppRoutes />
                </div>
            </BrowserRouter>
        </div>
    )
}