import React from 'react';
import ContactForm from '../contacts/ContactForm';
import Contacts from '../contacts/Contacts';

const Home = () => {
  return (
    <div className='grid-2'>
      <ContactForm />
      <div>
        <Contacts />
      </div>
    </div>
  );
};

export default Home;
