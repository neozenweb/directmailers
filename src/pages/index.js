import React from 'react';
import Layout from '../components/layout';
import 'formol/lib/default.css';
import Formol, { Field } from 'formol/lib/formol';

const onSubmit = ({ login, password }) => {
  return alert(login, password);
};

const homepage = () => {
  return (
    <Layout>
      <h1>Home</h1>

      <Formol onSubmit={onSubmit}>
        <Field type="number" name="approval" size={9}>
          Approval Number
        </Field>
        <Field type="number" name="zip" size={5}>
          Zip code
        </Field>
      </Formol>
    </Layout>
  );
};

export default homepage;
