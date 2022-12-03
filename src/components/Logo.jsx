import React from 'react'


function Logo() {
  return (
    <a href='#home' className='logoContainer' title='Go to home'>
      <div className='logoTop'>
        <span className='logoFill'>Omar</span><span className='logoNoFill'>Díaz</span>
      </div>
      <div className='logoBottom'>
        <hr className='logoLine' />
        <span className='logoLegend'>Desarrollo Front-end</span>
      </div>
    </a>
  )
}

export { Logo }