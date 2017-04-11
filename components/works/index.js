import Work from './work'

export default () => (
  <section id="works">
    <div className="container">
      <div className="row">
        <div className="section-title">
          <h2> <i className="fa fa-suitcase"/>Work Experience</h2>
        </div>
        <div id="cd-timeline" className="cd-container">
          <Work
            id="1"
            title="Software Engineer"
            company="Strands, Inc."
            date="May 2016 - Present"
            href="https://finance.strands.com/"
            >
            Working as full stack web engineer
            at <a href="https://moneystrands.com/"><span>MoneyStrands</span></a>,
            a mobile application for iOS and Android to manage your personal
            finances with full integration to your bank.
          </Work>
          <Work
            id="2"
            title="Cofounder"
            company="onReady"
            date="Mar 2016 - Present"
            href="https://onready.com.ar/"
            >
          Software Factory Startup where we guide our clients to bring their
           business to the internet and we develop end-to-end solutions.
          </Work>
          <Work
            id="3"
            title="Freelance Software Engineer"
            date="Feb 2015 - Present"
            >
          Went threw many projects from minimal UI components for apps to
          implement end-to-end solutions helping business models to get done.
          </Work>
          <Work
            id="4"
            title="Full Stack Web Developer"
            company="Connectis-ICT Services S.A."
            date="Aug 2015 - May 2016"
            href="https://www.connectis-argentina.com/"
            >
              Systems Consultant Company where I was hire to work with the fantastic <a href="http://somospnt.com/"><span>SomosPNT team</span></a> to solve problems
              a develop solutions for <a href="http://www.fravega.com/"><span>Fravega Ecommerce</span></a> and <a href="http://www.movistar.com.ar/"><span>Movistar Web</span></a>, in my case,
              as backend software developer.
              </Work>
          <Work
            id="5"
            title="IT Support"
            company="Asociación Católica Irlandesa"
            date="Mar 2015 - Aug 2015"
            href="http://www.acirlandesa.org.ar/"
            >
              Servers maintenance and backups. Infrastructure and networks
              configuration and deployment, Technical support.
              </Work>
        </div>
      </div>
    </div>
  </section>
)
