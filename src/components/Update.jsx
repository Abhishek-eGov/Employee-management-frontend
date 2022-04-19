
import { lazy, Suspense } from "react";
import { useMutation, useQuery, useQueryClient } from "react-query";
import {useParams ,useNavigate, } from "react-router-dom";
import EMPLOYEE_SERVICE from '../components/service'

function Update() {
	const nav = useNavigate();
	const UpdateForm = lazy(() => import("./Form"));
	const { id } = useParams();
  const queryClient = useQueryClient();
  const { data, error } = useQuery(
    "employe",
    () => EMPLOYEE_SERVICE.EMPLOYEE(id),
    {
      enabled: !!id,
    }
  );

  const UPDATE = useMutation(EMPLOYEE_SERVICE.UPDATE_EMPLOYEE, {
    onSuccess: () => {
      queryClient.invalidateQueries("employees");
      nav("/");
    },
  });

  const onSubmit = async (data) => {
    console.log(data, "ll");
    await UPDATE.mutate({ id, ...data });
  };

 
  if (error) <h1>SomeThing Went Wrong!</h1>;
	return (
		<Suspense fallback={<h1>isLoading...</h1>}>
			<UpdateForm onSubmit={onSubmit} data={{ ...data?.data }} />
		</Suspense>
	);
}

export default Update;
