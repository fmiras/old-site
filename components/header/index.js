import ContactData from './contact-data'

export default () => (
  <header id="header-top">
    <ContactData/>

    <div id="header-bottom" className="z-depth-1">
      <div id="sticky-nav">
        <div className="container">
          <div className="row">
            <nav className="nav-wrap">
              <ul className="hide-on-med-and-down group" id="example-one">
                <li className="current_page_item"><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact-form">Contact</a></li>
              </ul>
              <ul className="side-nav" id="slide-out">
                <li><a href="#" className="active">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#education">Education</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact-form">Contact</a></li>
              </ul>
              <a href="#" data-activates="slide-out" className="button-collapse">
                <i className="mdi-navigation-menu"/>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
)
