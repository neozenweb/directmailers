import React from 'react';
import Formol, { Field, Inliner } from 'formol/lib/formol';
import Layout from '../components/layout';
import { states } from '../components/fields';
import 'formol/lib/default.css';

const onSubmit = ({ login, password }) => {
  return alert(login, password);
};

const homepage = () => {
  return (
    <Layout>
      <h1>Are you getting your lowest payment?</h1>
      <p>
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </p>

      <Formol onSubmit={onSubmit}>
        <Inliner>
          <Field type="number" name="approval1" size={3} required />
          <Field type="number" name="approval2" size={3} required />
          <Field type="number" name="approval3" size={3} required />
        </Inliner>
        <Inliner>
          <Field autoFocus placeholder="First Name" name="firstname" required />
          <Field placeholder="Last Name" name="lastname" required />
        </Inliner>
        <Field placeholder="Address" name="address" required />
        <Inliner>
          <Field placeholder="City" name="city" required />
          <Field
            placeholder="State"
            name="state"
            choices={states}
            type="select"
            required
          />
          <Field placeholder="Zip" type="number" name="zip" size={5} required />
        </Inliner>
      </Formol>
    </Layout>
  );
};

export default homepage;
