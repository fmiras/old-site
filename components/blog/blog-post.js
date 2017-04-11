export default ({title, subtitle, children}) => (
  <div
    className="col m4 s12 blog-post wow fadeIn a2"
    data-wow-delay="0.2s"
    >
    <div className="thumbnail z-depth-1 animated">
      <div className="blog-details">
        <div className="post-title" id="blog-post-1">
          <a href="blog-full-post.html">
            <h2>{ title }</h2>
            <span>{ subtitle }</span>
          </a>
        </div>
        <div className="post-details">
          <p>
            { children }
          </p>
        </div>
      </div>
    </div>
  </div>
)
