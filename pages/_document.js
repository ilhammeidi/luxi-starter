import React from 'react';
import Document, { Html, Main, NextScript } from 'next/document';
import { ServerStyleSheets } from '@material-ui/styles';
import HeadComponent from '../components/head';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en" dir="ltr">
        <HeadComponent />
        <body>
          <div
            id="preloader"
            style={{
              position: 'fixed',
              zIndex: 10000,
              background: '#fafafa',
              width: '100%',
              height: '100%',
            }}
          >
            <img
              style={{
                opacity: 0.5,
                position: 'fixed',
                top: 'calc(50% - 50px)',
                left: 'calc(50% - 50px)'
              }}
              src="/images/loading.gif"
              alt="loading"
            />
          </div>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. document.getInitialProps
  // 4. app.render
  // 5. page.render
  // 6. document.render
  //
  // On the server with error:
  // 1. document.getInitialProps
  // 2. app.render
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. app.getInitialProps
  // 2. page.getInitialProps
  // 3. app.render
  // 4. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({ // eslint-disable-line
      enhanceApp: App => props => sheets.collect(<App {...props} />), // eslint-disable-line
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    namespacesRequired: ['common', 'starter-landing'],
    // Styles fragment is rendered after the app and page rendering finish.
    styles: (
      <React.Fragment>
        {initialProps.styles}
        {process.env.NODE_ENV === 'development' && sheets.getStyleElement()}
      </React.Fragment>
    ),
  };
};

export default MyDocument;
