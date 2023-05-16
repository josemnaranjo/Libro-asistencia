import React from "react";
import { addTrabajador } from "../services/trabajador.services";
import Swal from "sweetalert2";
import NewWorkerFormulario from "../components/NewWorkerFormulario";


const NuevoTrabajador = () => {

    const addTrabajadorFromService = async (values) => {
        try {
          await addTrabajador(values);
          Swal.fire({
            icon: "success",
            text: "trabajador agregado a la base de dato",
            timer: 1000,
            timerProgressBar: true,
            showConfirmButton: false,
            padding: "3em",
          });
        } catch (err) {
          Swal.fire({
              icon: "error",
              iconColor: "#2236D6",
              title: `El rut del trabajador ya existe en la base de datos`,
              background: "#ffff",
              padding: "5em",
            });
          console.log(err.response.data.err.errors[0].message);
        }
      };

  return (
    <div className="h-5/6 flex justify-center items-center px-12">
      <div className="h-fit w-full border-xl rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        <h1 className="text-center text-2xl">Formulario de nuevo trabajador</h1>
        <NewWorkerFormulario onSubmitProp={addTrabajadorFromService} />
      </div>
    </div>
  );
};

export default NuevoTrabajador;
