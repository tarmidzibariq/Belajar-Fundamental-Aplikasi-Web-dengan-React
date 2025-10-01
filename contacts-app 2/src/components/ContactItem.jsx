import React from 'react';
import ContactItemBody from './ContactItemBody';
import ContactItemImage from './ContactItemImage';
import DeleteButton from './DeleteButton';
import Joi from 'joi';
import { validateProps }  from '../utils/validation.js';

const ContactItemSchema = Joi.object({
  imageUrl: Joi.string().optional(),
  name: Joi.string().required(),
  tag: Joi.string().required(),
  id: Joi.number().required(),
  onDelete: Joi.func().required(),
});

function ContactItem(props ) {

  const validatedProps = validateProps(ContactItemSchema, props, 'ContactItem');
  const { imageUrl, name, tag, id, onDelete } = validatedProps;

  return (
    <div className="contact-item">
      <ContactItemImage imageUrl={imageUrl} />
      <ContactItemBody name={name} tag={tag} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
 );
}

export default ContactItem;