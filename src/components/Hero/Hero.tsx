import { StyledHero } from "./StyledHero";
import heroImage from "../../assets/images/pictureMy.png"

const Hero = (): JSX.Element => {
    return (
        <StyledHero>
            <div className="hero__top">
                <p className="hero__greeting">Hola, soy</p>
                <h1 className="hero__name">
                    <span className="hero__first-name">Omar </span>
                    <span className="hero__last-name">Díaz</span>
                </h1>
                <h2 className="hero__subtitle">
                    Soy un desarrollador frontend
                </h2>
            </div>
            <div className="hero__bottom">
                <figure className="hero__image-wrap">
                    <img
                        src={heroImage}
                        alt="Omar Díaz's photo"
                        className="hero__image"
                    />
                </figure>
            </div>
        </StyledHero>
    );
};

export { Hero };
