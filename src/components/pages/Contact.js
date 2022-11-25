import React, { useState } from 'react';
import validateEmail from '../../utils/helpers';

export default function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [errMessage, setErrMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either name, email, and message
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'message') {
            setEmailMessage(inputValue);
        };

    }
    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrMessage('Email is invalid. Please try again!');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
        }
        if (name === '') {
            setErrMessage(
                `Please enter your name.`
            );
            return;
        }
        if (emailMessage === '') {
            setErrMessage(
                `Please enter a message.`
            );
            return;
        }

        // If everything goes according to plan, we want to clear out the input after a successful message.
        setName('');
        setEmail('');
        setEmailMessage('');
    }
    return (
        <>
            <h2>Contact Me</h2>
            <form>
                <div className='form-group'>
                    <label>Name</label>
                    <input
                        type='text'
                        value={name}
                        name='name'
                        className='form-input form-control'
                        placeholder='Please enter your full name'
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Email Address</label>
                    <input
                        type='text'
                        value={email}
                        name='email'
                        className='form-input form-control'
                        placeholder='Please enter your email address'
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label>Message</label>
                    <textarea
                        value={emailMessage}
                        name='message'
                        className=' form-control'
                        placeholder='Please enter your message'
                        onChange={handleInputChange}
                        rows="5"
                        required
                    />
                </div>
                {errMessage && (
                    <div>
                        <p className="error-text">{errMessage}</p>
                    </div>
                )}
                <button
                    type="button"
                    onClick={handleFormSubmit}
                >
                    Submit
                </button>
            </form>
        </>
    );

}
