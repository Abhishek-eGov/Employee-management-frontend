import React, { useEffect, useState } from "react";
import { Controller } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useQuery } from "react-query";

import EMPLOYEE_SERVICE from "./service";
export default function Department({ label, control, required, type }) {
  const { t } = useTranslation();
  const { data, status, isLoading, error } = useQuery(
    "departments",
    EMPLOYEE_SERVICE.DEPARTMENTS
  );
  const [options, setOptions] = useState([]);
  useEffect(() => {
    setOptions([]);
    if (!isLoading && !error) {
      data.data.map((val) => {
        setOptions((prev) => [
          ...prev,
          { value: val.id, label: val.title },
          
        ]);
        console.log('values gettinggg',val.title);
      });
    }
  }, [isLoading, error]);
  if (status === "loading") return <p>Loading</p>;
  
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
    <label
      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
      htmlFor="grid-first-name"
    >
      {t("Department")}
    </label>

    <Controller
      name="department_id"
      control={control}
      render={({ field }) => (
        <select
          className="form-select form-select-lg appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          aria-label=".form-select-lg example"
          {...field}
        >
          {data?.data?.map((val) => (
            <option key={val.id} value={val.id}>
              {val.title}
            </option>
          ))}
        </select>
      )}
    />
  </div>
  );
}
