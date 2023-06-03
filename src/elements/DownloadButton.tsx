import { FiDownload } from "react-icons/fi";

interface Props {
    href: string;
    text: string;
}

const DownloadButton = ({ href, text }: Props): JSX.Element => {
    return (
        <a title="Descargar CV" className="download-button" href={href} download target="_blank">
            <span className="download-button__text">{text}</span>
            <span className="download-button__icon-container">
                <FiDownload className="download-button__icon" />
            </span>
        </a>
    );
};

export { DownloadButton };
