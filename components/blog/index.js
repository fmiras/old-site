import BlogPost from './blog-post'

export default () => (
  <section id="blog">
    <div className="container">
      <div className="row">
        <div className="section-title wow fadeIn a1" data-wow-delay="0.1s">
          <h2> <i className="fa fa-edit"/>Blog</h2>
        </div>
        <div className="row">
          <div className="blog">
            <BlogPost
              title="University in 2017"
              subtitle="Education and business"
              >
              Degrees, careers, some thoughts, opinions and a little
              bit of TV shows.
            </BlogPost>
          </div>
        </div>
      </div>
    </div>
  </section>
)
