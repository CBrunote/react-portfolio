import React, { useState, useRef } from 'react'
import { validateEmail } from '../utils/helpers';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [userEmail, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [userMessage, setMessage] = useState('');
  const [emailClasses, setemailClasses] = useState('my-4 p-2 bg-neutral-100')
  const [nameClasses, setnameClasses] = useState('my-4 p-2 bg-neutral-100')
  const [messageClasses, setmessageClasses] = useState('my-4 p-2 bg-neutral-100')

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const form = useRef()

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setemailClasses("my-4 p-2 bg-neutral-100")
    setnameClasses("my-4 p-2 bg-neutral-100")
    setmessageClasses("my-4 p-2 bg-neutral-100")

    if (!validateEmail(userEmail)) {
      setemailClasses('bg-red-200 my-4 p-2')
      setErrorMessage('Please enter a valid email!');
      return;
    }

    if (!userName) {
      setnameClasses('bg-red-200 my-4 p-2')
      setErrorMessage(
        'Please enter a name before submitting'
      );
      return;
    }

    if (!userMessage) {
      setmessageClasses('bg-red-200 my-4 p-2')
      setErrorMessage(
        `Please enter a message before submitting`
      );
      return;
    }

    emailjs.sendForm('service_kzpmai3', 'template_xncloki', form.current, 'wBFFLS68ZtjbdsHtK')
    .then((result) => {
        setSuccessMessage(`Thank you for your message ${userName}. Your message was sent successfully!`)
        console.log(result.text);
    }, (error) => {
        setErrorMessage('There was an error when sending your message')
        console.log(error.text);
        return;
    });

    setName('');
    setEmail('');
    setMessage('');
    setErrorMessage('');
  };

  return (
    <div name='contact' className='bg-neutral-900 text-neutral-100 w-full h-screen flex justify-center items-center p-4'>
        <form ref={form} onSubmit={handleFormSubmit} className='flex flex-col max-w-[600px] w-full mx-auto justify-center text-neutral-900'>
          <div className='pb-8 items-center'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-neutral-100'>Contact</p>
            <p className='text-left text-neutral-100 py-4'>I would love to hear from you. Please submit the form below to send me a message.</p>
          </div>
          <input
            className={nameClasses}
            type='text'
            name='name'
            placeholder='Name'
            value= {userName}
            onChange={handleInputChange}
          />
          <input
            className={emailClasses}
            type='email'
            name='email'
            placeholder='Email'
            value= {userEmail}
            onChange={handleInputChange}
          />
          <textarea
            className={messageClasses}
            name='message'
            rows='10'
            placeholder='Message'
            value= {userMessage}
            onChange={handleInputChange}>
          </textarea>
          {errorMessage && (
            <div>
              <p className="error-text font-bold text-red-600 text-center">{errorMessage}</p>
            </div>
          )}
          {successMessage && (
            <div>
              <p className="error-text font-bold text-green-600 text-center">{successMessage}</p>
            </div>
          )}
          <button className='text-neutral-100 font-bold group border-2 px-6 py-3 my-2 mx-auto flex items-center hover:bg-sky-400 hover:border-sky-400' type='submit' value='Send'>SUBMIT</button>
        </form>
    </div>
  )
}

export default Contact
