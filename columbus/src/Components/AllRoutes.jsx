import React from "react";
import {Routes,Route} from "react-router-dom";
import Admin from "../Pages/Admin";
import Cart from "../Pages/Cart";
import Home from "../Pages/Homepage";
import ProductK from "../Pages/ProductK";
import ProductM from "../Pages/ProductM";
import ProductF from "../Pages/ProductF";
const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={ <Home/>}/>
            <Route path="/productK" element={<ProductK/>}/>
            <Route path="/productM" element={<ProductM/>}/>
            <Route path="/productF" element={<ProductF/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path='/admin' element={<Admin/>}/>
        </Routes>
    )
}


export default AllRoutes;