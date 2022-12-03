import React from 'react'
import { Certifications } from './Certifications'
import { Contact } from './Contact'
import Hero from './Hero'
import { Projects } from './Projects'
import { Techs } from './Techs'


function Main() {
  return (
    <main className="main">
      <Hero />
      <Techs />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}

export { Main }