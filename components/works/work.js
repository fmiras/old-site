import React from 'react'

export default class extends React.Component {
  render() {
    return (<div
      className={`cd-timeline-block wow fadeIn a${parseInt(this.props.id, 10) + 1}`}
      data-wow-delay={`0.${parseInt(this.props.id, 10) + 1}s`}
      >
      <div className="cd-timeline-img"/>
      <div className="cd-timeline-content col m5 s12 z-depth-1">
        <a href={`${this.props.href}`}>
          <h2>{this.props.title} <br/> {this.props.company} </h2>
        </a>
        <span> {this.props.date} </span>
        <p> {this.props.children} </p>
      </div>
    </div>)
  }
}
