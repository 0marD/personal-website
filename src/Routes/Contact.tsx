import { Form } from "../components/Form";
import { Input } from "../components/Input";
import { TextArea } from "../components/TextArea";
import { Link } from "react-router-dom";
import { useForm } from "../hooks/useForm";
import { Spinner } from "../components/Spinner";
import { ContactMessage } from "../components/ContactMessage";

const Contact = (): JSX.Element => {
  const {
    isSuccess,
    isError,
    handleFormSubmit,
    handleInputChange,
    handleContactErrorMessage,
    handleContactSuccessMessage,
    formValues,
    formErrors,
    spinner,
  } = useForm();

  return (
    <div className="contact route">
      <h2 className="contact-heading heading">Contacto</h2>
      <Form onSubmit={handleFormSubmit}>
        <>
          <Input
            name="name"
            type="text"
            placeholder="Omar Díaz"
            label="Nombre"
            autoComplete="none"
            onChange={handleInputChange}
            error={formErrors.name}
            value={formValues.name}
          />
          <Input
            name="email"
            type="email"
            placeholder="omar@mail.com"
            label="Correo"
            autoComplete="none"
            onChange={handleInputChange}
            error={formErrors.email}
            value={formValues.email}
          />
        </>
        <>
          <Input
            name="subject"
            type="text"
            placeholder="Saludo"
            label="Asunto"
            autoComplete="none"
            onChange={handleInputChange}
            error={formErrors.subject}
            value={formValues.subject}
          />
          <TextArea
            name="message"
            placeholder="Escribe el contenido de tu mensaje aquí"
            label="Mensaje"
            autoComplete="none"
            onChange={handleInputChange}
            error={formErrors.message}
            value={formValues.message}
          />
        </>
        <button type="submit" className="contact__submit button" title="Enviar">
          Enviar
        </button>
      </Form>
      {spinner && <Spinner className={!spinner ? "" : "active"} />}
      {isSuccess && (
        <ContactMessage
          text="¡Gracias por contactarme 😀!"
          text2="Tu mensaje ha sido enviado con éxito 💪."
          text3="Me pondré en contacto contigo lo antes posible 🤞."
          onClick={handleContactSuccessMessage}
        />
      )}
      {isError && (
        <ContactMessage
          text="Lo siento, ha habido un problema al enviar tu mensaje 🥺."
          text2="Por favor, inténtalo de nuevo más tarde o ponte en contacto conmigo por otros medios"
          onClick={handleContactErrorMessage}
        />
      )}
      <Link to={"/"} className="btn-style-v1">
        Ir a inicio
      </Link>
    </div>
  );
};

export { Contact };
