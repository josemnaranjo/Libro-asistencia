import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import { addTrabajador } from "../services/trabajador.services";
import Swal from "sweetalert2";

const NuevoTrabajador = () => {
  const [error, setError] = useState([]);
  const addTrabajadorFromService = async (values) => {
    try {
      await addTrabajador(values);
      Swal.fire({
        icon: "success",
        text: "trabajador agregado a la base de dato",
        timer: 2000,
        timerProgressBar: true,
        background: "#FFBF18",
        color: "#ffff",
        showConfirmButton: false,
        padding: "3em",
      });
    } catch (err) {
      console.log(err.response.data.err.errors[0].message);
      setError(err.response.data.err.errors[0].message);
    }
  };

  const valSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "El nombre del trabajador debe tener más de 3 caracteres")
      .required("Por favor, ingresa el nombre del trabajador"),

    lastName: Yup.string()
      .min(3, "El apellido del trabajador debe tener más de 3 caracteres")
      .required("Por favor, ingresar el apellido del trabajador"),

    //queda pendiente validación de formato de rut
    rut: Yup.string().required("Por favor, ingresar el rut del trabajador"),
  });
  return (
    <div className="h-5/6 px-6 pt-12">
      <div className="border-xl h-5/6 rounded-xl bg-gradient-to-r from-slate-100 to-slate-300 px-10 py-10">
        <h1 className="text-center text-2xl">Formulario de nuevo trabajador</h1>
        <div className="py-20 mt-20">
          <Formik
            initialValues={{
              name: "",
              lastName: "",
              rut: "",
            }}
            validationSchema={valSchema}
            onSubmit={(values, { resetForm }) => {
              addTrabajadorFromService(values);
              resetForm();
            }}
            enableReinitialize
          >
            {({ errors, touched }) => (
              <Form className="text-center">
                <div className="flex justify-center">
                  <div>
                    <div>
                      <label htmlFor="name">Nombre:</label>
                      <Field
                        id="name"
                        type="text"
                        name="name"
                        className="mx-2 w-64 rounded-lg border border-stone-400 bg-white p-1 text-xs"
                      />
                      {errors.name && touched.name ? (
                        <p className="text-red-600">{errors.name}</p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="lastName">Apellido:</label>
                      <Field
                        id="lastName"
                        type="text"
                        name="lastName"
                        className="mx-2 mt-5 w-64 rounded-lg border border-stone-400 bg-white p-1 text-xs"
                      />
                      {errors.lastName && touched.lastName ? (
                        <p className="text-red-600">{errors.lastName}</p>
                      ) : null}
                    </div>

                    <div>
                      <label htmlFor="rut">Rut:</label>
                      <Field
                        id="rut"
                        type="text"
                        name="rut"
                        className="ml-9 mt-5 w-64 rounded-lg border border-stone-400 bg-white p-1 text-xs"
                        placeholder="XXXXXXXX-X"
                      />
                      {errors.rut && touched.rut ? (
                        <p className="text-red-600">{errors.rut}</p>
                      ) : null}
                      {error ? <p className="text-red-600">{error}</p> : null}
                    </div>
                  </div>

                  <div className="ml-28 mt-5 ">
                    <button
                      className="mt-5 rounded-lg bg-secondary-dark p-2.5 text-xs text-white"
                      type="submit"
                    >
                      agregar
                    </button>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default NuevoTrabajador;
