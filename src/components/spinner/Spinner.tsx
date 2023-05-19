import { StyledSpinner } from "./StyledSpinner";

interface Props {
  className?: string;
}

const Spinner = ({ className }: Props): JSX.Element => {
  return (
    <StyledSpinner className={className}>
      <div className="spinner"></div>
    </StyledSpinner>
  );
};

export { Spinner };
