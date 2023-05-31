interface Props {
  children?: React.ReactNode;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}

const Form = ({ children, onSubmit }: Props): JSX.Element => {
  return (
    <form className="form" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export { Form };
