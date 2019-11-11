import React, { Fragment } from 'react';
import Head from 'next/head';
import brand from '~/static/text/brand';
import PropTypes from 'prop-types';
import Error from '../components/Error';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { withTranslation } from '../i18n';

class ErrorPage extends React.Component {
  static async getInitialProps() {
    return {
      namespacesRequired: ['common', 'starter-landing'],
    };
  }

  render() {
    const { onToggleDark, onToggleDir } = this.props;
    const { errorCode, stars, t } = this.props;
    if (errorCode) {
      return (
        <Fragment>
          <Head>
            <title>
              { brand.starter.name }
              &nbsp; -&nbsp;
              {errorCode}
            </title>
          </Head>
          <div>
            <Header onToggleDark={onToggleDark} onToggleDir={onToggleDir} invert />
            <Error errorCode={errorCode} text={t('common:404')} />
            <Footer />
          </div>
        </Fragment>
      );
    }

    return (
      <div>
        {t('common:error_with_status')}
        Next stars:&nbsp;
        {stars}
      </div>
    );
  }
}

ErrorPage.propTypes = {
  errorCode: PropTypes.string,
  stars: PropTypes.number,
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  t: PropTypes.func.isRequired,
};

ErrorPage.defaultProps = {
  errorCode: '404',
  stars: 0,
};

export default withTranslation(['common', 'starter-landing'])(ErrorPage);
