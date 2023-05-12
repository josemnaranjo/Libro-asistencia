import { React, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  getOneTrabajador,
  createLicencia,
} from "../services/trabajador.services.js";
import { Formik, Form } from "formik";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
import dayjs from "dayjs";

const Licencias = () => {
  const { rut } = useParams();
  const [trabajador, setTrabajador] = useState();
  const navigate = useNavigate();

  const getAllTrabajadoresFromService = async () => {
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

  const createLicenciaFromService = async (values) => {
    try {
      Swal.fire({
        icon: "warning",
        iconColor: "#2236D6",
        title: "Por favor, confirmar si la información es correcta",
        html: `<h1>${trabajador.name} ${trabajador.lastName}</h1>
                    <h1>rut: ${trabajador.rut}</h1>
                    <p>inicio: ${dayjs(values.inicioLicencia).format(
                      "D-M-YYYY"
                    )}</p>
                    <p>término: ${dayjs(values.inicioLicencia).format(
                      "D-M-YYYY"
                    )}</p> `,
        showCancelButton: true,
        background: "#ffff",
        padding: "5em",
        confirmButtonColor: "#2236D6",
        cancelButtonColor: "#6272EE",
        confirmButtonText: "confirmar",
        cancelButtonText: "rechazar",
      }).then((result) => {
        if (result.isConfirmed) {
          createLicencia(rut, values);
          Swal.fire({
            icon: "success",
            text: "registro de licencia actualizado",
            timer: 2000,
            timerProgressBar: true,
            background: "#ffff",
            showConfirmButton: false,
            padding: "3em",
          });
          navigate("/trabajadores");
        }
      });
    } catch (err) {
      Swal.fire({
        icon: "error",
        iconColor: "#2236D6",
        title: `Ocurrio un error al intentar actualizar la información`,
        background: "#ffff",
        padding: "5em",
      });
      console.log(err);
    }
  };

  useEffect(() => {
    getAllTrabajadoresFromService();
  }, []);

  return (
    <div className="h-5/6 px-6 pt-12">
      <div className="border-xl h-5/6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        <h1 className="py-10 text-center text-2xl">Formulario de licencias</h1>

        <div className="py-20">
          <div className="grid h-10 grid-cols-2">
            <h1 className="text-center text-lg">
              {trabajador?.name} {trabajador?.lastName}
            </h1>
            <h1 className="text-center text-lg">{trabajador?.rut}</h1>
          </div>
          <Formik
            initialValues={{
              inicioLicencia: "",
              finLicencia: "",
            }}
            onSubmit={(values) => createLicenciaFromService(values)}
            enableReinitialize
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="grid grid-cols-2">
                  <div className="text-center">
                    <label htmlFor="inicio">Inicio:</label>
                    <DatePicker
                      selected={values.inicioLicencia}
                      onChange={(date) => setFieldValue("inicioLicencia", date)}
                      dateFormat={"dd-MM-yyyy"}
                      minDate={new Date()}
                      placeholderText="Elegir una fecha"
                      className="w-48 rounded-lg border border-stone-400 bg-white px-2 py-1 text-center text-sm"
                    />
                  </div>
                  <div className="text-center">
                    <label htmlFor="termino">Termino:</label>
                    <DatePicker
                      selected={values.finLicencia}
                      onChange={(date) => setFieldValue("finLicencia", date)}
                      dateFormat={"dd-MM-yyyy"}
                      minDate={new Date()}
                      placeholderText="Elegir una fecha"
                      className="w-48 rounded-lg border border-stone-400 bg-white px-2 py-1 text-center text-sm"
                    />
                  </div>
                </div>
                <div className="py-10 text-center">
                  <button
                    className="mt-5 rounded-lg bg-secondary-dark p-2.5 text-sm text-white"
                    type="submit"
                  >
                    registrar
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Licencias;
