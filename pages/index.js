import Head from 'next/head'

export default () => (
  <div>
    <Head>
      <meta charSet="utf-8"/>

      <title> Material CV/Resume </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <meta name="description" content="Materialize portfolio one page template, Using for personal website."/>
      <meta name="keywords" content="cv, resume, portfolio, materialize, onepage, personal, blog"/>
      <meta name="author" content="Siful Islam, DeviserWeb"/>

      <link rel="icon" href="/static/images/favicon.ico"/>
      <link rel="apple-touch-icon" sizes="72x72" href="/static/images/apple-icon-72x72.png"/>
      <link rel="apple-touch-icon" sizes="76x76" href="/static/images/apple-icon-76x76.png"/>
      <link rel="apple-touch-icon" sizes="114x114" href="/static/images/apple-icon-114x114.png"/>

      <link href="https://fonts.googleapis.com/css?family=Roboto:500,300,400" rel="stylesheet" type="text/css"/>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.97.0/css/materialize.min.css"/>
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"/>
      <link rel="stylesheet" href="/static/css/timeline.css"/>
      <link rel="stylesheet" href="/static/css/animate.css"/>
      <link rel="stylesheet" href="/static/css/nav.css"/>
      <link rel="stylesheet" href="/static/css/jquery.fancybox.css"/>

      <link rel="stylesheet" href="/static/css/style.css"/>
      <link rel="stylesheet" href="/static/css/responsive.css"/>

      <link rel="stylesheet" href="/static/css/color/lime.css" title="lime"/>
    </Head>
    <div className="body">
      <header id="header-top">
        <div className="container">
          <div className="row">
            <div className="top-contact col m12 s12 right">
              <span><i className="fa fa-envelope"/> <a href="mailto:">miras.federico@gmail.com</a></span>
              <span><i className="fa fa-phone"/> <a href="tel:">+5491166300062 </a></span>
            </div>
          </div>
        </div>
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
                  <a href="#" data-activates="slide-out" className="button-collapse"><i className="mdi-navigation-menu"/></a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <div className="row">
            <div className="intro z-depth-1 col m12">
              <div className="col m12 s12">
                <div className="profile-pic wow fadeIn a1" data-wow-delay="0.1s" >
                  <img src="/static/images/proflpic.jpg" alt=""/>
                </div>
              </div>
              <div className="col m12 s12 co-centered wow fadeIn a2" data-wow-delay="0.2s">
                <div className="intro-content">
                  <h2>Federico Mirás</h2>
                  <span>Hacker & Entrepeneur</span>
                  <p>Hi! My name is Federico, you can just call me &quot;fefo&quot;.
                  I&apos;m a 20-years old software developer and entrepreneurship enthusiastic
                  always searching, discussing or creating ideas to turn them into high-tech projects.
                  I&apos;m also a freelance developer!
                  </p>
                  <a href="#" className="btn waves-effect">Download CV</a>
                  <a href="#contact-form" className="btn btn-success waves-effect">Contact Me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <div className="row">
            <div className="section-title wow fadeIn a1" data-wow-delay="0.1s">
              <h2> <i className="fa fa-gears"/>Skills</h2>
            </div>
            <div className="skill-line z-depth-1">
              <div className="row">
                <div className="col m6 s12">
                  <div className="col m2 skill-icon">
                    <i className="fa fa-calendar-o"/>
                  </div>
                  <div className="skill-bar col m10 wow fadeIn a1" data-wow-delay="0.1s">
                    <h3>Technical Skills </h3>
                    <span>CSS</span>
                    <div className="progress">
                      <div className="determinate"> 70% </div>
                    </div>

                    <span>Javascript</span>
                    <div className="progress">
                      <div className="determinate"> 95%</div>
                    </div>

                    <span>Java</span>
                    <div className="progress">
                      <div className="determinate">90%</div>
                    </div>

                    <span>Software Architecture</span>
                    <div className="progress">
                      <div className="determinate">90%</div>
                    </div>
                  </div>
                </div>
                <div className="col m6 s12">
                  <div className="col m2 skill-icon">
                    <i className="fa fa-calendar-o"/>
                  </div>
                  <div className="skill-bar col m10 wow fadeIn a2" data-wow-delay="0.2s">
                    <h3>Personal Skills </h3>
                    <span>Communication</span>
                    <div className="progress">
                      <div className="determinate"> 85% </div>
                    </div>

                    <span>Team Work</span>
                    <div className="progress">
                      <div className="determinate"> 90%</div>
                    </div>

                    <span>Client Management</span>
                    <div className="progress">
                      <div className="determinate">80%</div>
                    </div>

                    <span>Dedication</span>
                    <div className="progress">
                      <div className="determinate">85%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works">
        <div className="container">
          <div className="row">
            <div className="section-title">
              <h2> <i className="fa fa-suitcase"/>Work Experience</h2>
            </div>
            <div id="cd-timeline" className="cd-container">
              <div className="cd-timeline-block wow fadeIn a2" data-wow-delay="0.2s">
                <div className="cd-timeline-img"/>
                <div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href="https://finance.strands.com/">
                    <h2>Software Engineer <br/> Strands, Inc.</h2>
                  </a>
                  <span>May 2016 - Present </span>
                  <p>Working as full stack web engineer at <a href="https://moneystrands.com/">
                    <span>MoneyStrands</span></a>, a mobile application
                  for iOS and Android to manage your personal finances with
                  full integration to your bank. </p>
                </div>
              </div>
              <div className="cd-timeline-block wow fadeIn a3" data-wow-delay="0.3s">
                <div className="cd-timeline-img"/>
                <div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href="https://onready.com.ar/"><h2>Cofounder <br/> onReady</h2></a>
                  <span>Mar 2016 - Present </span>
                  <p>Software Factory Startup where we guide our clients to bring their
                   business to the internet and we develop end-to-end solutions.</p>
                </div>
              </div>
              <div className="cd-timeline-block wow fadeIn a4" data-wow-delay="0.4s">
                <div className="cd-timeline-img"/>
                <div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href="">
                    <h2>Freelance Software Engineer</h2>
                  </a>
                  <span>Feb 2015 - Present </span>
                  <p>Went threw many projects from minimal UI components for apps to
                  implement end-to-end solutions helping business models to get done.</p>
                </div>
              </div>
              <div className="cd-timeline-block wow fadeIn a5" data-wow-delay="0.5s">
                <div className="cd-timeline-img"/>
                <div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href="https://www.connectis-argentina.com/en-home">
                    <h2>Full Stack Web Developer <br/> Connectis-ICT Services S.A.</h2>
                  </a>
                  <span>Aug 2015 - May 2016 </span>
                  <p>Systems Consultant Company where I was hire to work with the fantastic <a href="http://somospnt.com/"><span>SomosPNT team</span></a> to solve problems
                  a develop solutions for <a href="http://www.fravega.com/"><span>Fravega Ecommerce</span></a> and <a href="http://www.movistar.com.ar/"><span>Movistar Web</span></a>, in my case,
                  as backend software developer.
                  </p>
                </div>
              </div>
              <div className="cd-timeline-block wow fadeIn a6" data-wow-delay="0.5s">
                <div className="cd-timeline-img"/>
                <div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href="https://www.connectis-argentina.com/en-home">
                    <h2>IT Support <br/> Asociación Católica Irlandesa</h2>
                  </a>
                  <span>Mar 2015 - Aug 2015 </span>
                  <p>Servers maintenance and backups. Infrastructure and networks
                  configuration and deployment, Technical support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blog">
        <div className="container">
          <div className="row">
            <div className="section-title wow fadeIn a1" data-wow-delay="0.1s">
              <h2> <i className="fa fa-edit"/>Blog</h2>
            </div>
            <div className="row">
              <div className="blog">
                <div className="col m4 s12 blog-post wow fadeIn a2" data-wow-delay="0.2s">
                  <div className="thumbnail z-depth-1 animated">
                    <a href="blog-full-post.html"><img src="/static/images/b-1.jpg" alt="" className="responsive-img"/></a>
                    <div className="blog-details">
                      <div className="post-title" id="blog-post-1">
                        <a href="blog-full-post.html">
                          <h2>Website Design</h2>
                          <span>branding, ui-ux, article</span>
                        </a>
                      </div>
                      <div className="post-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare arcu ac velit ultricies fermentum.
                        Aliquam ornare arcu ac velit ultricies fermentum.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col m4 s12 blog-post wow fadeIn a3" data-wow-delay="0.3s">
                  <div className="thumbnail z-depth-1">
                    <a href="blog-full-post.html"><img src="/static/images/b-1.jpg" alt="" className="responsive-img"/></a>
                    <div className="blog-details">
                      <div className="post-title" id="blog-post-2">
                        <a href="blog-full-post.html">
                          <h2>Website Redesign</h2>
                          <span>branding, ui-ux, article</span>
                        </a>
                      </div>
                      <div className="post-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam ornare arcu ac velit ultricies fermentum.
                        Aliquam ornare arcu ac velit ultricies fermentum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam ornare arcu ac velit ultricies fermentum.
                        Aliquam ornare arcu ac velit ultricies fermentum.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col m4 s12 blog-post wow fadeIn a4" data-wow-delay="0.4s">
                  <div className="thumbnail z-depth-1">
                    <a href="blog-full-post.html"><img src="/static/images/b-1.jpg" alt="" className="responsive-img"/></a>
                    <div className="blog-details">
                      <div className="post-title" id="blog-post-3">
                        <a href="blog-full-post.html">
                          <h2>Music Player Design</h2>
                          <span>branding, ui-ux, article</span>
                        </a>
                      </div>
                      <div className="post-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aliquam ornare arcu ac velit ultricies fermentum.
                        Aliquam ornare arcu ac velit ultricies fermentum.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col m4 s12 blog-post wow fadeIn a5" data-wow-delay="0.5s">
                  <div className="thumbnail z-depth-1">
                    <a href="blog-full-post.html"><img src="/static/images/b-1.jpg" alt="" className="responsive-img"/></a>
                    <div className="blog-details">
                      <div className="post-title" id="blog-post-4">
                        <a href="blog-full-post.html">
                          <h2>Marketing Partner</h2>
                          <span>branding, ui-ux, article</span>
                        </a>
                      </div>
                      <div className="post-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Aliquam ornare arcu ac velit ultricies fermentum.
                                                    Aliquam ornare arcu ac velit ultricies fermentum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Aliquam ornare arcu ac velit ultricies fermentum.
                                                    Aliquam ornare arcu ac velit ultricies fermentum.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col m4 s12 blog-post wow fadeIn a6" data-wow-delay="0.6s">
                  <div className="thumbnail z-depth-1">
                    <a href="blog-full-post.html"><img src="/static/images/b-1.jpg" alt="" className="responsive-img"/></a>
                    <div className="blog-details">
                      <div className="post-title" id="blog-post-6">
                        <a href="blog-full-post.html">
                          <h2>Marketing Partner</h2>
                          <span>branding, ui-ux, article</span>
                        </a>
                      </div>
                      <div className="post-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Aliquam ornare arcu ac velit ultricies fermentum.
                                                    Aliquam ornare arcu ac velit ultricies fermentum.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Aliquam ornare arcu ac velit ultricies fermentum.
                                                    Aliquam ornare arcu ac velit ultricies fermentum.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col m4 s12 blog-post wow fadeIn a7" data-wow-delay="0.7s">
                  <div className="thumbnail z-depth-1">
                    <a href="blog-full-post.html"><img src="/static/images/b-1.jpg" alt="" className="responsive-img"/></a>
                    <div className="blog-details">
                      <div className="post-title" id="blog-post-5">
                        <a href="blog-full-post.html">
                          <h2>Web development </h2>
                          <span>branding, ui-ux, article</span>
                        </a>
                      </div>
                      <div className="post-details">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                                    Aliquam ornare arcu ac velit ultricies fermentum.
                                                    Aliquam ornare arcu ac velit ultricies fermentum.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <div className="row">
            <div className="section-title wow fadeIn a1" data-wow-delay="0.1s">
              <h2> <i className="fa fa-graduation-cap"/>Education</h2>
            </div>

            <div className="cd-container" id="ed-timeline">
              <div className="cd-timeline-block wow fadeIn a2" data-wow-delay="0.2s">
                <div className="cd-timeline-img"/>
                <div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href="https://www.uade.edu.ar/"><h2>Bachelor&apos;s degree in Information Technology Management <br/> UADE</h2></a>
                  <span>Feb 2017 - Dec 2019 (Estimated)</span>
                  <p>A career mixed with information systems technical development and entrepreneurship management.</p>
                </div>
              </div>
              <div className="cd-timeline-block wow fadeIn a3" data-wow-delay="0.3s">
                <div className="cd-timeline-img"/>                   			<div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href="https://www.frba.utn.edu.ar/"><h2>Systems Information Engineering <br/> UTN</h2></a>
                  <span>Feb 2015 - Dec 2016 </span>
                  <p>2 years of studies until I change of university.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials">
        <div className="container">
          <div className="row">
            <div className="section-title wow fadeIn a1" data-wow-delay="0.1s">
              <h2> <i className="fa fa-quote-left"/>Clients</h2>
            </div>
            <div className="clients-quates wow fadeIn a3" data-wow-delay="0.3s">
              <div className="row">
                <div className="quates col m4 s12">
                  <div className="thumbnail z-depth-1">
                    <img src="/static/images/team1.jpg" alt=""/>
                    <h3>Jhon Doe</h3>
                    <span>CEO, Creative Market</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                      ornare arcu ac velit ultricies fermentum. Aliquam ornare arcu ac velit ultricies fermentum..</p>
                  </div>
                </div>
                <div className="quates col m4 s12">
                  <div className="thumbnail z-depth-1">
                    <img src="/static/images/team1.jpg" alt=""/>
                    <h3>Jhon Adnan</h3>
                    <span>CEO, Lorem Ipsum</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      Aliquam ornare arcu ac velit ultricies fermentum.Aliquam ornare arcu ac velit ultricies fermentum.</p>
                  </div>
                </div>
                <div className="quates col m4 s12">
                  <div className="thumbnail z-depth-1">
                    <img src="/static/images/team1.jpg" alt=""/>
                    <h3>Mark Anwar</h3>
                    <span>CEO, Bdpark Market</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                      Aliquam ornare arcu ac velit ultricies fermentum. Aliquam ornare arcu ac velit ultricies fermentum.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="clear"/>
          </div>
        </div>
      </section>
      <section id="contact-form">
        <div className="container">
          <div className="row">
            <div className="section-title wow fadeIn a1" data-wow-delay="0.1s">
              <h2> <i className="fa fa-send"/>Contact</h2>
            </div>
            <div className="contact-form z-depth-1" id="contact">
              <div className="row">
                <form d id="contactForm">
                  <div id="msgSubmit" className="h3 text-center hidden"/>
                  <div className="input-field col m6 s12 wow fadeIn a2" data-wow-delay="0.2s">
                    <label htmlFor="name" className="h4">Name *</label>
                    <input required type="text" className="form-control validate" id="name" data-error="NEW ERROR MESSAGE"/>
                  </div>
                  <div className="input-field col m6 s12 wow fadeIn a4" data-wow-delay="0.4s">
                    <label htmlFor="email" className="h4">Email *</label>
                    <input required type="email" className="form-control validate" id="email"/>
                  </div>
                  <div className="input-field col m6 s12 wow fadeIn a3" data-wow-delay="0.3s">
                    <label htmlFor="last_name" className="h4">Subject *</label>
                    <input required type="text" className="form-control validate" id="last_name"/>
                  </div>
                  <div className="input-field col m6 s12 wow fadeIn a5" data-wow-delay="0.5s" >
                    <select>
                      <option value="">Choose a reason</option>
                      <option value="1">Professional</option>
                      <option value="2">Personal</option>
                      <option value="3">Both or other</option>
                    </select>
                  </div>
                  <div className="input-field col m12 s12 wow fadeIn a6" data-wow-delay="0.6s">
                    <label htmlFor="message" className="h4 ">Message *</label>
                    <textarea required id="message" className="form-control materialize-textarea validate"/>
                  </div>
                  <button type="submit" id="form-submit" className="btn btn-success waves-effect wow fadeIn a7" data-wow-delay="0.7s">Submit</button>

                </form>
              </div>
            </div>

            <div className="interests col s12 m12 l12 wow fadeIn" data-wow-delay="0.1s">
              <div className="row">
                <ul className="z-depth-1">
                  <a href="https://www.facebook.com/miras.federico"><li><i className="fa fa-facebook-official tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="Facebook"/></li></a>
                  <a href="https://twitter.com/mirasfederico"><li><i className="fa fa-twitter tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="Twitter"/></li></a>
                  <a href="https://www.linkedin.com/in/fmiras/"><li><i className="fa fa-linkedin tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="LinkedIn"/></li></a>
                  <li><i className="fa fa-whatsapp tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="Whatsapp"/></li>
                  <a href="https://github.com/fmiras/"><li><i className="fa fa-github tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="Github"/></li></a>
                  <a href="https://angel.co/fmiras"><li><i className="fa fa-angellist tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="AngelList"/></li></a>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"/>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.95.3/js/materialize.min.js"/>
      <script src="https://cdn.jsdelivr.net/jquery.mixitup/latest/jquery.mixitup.min.js"/>
      <script src="/static/js/masonry.pkgd.js"/>
      <script src="/static/js/jquery.fancybox.pack.js"/>
      <script src="/static/js/validator.min.js"/>
      <script src="/static/js/jquery.nav.js"/>
      <script src="/static/js/modernizr.js"/>
      <script src="/static/js/jquery.sticky.js"/>
      <script src="/static/js/wow.min.js"/>
      <script src="/static/js/init.js"/>

    </div>
  </div>
)
