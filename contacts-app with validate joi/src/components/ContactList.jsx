import React from 'react';
import ContactItem from './ContactItem';
import Joi from 'joi';
import { validateProps }  from '../utils/validation.js';

const ContactListSchema = Joi.object({
  contacts: Joi.array().items(
    Joi.object({
      id: Joi.number().required(),
      name: Joi.string().required(),
      tag: Joi.string().required(),
      imageUrl: Joi.string().optional(),
    })
  ).required(),
  onDelete: Joi.func().required(),
});

function ContactList(props) {
  const validatedProps = validateProps(ContactListSchema, props, 'ContactList');
  const { contacts, onDelete } = validatedProps;
  return (
    <div className="contact-list">
      {
        contacts.map((contact) => (
          <ContactItem 
          key={contact.id}
          id={contact.id}
          onDelete={onDelete}
          {...contact} />
        ))
      }
    </div>
  );
}

export default ContactList;