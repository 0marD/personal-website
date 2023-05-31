import { Link } from "react-router-dom";
import { useStackPreview } from "../hooks/useStackPreview";
import { StackCard } from "./StackCard";

const StackPrewiev = (): JSX.Element => {

  const { slice } = useStackPreview();

  return (
    <div className="stack-preview section--light">
      <h2 className="stack-preview__title heading">Stack</h2>
      <div className="stack-preview__cards">
        <StackCard slice={slice} />
      </div>
      <Link to={"/stack"} className="btn-style-v1">Ver más</Link>
    </div>
  );
};

export { StackPrewiev };
