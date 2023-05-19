import { StyledProjectsPreview } from './StyledProjectsPreview';
import { SubHeading } from '../SubHeading/SubHeading';
import { CTALink } from '../CTALink/CTALink';
import { MappedProjects } from '../MappedProjects/MappedProjects';
import { useProjectsPreview } from './useProjectsPrewiev';
import { HoverCard } from '../HoverCard/HoverCard';
import { useEffect, useRef } from 'react';

const ProjectsPreview = (): JSX.Element => {

    const { slice } = useProjectsPreview();
    const contentRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        const handleScrollToTop = () => {
            if (contentRef.current) {
                contentRef.current.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });
            }
        };

        const ctaLinkElement = document.getElementById('ctaLinkElement');
        if (ctaLinkElement) {
            ctaLinkElement.addEventListener('click', handleScrollToTop);
        }

        return () => {
            if (ctaLinkElement) {
                ctaLinkElement.removeEventListener('click', handleScrollToTop);
            }
        };
    }, []);


    return (
        <StyledProjectsPreview ref={contentRef}>
            <SubHeading text='Proyectos' />
            <MappedProjects slice={slice} />
            <HoverCard slice={slice} className="preview" />
            <CTALink text='Ver todo' to='/projects' />
        </StyledProjectsPreview>
    );
};

export { ProjectsPreview };
