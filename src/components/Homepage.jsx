
import Header from "./Header/header";

import Loading from "./Loading";
import React, { lazy, Suspense } from "react";

const Table = lazy(() => import("./Table"));

function  Home (){
 
 

return(
    
    <>
    <Header/>
      <Suspense fallback={<Loading loading={true} />}>
        <Table />
      </Suspense>
      <div className="flex items-center mt-24"></div>
     
    </>

)
}
 export default Home;