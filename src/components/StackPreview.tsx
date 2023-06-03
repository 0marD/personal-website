import { Link } from 'react-router-dom'

interface Props {
  children?: React.ReactNode;
}

const StackPreview = ({ children }: Props): JSX.Element => {


  return (
    <section className="stack-preview">
      <h2 className="stack-preview__title">Stack</h2>
      <div className="stack-preview__cards">
        {children}
      </div>
      <Link to={"/stack"} className="stack-preview__button">Ver más</Link>
    </section>
  )
}

export { StackPreview }