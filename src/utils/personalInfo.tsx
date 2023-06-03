export const generateEmail = () => {
  const username = "omar.diaz.dez";
  const domain = "gmail.com";

  return (
    <a href={`mailto:${username}@${domain}`} className="personal-info__link">
      {`${username}@${domain}`}
    </a>
  );
};

export const generatePhoneNumber = () => {
  const part1 = "+52";
  const part2 = "33-3708";
  const part3 = "4290";

  return (
    <a href={`tel:${part1}${part2}${part3}`} className="personal-info__link">
      (+52) 33-3708-4290
    </a>
  );
};
