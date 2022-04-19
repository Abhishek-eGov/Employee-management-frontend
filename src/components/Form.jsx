
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate} from "react-router-dom";
import Header from "./Header/header";
import Input from "./Input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useTranslation } from "react-i18next";

const schema = yup
  .object({
    name: yup
      .string()
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .max(40)
      .required(),
    email: yup.string().email().required(),
    mobile: yup
      .string()
      .matches(new RegExp("[0-9]{10}"), "Please enter valid Mobile Nmber"),
    location: yup.string().required(),
  })
  .required();

function Form({ onSubmit, data }) {

	const { t } = useTranslation();
	
	const nav = useNavigate();
	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
		
	});
	useEffect(() => {
		if (data) {
			setValue("name", data?.name);
			setValue("email", data?.email);
			setValue("mobile", data?.mobile);
			setValue("location", data?.location);
		}// eslint-disable-next-line
	}, [data]);

	return (
		<>
		<Header/>
			<div className="w-full max-w-6xl flex justify-center items-center ">
				<form
					className="w-full max-w-sm container mt-2 mx-auto" onSubmit={handleSubmit(onSubmit)} 
				>
		<Input type="text" label="Name" register={register} required />
        <p className="text-red-500 text-sm italic">{errors.name?.message}</p>

		<Input type="text" label="Email" register={register} required />
        <p className="text-red-500 text-sm italic">{errors.email?.message}</p>

        <Input type="text" label="Mobile" register={register} required />
        <p className="text-red-500 text-sm italic">{errors.mobile?.message}</p>

        <Input label="Location" register={register} />
        <p className="text-red-500 text-sm italic">
          {errors.location?.message && "Enter location"}
        </p>
		<div className="mt-5 flex justify-center ">
						<button
							type="submit"
							className="mt-5 bg-green-400 w-full hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						>
							SUBMIT
						</button></div>
						<div className="mt-5 flex justify-center ">
						<button
							className="mt-5 bg-red-400 w-full hover:bg-blue-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
							onClick={() => nav("/")}
						>
							Cancle
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Form;
