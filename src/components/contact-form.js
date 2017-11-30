import React from 'react';

export default function ContactForm() {
    return (
        <form>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" />
            <label htmlFor="email">Email address</label>
            <input type="email" id="email" />
            <label htmlFor="message">Message</label>
            <textarea id="message" />
            <button>Submit</button>
        </form>
    );
}
