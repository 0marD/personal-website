import { ButtonSubmit } from "../ButtonSubmit/ButtonSubmit";
import { CTALink } from "../CTALink/CTALink";
import { Input } from "../Input/Input";
import { SubHeading } from "../SubHeading/SubHeading";
import { TextArea } from "../TextArea/TextArea";
import { StyledContact } from "./StyledContact";
import { ContactMessage } from "../ContactMessage/ContactMessage";
import { useContact } from "./useContact";
import { Spinner } from "../spinner/Spinner";

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
  } = useContact();

  return (
    <StyledContact>
      <SubHeading text="Contacto" />
      <form className="form" onSubmit={handleFormSubmit}>
        <div className="form-section">
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
        <div className="form-section">
          <TextArea
            name="message"
            placeholder="Escribe el contenido de tu mensaje aquí"
            label="Mensaje"
            autoComplete="none"
            onChange={handleInputChange}
            error={formErrors.message}
            value={formValues.message}
          />
        </div>
        <ButtonSubmit text="Enviar" />
      </form>
      {spinner && <Spinner className={!spinner ? "" : "active"} />}
      <CTALink text="Ir al inicio" to="/" />
    </StyledContact>
  );
};

export { Contact };
