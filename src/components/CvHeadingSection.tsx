interface Props {
    text: string;
  }
  
  const CvHeadingSection = ({ text }: Props) => {
    return (
      <div className="cv-heading-section">
        <hr className="cv-heading-section__line" />
        <h4 className="cv-heading-section__title">{text}</h4>
      </div>
    );
  }
  
  export { CvHeadingSection };
  