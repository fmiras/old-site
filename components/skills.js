export default () => (
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
)
