import stackData from '../data/stackData';

interface Props {
  slice?: number;
}

const StackCard = ({ slice }: Props) => {

  const toRender = stackData.slice(0, slice);

  return (
    <>
      {toRender.map((tech) => (
        <div className="stack-card" key={tech.name}>
          <div className="stack-card__image-wrapper">
            <img className="stack-card__image" src={tech.src} alt={tech.alt} />
          </div>
          <span className="stack-card__name">{tech.name}</span>
        </div>
      ))}
    </>
  );
};

export { StackCard };
