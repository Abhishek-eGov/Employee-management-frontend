import React from 'react'

import { Popover } from '@headlessui/react'
import i18next from "i18next";

function Header(){
  function handleClick(lang) {
    i18next.changeLanguage(lang);
  }

    return(
        <Popover className="relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
            <div className="flex justify-start lg:w-0 lg:flex-1">
              
                <span className="sr-only">Workflow</span>
                <img
                  className="h-48  w-auto sm:h-10"
                  src="https://s3.amazonaws.com/dpg-website/wp-content/uploads/2021/12/13140710/eGov-thick-logo.png"
                  alt=""
                />
            
            </div>
            <button
        className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded m-1"
        onClick={() => handleClick("en")}
      >
        English
      </button>
      <button
        className=" bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded m-1"
        onClick={() => handleClick("hi")}
      >
        Hindi
      </button>

      <button
        className=" bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-1 px-2 border border-blue-500 hover:border-transparent rounded m-1"
        onClick={() => handleClick("ma")}
      >
       Marathi
      </button>
 
          
            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
             
              <a
                href="/"
                className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
               EMPLOYEE MANAGEMENT
              </a>
            </div>
            
          </div>
        </div>
  
       
       
       
       
      </Popover>
    )
}

export default Header;
