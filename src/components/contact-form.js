import React from 'react';
import {Field, reduxForm} from 'redux-form';

export function ContactForm() {
    return (
        <form>
            <label htmlFor="name">Your Name</label>
            <Field type="text" id="name" name="name" component="input" />
            <label htmlFor="email">Email address</label>
            <Field type="email" id="email" name="email" component="input" />
            <label htmlFor="message">Message</label>
            <Field id="message" name="message" component="textarea" />
            <button>Submit</button>
        </form>
    );
}

export default reduxForm({
    form: 'contact'
})(ContactForm);
