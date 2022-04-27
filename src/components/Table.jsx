import React ,{useState}from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import EMPLOYEE_SERVICE from "../components/service"
import { useTranslation } from "react-i18next";

function Table(){
  const [search, setSearch] = useState("");
  const { t } = useTranslation();
  const client = useQueryClient();
  const nav = useNavigate();

  const { data} = useQuery("employees", EMPLOYEE_SERVICE.EMPLOYEES);
  const DELETE = useMutation(EMPLOYEE_SERVICE.DELETE_EMPLOYEE, {
    onSuccess: () => {
      client.invalidateQueries("employees");
    },
  });

 
  
    return(
      <> 
       <input
          className="form-control
        block
        w-min
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        ml-3
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder={t("Search") + "......."}
        />
      
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg" >
          
        
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <thead className="ext-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3"
                      >
                        ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3"
                      >
                        {t("NAME")}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3"
                      >
                        {t("EMAIL")}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3"
                      >
                        {t("MOBILE")}
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3"
                      >
                        {t("LOCATION")}
                      </th>
                      <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      {t("Department")}
                    </th>
                      <th
                        scope="col"
                        className="px-6 py-3"
                      >
                        {t("ACTION")}
                      </th>
                     
                    </tr>
                  </thead>
                  <tbody>
                  {data?.data &&
                    data?.data
                      .filter((val) => {
                        if (val == "") {
                          return val;
                        } else if (
                          val.name
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          val.email
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                          val.location
                            .toLowerCase()
                            .includes(search.toLowerCase())
                        ) {
                          return val;
                        }
                      })

                      .map((val, index) => ({
                        ...val,
                        tableId: index + 1,
                      }))
                      
                      .map((val, index) => (
                        console.log("GETTINGGG", val.department.title),
                        <tr className="border-b" key={index}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {val.tableId}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {val.name}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {val.email}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {val.mobile}
                          </td>
                          <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {val.location}
                          </td>
                       <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            {val.department.title}
                            
                          </td>
                          
  
                          <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                            <div className="flex">
                              <AiOutlineEdit
                                className="text-3xl cursor-pointer"
                                onClick={() => nav(`/update/${val.id}`)}
                              />
                              <AiOutlineDelete
                                className="ml-4 text-3xl cursor-pointer"
                                onClick={() => DELETE.mutate(val.id)}
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>

			
              </>
    )

}

export default Table;