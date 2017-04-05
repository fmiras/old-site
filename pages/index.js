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
                    <li><a href="#portfolio">Portolio</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#pricing-table">Pricing</a></li>
                    <li><a href="#clients">Client</a></li>
                    <li><a href="#contact-form">Contact</a></li>
                  </ul>
                  <ul className="side-nav" id="slide-out">
                    <li><a href="#" className="active">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#portfolio">Portolio</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#pricing-table">Pricing</a></li>
                    <li><a href="#clients">Client</a></li>
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
                  <span>Creative Director of DeviserWeb</span>
                  <p>Hello everyone, My name is Al Rayhan. I am User Interface Designer from Bangladesh. I started designing
                                  things about 5 years ago. I love to explore design and interact people with it. I design Website, Icons, Logos,
                                  Print Templates, Mobile & Desktop App.</p>
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
                    <h3>Professional Skills </h3>
                    <span>Adobe Photoshop</span>
                    <div className="progress">
                      <div className="determinate"> 70% </div>
                    </div>

                    <span>HTML</span>
                    <div className="progress">
                      <div className="determinate"> 95%</div>
                    </div>

                    <span>CSS</span>
                    <div className="progress">
                      <div className="determinate">90%</div>
                    </div>

                    <span>Javascript</span>
                    <div className="progress">
                      <div className="determinate">85%</div>
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
                      <div className="determinate"> 70% </div>
                    </div>

                    <span>Team Work</span>
                    <div className="progress">
                      <div className="determinate"> 95%</div>
                    </div>

                    <span>Creativity</span>
                    <div className="progress">
                      <div className="determinate">90%</div>
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
                <div className="cd-timeline-img"/>                   			<div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href=""><h2>UI & WEB DESIGNER @Academy</h2></a>
                  <span>11 Jan 2015 </span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora.</p>
                </div>
              </div>
              <div className="cd-timeline-block wow fadeIn a3" data-wow-delay="0.3s">
                <div className="cd-timeline-img"/><div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href=""><h2>UI & WEB DESIGNER @Academy</h2></a>
                  <span>11 Jan 2015 </span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                   dolorum provident rerum aut hic quasi placeat iure tempora.</p>
                </div>
              </div>
              <div className="cd-timeline-block wow fadeIn a4" data-wow-delay="0.4s">
                <div className="cd-timeline-img"/>
                <div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href="">
                    <h2>UI & WEB DESIGNER @Academy</h2>
                  </a>
                  <span>11 Jan 2015 </span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora.</p>
                </div>
              </div>
              <div className="cd-timeline-block wow fadeIn a5" data-wow-delay="0.5s">
                <div className="cd-timeline-img"/>
                <div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href="">
                    <h2>UI & WEB DESIGNER @Academy</h2>
                  </a>
                  <span>11 Jan 2015 </span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="portfolio">
        <div className="container">
          <div className="row">
            <div className="section-title wow fadeIn a1" data-wow-delay="0.1s">
              <h2><i className="fa fa-th-list"/>Portfolio</h2>
            </div>
            <div className="col m12 s12 portfolio-nav">
              <ul>
                <li className="filter" data-filter="all">Show All</li>
                <li className="filter" data-filter=".category-1">Art</li>
                <li className="filter" data-filter=".category-2">Icons</li>
                <li className="filter" data-filter=".category-3">Web Design</li>
                <li className="filter" data-filter=".category-4">Materials</li>
              </ul>
            </div>
            <div id="loader">
              <div className="loader-icon"/>
            </div>
            <div className="screenshots" id="portfolio-item" >
              <div className="row">
                <ul className="grid">
                  <li className="col m3 s12 mix category-1">
                    <a href="project.html" className="sa-view-project-detail" data-action="#project-one">
                      <figure className="more">
                        <img src="/static/images/p-1.jpg" alt="Screenshot 01"/>
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>Minimal Design</h2>
                              <p>Work hard {'for'} what you want because
                              it won&apos;t come to you without a fight</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li className="col m3 s12 mix category-2">
                    <a href="project.html" className="sa-view-project-detail" data-action="#project-two">
                      <figure className="more">
                        <img src="/static/images/p-1.jpg" alt="Screenshot 01"/>
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>Lorem Design</h2>
                              <p>Work hard for what you want because
                                                          it won&apos;t come to you without a fight</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li className="col m3 s12 mix category-1">
                    <a href="project.html" className="sa-view-project-detail" data-action="#project-three">
                      <figure className="more">
                        <img src="/static/images/p-1.jpg" alt="Screenshot 01"/>
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>Creative Design</h2>
                              <p>Lorem Ipsum because
                                                          it won&apos;t come to you without a fight</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li className="col m3 s12 mix category-2">
                    <a href="project.html" className="sa-view-project-detail" data-action="#project-four">
                      <figure className="more">
                        <img src="/static/images/p-1.jpg" alt="Screenshot 01"/>
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>Material Design</h2>
                              <p>Work hard for what you want because
                                                          it won&apos;t come to you.</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li className="col m3 s12 mix category-4">
                    <a href="project.html" className="sa-view-project-detail" data-action="#project-five">
                      <figure className="more">
                        <img src="/static/images/p-1.jpg" alt="Screenshot 01"/>
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>Clean Code</h2>
                              <p>You want because
                                                          it won&apos;t come to you without a fight</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li className="col m3 s12 mix category-1">
                    <a href="project.html" className="sa-view-project-detail" data-action="#project-six">
                      <figure className="more">
                        <img src="/static/images/p-1.jpg" alt="Screenshot 01"/>
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>SEO Optimize</h2>
                              <p>Work hard for what you want because
                                                          it won&apos;t come to you without a fight</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li className="col m3 s12 mix category-2">
                    <a href="project.html" className="sa-view-project-detail" data-action="#project-seven">
                      <figure className="more">
                        <img src="/static/images/p-1.jpg" alt="Screenshot"/>
                        <figcaption>
                          <div className="caption-content">
                            <div className="single_image">
                              <h2>Responsive Design</h2>
                              <p>Work hard for what you want because
                                                          it won&apos;t come to you without a fight</p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                  <li className="col m3 s12 mix category-3">
                    <a href="project.html" className="sa-view-project-detail" data-action="#project-eight">
                      <figure className="more">
                        <img src="/static/images/p-1.jpg" alt="Screenshot 01"/>
                        <figcaption>
                          <div className="caption-content ">
                            <div className="single_image">
                              <h2>Minimal Design</h2>
                              <p>
                                                          Work hard for what you want need lorem ipsuum. </p>
                            </div>
                          </div>
                        </figcaption>
                      </figure>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="sa-project-gallery-view" id="project-gallery-view"/>
            <div className="back-btn col s12">
              <a id="back-button" className="btn btn-info waves-effect" href="#" ><i className="fa fa-long-arrow-left"/> Go Back </a>
            </div>

            <div className="market-place col m12 s12 z-depth-1 wow fadeIn a3" data-wow-delay="0.3s">
              <ul>
                <li><a href=""><h3>Behence</h3></a></li>
                <li><a href=""><h3>Dribble</h3></a></li>
                <li><a href=""><h3>Envato</h3></a></li>
                <li><a href=""><h3>Github</h3></a></li>
                <li><a href=""><h3>Twitter</h3></a></li>
                <li><a href=""><h3>Facebook</h3></a></li>
              </ul>
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
                <div className="cd-timeline-img"/>                   			<div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href=""><h2>UI & WEB DESIGNER @Academy</h2></a>
                  <span>11 Jan 2015 </span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora.</p>
                </div>                   		</div>                   		<div className="cd-timeline-block wow fadeIn a3" data-wow-delay="0.3s">
                  <div className="cd-timeline-img"/>                   			<div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href=""><h2>UI & WEB DESIGNER @Academy</h2></a>
                    <span>11 Jan 2015 </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                    dolorum provident rerum aut hic quasi placeat iure tempora.</p>
                  </div>                   		</div>
              <div className="cd-timeline-block wow fadeIn a4" data-wow-delay="0.4s">
                <div className="cd-timeline-img"/>                   			<div className="cd-timeline-content col m5 s12 z-depth-1">
                  <a href=""><h2>UI & WEB DESIGNER @Academy</h2></a>
                  <span>11 Jan 2015 </span>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                  dolorum provident rerum aut hic quasi placeat iure tempora.</p>
                </div>                   		</div>                   		<div className="cd-timeline-block wow fadeIn a5" data-wow-delay="0.5s">
                  <div className="cd-timeline-img"/>                   			<div className="cd-timeline-content col m5 s12 z-depth-1">
                    <a href=""><h2>UI & WEB DESIGNER @Academy</h2></a>
                    <span>11 Jan 2015 </span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio,
                    dolorum provident rerum aut hic quasi placeat iure tempora.</p>
                  </div>                   		</div>                   	</div>
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                              Aliquam ornare arcu ac velit ultricies fermentum.
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

      <section id="pricing-table">
        <div className="container">
          <div className="row">
            <div className="section-title wow fadeIn a1" data-wow-delay="0.1s">
              <h2> <i className="fa  fa-money "/>Pricing Table </h2>
            </div>
            <div className="pricing wow fadeIn a3" data-wow-delay="0.3s">
              <div className="row">
                <div className="plan col m4 s12">
                  <ul className="thumbnail z-depth-1">
                    <li> <strong>START-UP</strong> </li>
                    <li> <h3>$299</h3> </li>
                    <li><div className="span"> Logo</div></li>
                    <li><div className="span"> Domine & Hosting</div></li>
                    <li><div className="span"> One Page Landing</div></li>
                    <li><div className="span"> Email Marketing</div></li>
                    <li><div className="span"> Email Marketing</div></li>
                    <li><div className="span"> SEO</div></li>
                    <li> <button type="button" className="btn btn-info waves-effect">Order now</button></li>
                  </ul>
                </div>
                <div className="plan col m4 s12">
                  <ul className="thumbnail z-depth-1">
                    <li> <strong>SMALL BUSINESS</strong> </li>
                    <li> <h3>$499</h3> </li>
                    <li><div className="span"> Logo</div></li>
                    <li><div className="span"> Domine & Hosting</div></li>
                    <li><div className="span"> One Page Landing</div></li>
                    <li><div className="span"> Adsence</div></li>
                    <li><div className="span"> Email Marketing</div></li>
                    <li><div className="span"> SEO</div></li>
                    <li><button type="button" className="btn btn-info waves-effect">Order now</button></li>
                  </ul>
                </div>
                <div className="plan col m4 s12">
                  <ul className="thumbnail z-depth-1">
                    <li> <strong>ENTERPRISE</strong></li>
                    <li> <h3>$799</h3> </li>
                    <li><div className="span"> Logo</div></li>
                    <li><div className="span"> Domine & Hosting</div></li>
                    <li><div className="span"> One Page Landing</div></li>
                    <li><div className="span"> One Page Landing</div></li>
                    <li><div className="span"> Email Marketing</div></li>
                    <li><div className="span"> SEO</div></li>
                    <li>
                      <button type="button" className="btn btn-info waves-effect">
                    Order now
                    </button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="clients">
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
            <div className="clients-logo z-depth-1">
              <div className="row">
                <ul className="wow fadeIn a4" data-wow-delay="0.4s">
                  <li className="col m2 s6"><a href=""><img src="/static/images/client1.png" alt="" className="responsive-img"/></a></li>
                  <li className="col m2 s6"><a href=""><img src="/static/images/client2.png" alt="" className="responsive-img"/></a></li>
                  <li className="col m2 s6"><a href=""><img src="/static/images/client3.png" alt="" className="responsive-img"/></a></li>
                  <li className="col m2 s6"><a href=""><img src="/static/images/client4.png" alt="" className="responsive-img"/></a></li>
                  <li className="col m2 s6"><a href=""><img src="/static/images/client6.png" alt="" className="responsive-img"/></a></li>
                  <li className="col m2 s6"><a href=""><img src="/static/images/client7.png" alt="" className="responsive-img"/></a></li>
                </ul>
              </div>
            </div>
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
                    <label htmlFor="name" className="h4">Full Name *</label>
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
                      <option value="">Choose your Budget</option>
                      <option value="1">$10000-$20000</option>
                      <option value="2">$50000-$100000</option>
                      <option value="3">$50000-$1000000</option>
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
                  <li><i className="fa fa-facebook-official tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="Facebook"/></li>
                  <li><i className="fa fa-twitter tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="Twitter"/></li>
                  <li><i className="fa fa-linkedin tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="linkedin"/></li>
                  <li><i className="fa fa-whatsapp tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="Whatsapp"/></li>
                  <li><i className="fa fa-youtube tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="Youtube"/></li>
                  <li><i className="fa fa-vimeo tooltipped col m2 s6" data-position="top" data-delay="50" data-tooltip="Vimeo"/></li>
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
