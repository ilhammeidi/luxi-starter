import React from 'react';
import Document, { Html, Main, NextScript } from 'next/document';
import createEmotionServer from '@emotion/server/create-instance';
import { getInitColorSchemeScript } from '@mui/material/styles';
import createEmotionCache from '../theme/createEmotionCache';
import HeadComponent from '../components/head';
import i18nextConfig from '../next-i18next.config';

class MyDocument extends Document {
  render() {
    const currentLocale = this.props.__NEXT_DATA__.query.locale || i18nextConfig.i18n.defaultLocale;
    return (
      <Html lang={currentLocale} dir={currentLocale === 'ar' ? 'rtl' : 'ltr'}>
        <HeadComponent />
        <body>
          <div
            id="preloader"
            style={{
              position: 'fixed',
              zIndex: 2001,
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
          {getInitColorSchemeScript()}
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
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({ enhanceApp: (App) => function EnhanceApp(props) { // eslint-disable-line
      return <App emotionCache={cache} {...props} />;
    },
  });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
    namespacesRequired: ['common', 'starter-landing'],
  };
};

export default MyDocument;
