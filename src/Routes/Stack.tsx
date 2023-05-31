import { Link } from "react-router-dom";
import { StackCard } from "../components/StackCard";

const Stack = (): JSX.Element => {
  return (
    <div className="stack route">
      <h2 className="stack__heading heading">Stack</h2>

      <div className="stack__stacks">
        <StackCard />
      </div>

      <Link className="stack__button button" to={"/"}>
        Ir a inicio
      </Link>
    </div>
  );
};

export { Stack };
