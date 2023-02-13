import React from 'react';
import { useForm } from '../../hooks/useForm';
import { StyledContact } from './StyledContact';

const Contact = () => {
  const initialData = {
    name: '',
    email: '',
    subject: '',
    message: '',
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
      <hr id='contact' />
      <StyledContact>
        <h3>Escríbe un e-mail</h3>
        <form action='' className='form' onSubmit={handleSubmit}>
          <div className='form__left'>
            <div className='form__container'>
              <label>Nombre</label>
              <input
                type='text'
                className='input'
                name='name'
                value={form.name}
                onChange={handleChange}
              />
              <div className='bar'></div>
              {errors.name && <p className='msg-error'>{errors.name}</p>}
            </div>
            <div className='form__container'>
              <label>Asunto</label>
              <input
                type='text'
                className='input'
                name='subject'
                value={form.subject}
                onChange={handleChange}
                autoComplete='off'
              />
              <div className='bar'></div>
              {errors.subject && <p className='msg-error'>{errors.subject}</p>}
            </div>
            <div className='form__container'>
              <label>Email</label>
              <input
                type='email'
                className='input'
                name='email'
                value={form.email}
                onChange={handleChange}
              />
              <div className='bar'></div>
              {errors.email && <p className='msg-error'>{errors.email}</p>}
            </div>
          </div>
          <div className='form__right'>
            <div className='textAreaWrapper'>
              <textarea
                placeholder='Escríbe tu mensaje aquí'
                type='text'
                className='textInput'
                name='message'
                value={form.message}
                onChange={handleChange}
                autoComplete='off'
              />
              <div className='barTextarea'></div>
            </div>
            {errors.message && <p className='msg-error'>{errors.message}</p>}
            <button className='form__btn' disabled={loading}>
              {loading ? 'Enviando...' : 'Envíar'}
            </button>
          </div>
        </form>
      </StyledContact>
    </>
  );
};

export { Contact };
