import { CTALink } from '../../components/CTALink/CTALink'
import { StyledNotFound } from './StyledNotFound'

const NotFound = (): JSX.Element => {
    return (
        <StyledNotFound>
            <div className="loader">
                <div className="box1"></div>
                <div className="box2"></div>
                <div className="box3"></div>
            </div>
            <p className='text'>Página no encontrada <span className='emoji'>😟</span></p>
            <CTALink text='Ir a la página de inicio' to='/' />
        </StyledNotFound>
    )
}

export { NotFound }
