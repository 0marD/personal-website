import { StyledSubHeading } from './StyledSubHeading'
interface Props {
    text: string
}
const SubHeading = (props: Props): JSX.Element => {
    return (
        <StyledSubHeading>{props.text}</StyledSubHeading>
    )
}

export { SubHeading }