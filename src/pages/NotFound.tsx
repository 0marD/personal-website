import { BsEmojiDizzy } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const NotFound = (): JSX.Element => {
  return (
  <main className="not-found">
    <BsEmojiDizzy className="not-found__icon"/>
    <div className="not-found__content">
      <p className="not-found__text">Pagina no encotrada</p>
      <Link to={"/"} className="not-found__button">Ir a inicio</Link>
    </div>
  </main>
  )
}

export { NotFound }