import React, { Fragment } from 'react';
import Head from 'next/head';
import brand from '../static/text/brand';
import RegisterForm from '../components/Forms/Register';

function Register() {
  return (
    <Fragment>
      <Head>
        <title>
          { brand.starter.name }
          &nbsp; - Register
        </title>
      </Head>
      <div>
        <RegisterForm />
      </div>
    </Fragment>
  );
}

Register.getInitialProps = async () => ({
  namespacesRequired: ['common', 'hosting-landing'],
});

export default Register;
