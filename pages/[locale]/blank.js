import React from 'react';
import { useTranslation } from 'next-i18next'
import { getStaticPaths, makeStaticProps } from 'lib/getStatic';

const Homepage = () => {
  const { t } = useTranslation('common')

  return (
    <>
      <main>
        <h1>blank</h1>
        <p>{t('common:subtitle')}</p>
        <a href="/">home</a>
        <a href="/blank">blank</a>
      </main>
    </>
  )
}

export default Homepage

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };