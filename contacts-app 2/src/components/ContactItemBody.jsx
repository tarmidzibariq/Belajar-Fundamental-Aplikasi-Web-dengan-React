import Joi from 'joi';
import React from 'react';
import { validateProps } from '../utils/validation';

const ContactItemBodySchema = Joi.object({
  name: Joi.string().required(),
  tag: Joi.string().required(),
});

function ContactItemBody(props) {
  const validatedProps = validateProps(ContactItemBodySchema, props, 'ContactItemBody');
  const { name, tag } = validatedProps;
  
 return (
   <div className="contact-item__body">
     <h3 className="contact-item__title">{name}</h3>
     <p className="contact-item__username">@{tag}</p>
   </div>
 );
}

export default ContactItemBody;