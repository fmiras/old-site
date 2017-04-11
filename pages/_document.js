import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head} = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
        <meta charSet="utf-8"/>

        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        <link rel="icon" href="/static/images/favicon.ico"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/static/images/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/static/images/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/static/images/apple-icon-114x114.png"/>

        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:500,300,400" type="text/css"/>
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
       <body>
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
