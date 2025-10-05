import React from 'react';
import Joi from 'joi';
import { validateProps }  from '../utils/validation.js';

const ContactInputSchema = Joi.object({
  addContact: Joi.func().required(),
});
class ContactInput extends React.Component {
  constructor(props) {
    super(props);

    const validatedProps = validateProps(ContactInputSchema, props, 'ContactInput');
    // inisialisasi state
    this.state = {
      name: '',
      tag: '',
      validatedProps
    }

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onTagChangeEventHandler = this.onTagChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      }
    });
  }

  onTagChangeEventHandler(event) {
    this.setState(() => {
      return {
        tag: event.target.value,
      }
    });
  }

  onSubmitEventHandler(event) {
    event.preventDefault();

    const { addContact } = this.state.validatedProps;
    addContact(this.state);
  }

  render() {
   return (
     <form className='contact-input' onSubmit={this.onSubmitEventHandler}>
       <input type="text" placeholder="Nama" value={this.state.name} onChange={this.onNameChangeEventHandler} />
       <input type="text" placeholder="Tag" value={this.state.tag} onChange={this.onTagChangeEventHandler} />
       <button type="submit">Tambah</button>
     </form>
   )
 }
}

export default ContactInput;
