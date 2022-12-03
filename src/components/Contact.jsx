import React, { useState } from "react";
import { useForm } from "../hooks/useForm";

function Contact() {
  {
    const initialData = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    const onValidate = (form) => {
      let errors = {};
      let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
      let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
      let regexComments = /^.{1,255}$/;

      if (!form.name.trim()) {
        errors.name = 'El campo "Nombre" no debe ser vacio.';
      } else if (!regexName.test(form.name)) {
        errors.name = 'El campo "Nombre" solo acepta letras y espacios.';
      }

      if (!form.email.trim()) {
        errors.email = 'El campo "Correo" no debe ser vacio.';
      } else if (!regexEmail.test(form.email)) {
        errors.email = 'El campo "Correo" contiene un formato no valido.';
      }

      if (!form.subject.trim()) {
        errors.subject = 'El campo "Asunto" no debe ser vacio.';
      } else if (!regexName.test(form.subject)) {
        errors.subject = 'El campo "Asunto" solo acepta letras y espacios.';
      }

      if (!form.message.trim()) {
        errors.message = 'El campo "Mensaje" no debe ser vacio.';
      } else if (!regexComments.test(form.message)) {
        errors.message = 'El campo "Mensaje" acepta solo 255 caracteres.';
      }

      return errors;
    };

    const { form, errors, loading, handleChange, handleSubmit } = useForm(
      initialData,
      onValidate
    );

    return (
      <>
        <hr id="form" />
        <form className="form showcase" onSubmit={handleSubmit}>
          <h3 className="form__heading">Escríbeme un correo</h3>

          <div className="form-left">
            <div className="form-section">
              <label className="form-label">Nombre</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={form.name}
                onChange={handleChange} autoComplete="off"
                placeholder="Nombre y apellido"
              />
              {errors.name && <p className="msg-error">{errors.name}</p>}
            </div>

            <div className="form-section">
              <label className="form-label">Correo electrónico</label>
              <input
                type="email"
                className="form-control"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="omar@email.com" autoComplete="off"
              />
              {errors.email && <p className="msg-error">{errors.email}</p>}
            </div>

            <div className="form-section">
              <label className="form-label">Asunto</label>
              <input
                type="text"
                className="form-control"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Motivo de tu mensaje" autoComplete="off"
              />
              {errors.subject && <p className="msg-error">{errors.subject}</p>}
            </div>
          </div>

          <div className="form-right">
            <div className="form-section">
              <label className="form-label">Mensaje</label>
              <textarea
                className="form-control"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder=""
                autoComplete="off"
              />
              {errors.message && <p className="msg-error">{errors.message}</p>}
            </div>

            <div className="form-section form-section--btn">
              <button className="form-btn" disabled={loading}>
                {loading ? "Enviando..." : "Envíar"}
              </button>
            </div>
          </div>
        </form>
      </>
    );
  }
}

export { Contact };
