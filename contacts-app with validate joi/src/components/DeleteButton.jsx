import Joi from 'joi';
import React from 'react';
import { validateProps }  from '../utils/validation.js';
import { FiDelete } from 'react-icons/fi';
const DeleteButtonSchema = Joi.object({
  id: Joi.string().required(),
  onDelete: Joi.func().required(),
});

function DeleteButton(props) {
  const validatedProps = validateProps(DeleteButtonSchema, props, 'DeleteButton');
  const { id, onDelete } = validatedProps;

  return <button className='contact-item__delete' onClick={() => onDelete(id)}><FiDelete/> </button>
}

export default DeleteButton;