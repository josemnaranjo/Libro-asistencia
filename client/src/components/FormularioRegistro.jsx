import React from "react";
import { Formik, Form, Field } from "formik";

const FormularioRegistro = ({ onSubmitProps }) => {
  return (
    <div>
      <Formik
        initialValues={{
          rut: "",
        }}
        onSubmit={(values, { resetForm }) => {
          onSubmitProps(values);
          resetForm();
        }}
      >
        <Form className="py-12">
          <div className="grid grid-rows-2 justify-items-center gap-3">
            <label htmlFor="rut" className="text-lg">
              Ingrese su rut
            </label>
            <Field
              id="rut"
              type="text"
              name="rut"
              placeholder="XX.XXX.XXX-X"
              className=" w-38 rounded-lg border border-stone-400 bg-white px-2 py-1 text-center text-sm"
            />
          </div>

          <div className="py-9 text-center">
            <button
              className="rounded-lg bg-secondary-dark p-2.5 text-sm text-white"
              type="submit"
            >
              aceptar
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormularioRegistro;
