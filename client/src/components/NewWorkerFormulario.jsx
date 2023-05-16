import React from "react";
import { Formik, Field, Form } from "formik";
import * as Yup from "yup";


const NewWorkerFormulario = ({ onSubmitProp }) => {
  const valSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "El nombre del trabajador debe tener más de 3 caracteres")
      .required("Por favor, ingresa el nombre del trabajador"),

    lastName: Yup.string()
      .min(3, "El apellido del trabajador debe tener más de 3 caracteres")
      .required("Por favor, ingresar el apellido del trabajador"),

    rut: Yup.string().required("Por favor, ingresar el rut del trabajador"),
  });

  return (
    <div className="py-20">
      <Formik
        initialValues={{
          name: "",
          lastName: "",
          rut: "",
          exEmpleado: false,
        }}
        validationSchema={valSchema}
        onSubmit={(values, { resetForm }) => {
          onSubmitProp(values);
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
                </div>

                <div className="mt-5">
                  <label htmlFor="true">
                    {" "}
                    El trabajador es exempleado
                    <Field type="checkbox" name="exEmpleado" className="ml-2" />
                  </label>
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
  );
};

export default NewWorkerFormulario;
