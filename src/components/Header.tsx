import React from 'react'

interface Props{
    children?:React.ReactNode
}

const Header = ({children}:Props):JSX.Element => {
  return (
    <header className="header">
        {children}
    </header>
  )
}

export  {Header}