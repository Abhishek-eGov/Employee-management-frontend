
import Header from "./Header/header";

import React, { lazy} from "react";

const Table = lazy(() => import("./Table"));

function  Home (){
 
 

return(
    
    <>
    <Header/>
        <Table />
    </>

)
}
 export default Home;