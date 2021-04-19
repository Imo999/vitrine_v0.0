import React from 'react';
import Navigation from '../components/Navigation';
import ButtonsBottom from '../components/ButtonsBottom';
import Project from '../components/Project';



export const Project1 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <Project projectNumber={0} />
        <ButtonsBottom left={'/'} right={'/project-2'} />
      </div>
    </main>
  )
}

export const Project2 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <ButtonsBottom left={'/project-1'} right={'/project-3'} />
      </div>
    </main>
  )
}

export const Project3 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <ButtonsBottom left={'/project-2'} right={'/project-4'} />
      </div>
    </main>
  )
}

export const Project4 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <ButtonsBottom left={'/project-3'} right={'/project-5'} />
      </div>
    </main>
  )
}

export const Project5 = () => {
  return (
    <main>
      <div className="project">
        <Navigation />
        <ButtonsBottom left={'/project-4'} right={'/contact'} />
      </div>
    </main>
  )
}