
import { Link } from "react-router-dom";
import Header from "./Header/header";

import { useTranslation } from "react-i18next";
import Loading from "./Loading";
import React, { lazy, Suspense } from "react";

const Table = lazy(() => import("./Table"));

function  Home (){
  const { t } = useTranslation();


return(
    
    <>
    <Header/>

  
    <div className="flex items-center mt-24 mb-10">
          <div className="flex-grow text-left px-4 py-2 m-2">
            <h3 className="text-gray-900 font-bold text-xl">Employee Listing</h3>
          </div>
          
          <div className="flex-grow text-right px-4 py-2 m-2">
           <Link to="create">
              <button  className="bg-green-400 hover:bg-green-500 text-white font-semibold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                <span className="pl-2">Add Employee</span>
              </button>
              </Link>
            
          </div>
        
        </div>
        <h1 className="antialiased text-2xl	mx-8 mt-8">{t("Employees.1")}</h1> ​
      <Suspense fallback={<Loading loading={true} />}>
        <Table />
      </Suspense>
        
       
    </>

)
}
 export default Home;