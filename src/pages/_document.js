import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Helmet } from 'react-helmet';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        // see https://github.com/nfl/react-helmet#server-usage for more information
        // 'head' was occupied by 'renderPage().head', we cannot use it
        return { ...initialProps, helmet: Helmet.renderStatic() };
    }

    // should render on <html>
    get helmetHtmlAttrComponents() {
        return this.props.helmet.htmlAttributes.toComponent();
    }

    // should render on <body>
    get helmetBodyAttrComponents() {
        return this.props.helmet.bodyAttributes.toComponent();
    }

    // should render on <head>
    get helmetHeadComponents() {
        return Object.keys(this.props.helmet)
            .filter((el) => el !== 'htmlAttributes' && el !== 'bodyAttributes')
            .map((el) => this.props.helmet[el].toComponent());
    }

    render() {
        // if you don't like Helmet but you still want to set properties on body use this
        // const pageProps = _.get(this.props, '__NEXT_DATA__.props.pageProps');
        return (
            <Html {...this.helmetHtmlAttrComponents}>
                <Head>{this.helmetHeadComponents}</Head>
                        <script>
  !function () {
    var x = document.createElement("script");
    x.src = "https://ancillary.rebustech.io/ancillary-1.1.4.min.js",
    x.type = "text/javascript",
    x.async = "true",
    x.onload =
    x.onreadystatechange =
    function () {
      var x = this.readyState;
      if (!x || "complete" == x || "loaded" == x)
      try {
        WidgetRebus.default.mount({
        side: 'right',
        initialState: 'close',
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6eyJuYW1lIjoiQ09OR1JFU08gTUVESUNJTkEgREVMIEZVVELDk0wiLCJ0eXBlIjoid2lkZ2V0IiwiV2lkZ2V0Q29uZmlnIjp7InRleHRCdXR0b24iOiJJTlNDUsONQkVURSBBUVXDjSAiLCJjb2xvckJ1dHRvbkZvbnQiOiIjZmZmZmZmIiwiY29sb3JCdXR0b25CYWNrZ3JvdW5kIjoiIzJlN2QzMiIsIndpdGhCcmFuZHMiOmZhbHNlLCJ1cmxXaGVyZWJ5IjoiIn19LCJldmVudElkIjoiNjE4YmZmMjM3MmIwYzYwZDlhNzRlYmY3IiwiaWF0IjoxNjM3MzQ5Mjc2fQ.6HFQKiZYyDbJ2tAMctj3-MzS5T1cJoM9vcnezE3fZ1I'
        });
      } catch (e) {
        console.error('Error', e)
      }
    };
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(x, t)
  }();
</script>
                        <script async src="https://www.googletagmanager.com/gtag/js?id=G-YTBVKT4ZJZ"></script>
                        <script dangerouslySetInnerHTML={{
                    __html: ` window.dataLayer = window.dataLayer || [];
                          function gtag(){dataLayer.push(arguments);}
                          gtag('js', new Date());

                          gtag('config', 'G-YTBVKT4ZJZ');`
                }} />  
                     
                <body {...this.helmetBodyAttrComponents}>
                    <Main />
                    <script src="/js/plugins.js" />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
