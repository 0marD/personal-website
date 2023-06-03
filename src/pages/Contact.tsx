import { Link } from "react-router-dom";
import { Form } from "../components/Form";
import { useForm } from "../hooks/useForm";
import { TextArea } from "../elements/TextArea";
import { Input } from "../elements/Input";
import { Spinner } from "../elements/Spinner";
import { ContactMessage } from "../elements/ContactMessage";
import { ButtonIconRotate } from "../elements/ButtonIconRotate";

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
    <main className="contact">
      <h2 className="contact__heading">Contacto</h2>
      <Form onSubmit={handleFormSubmit}>
         <div>
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
         </div>
         <div className="form-separator">
         <TextArea
            name="message"
            placeholder="Escribe el contenido de tu mensaje aquí"
            label="Mensaje"
            autoComplete="none"
            onChange={handleInputChange}
            error={formErrors.message}
            value={formValues.message}
          />
        <ButtonIconRotate text="Enviar" />
         </div>
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
      <Link to={"/"} className="contact__link">
        Ir a inicio
      </Link>
    </main>
  );
};

export { Contact };