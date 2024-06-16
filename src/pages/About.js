import React from 'react'

const About = () => {
  return (
    <section>
        <div className='about__img'>
            <img src={`${process.env.PUBLIC_URL}/images/image-about-dark.jpg`} alt='About Us Image'/>
        </div>
        <article>
          <h1>
          About our furniture
          </h1>
          <p>         
            Our multifunctional collection blends design and function to suit your individual taste.
            Make each room unique, or pick a cohesive theme that best express your interests and what
            inspires you. Find the furniture pieces you need, from traditional to contemporary styles
            or anything in between. Product specialists are available to help you create your dream space.  
          </p>
        </article>
        <div className='about__img'>
        <img src={`${process.env.PUBLIC_URL}/images/image-about-light.jpg`} alt='About Us Image'/>
        </div>
    </section>
  )
}

export default About
