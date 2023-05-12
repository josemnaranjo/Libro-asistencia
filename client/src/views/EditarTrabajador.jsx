import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getOneTrabajador,
  updateTrabajador,
} from "../services/trabajador.services.js";
import EditarTrabajadorForm from "../components/EditarTrabajadorForm.jsx";
import Swal from "sweetalert2";

const EditarTrabajador = () => {
  const { rut } = useParams();
  const navigate = useNavigate();
  const [trabajador, setTrabajador] = useState();

  const getOneTrabajadorFromService = async () => {
    try {
      const res = await getOneTrabajador(rut);
      setTrabajador(res.data[0]);
    } catch (err) {
      Swal.fire({
        icon: "error",
        iconColor: "#2236D6",
        title: `Ocurrio un error al intentar recuperar la información del servidor`,
        background: "#ffff",
        padding: "5em",
      });
      console.log(err);
    }
  };

  const updateTrabajadorFromService = async (values, rut) => {
    try {
      await updateTrabajador(values, rut);
      navigate("/trabajadores");
    } catch (err) {
      Swal.fire({
        icon: "error",
        iconColor: "#2236D6",
        title: `Ocurrio un error al intentar actualizar la información del trabajador`,
        background: "#ffff",
        padding: "5em",
      });
      console.log(err);
    }
  };

  useEffect(() => {
    getOneTrabajadorFromService();
  }, []);
  return (
    <div className="h-5/6 px-6 pt-12">
      <div className="border-xl h-5/6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-44">
        <EditarTrabajadorForm
          name={trabajador?.name}
          lastName={trabajador?.lastName}
          rut={trabajador?.rut}
          onSubmitProp={updateTrabajadorFromService}
        />
      </div>
    </div>
  );
};

export default EditarTrabajador;
