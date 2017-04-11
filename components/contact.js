export default () => (
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
)
