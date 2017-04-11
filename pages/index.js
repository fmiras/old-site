import Head from 'next/head'

import Header from '../components/header'
import About from '../components/about'
import Skills from '../components/skills'
import Works from '../components/works'
import Blog from '../components/blog'
import Education from '../components/education'
import Testimonials from '../components/testimonials'
import Contact from '../components/contact'

export default () => (
  <div>
    <Head>
      <title> Federico Mirás </title>
    </Head>
    <div className="body">
      <Header/>
      <About/>
      <Skills/>
      <Works/>
      <Blog/>
      <Education/>
      <Testimonials/>
      <Contact/>
    </div>
  </div>
)
