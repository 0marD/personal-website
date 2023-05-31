
interface Props {
    className?: string;
  }


const Spinner = ({ className }: Props) :JSX.Element=> {
  return (
    <div className={`spinner-container ${className}`}>
        <div className="spinner"></div>
    </div>
  )
}

export  {Spinner}