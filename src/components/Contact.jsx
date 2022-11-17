import React, { useState } from 'react'
import { validateEmail } from '../utils/helpers';

const Contact = () => {
  const [userEmail, setEmail] = useState('');
  const [userName, setName] = useState('');
  const [userMessage, setMessage] = useState('');

  const [errorMessage, setErrorMessage] = useState('');

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

    if (!validateEmail(userEmail)) {
      setErrorMessage('Please enter a valid email!');
      return;
    }

    if (!userName) {
      setErrorMessage(
        'Please enter a name before submitting'
      );
      return;
    }

    if (!userMessage) {
      setErrorMessage(
        `Please enter a message before submitting`
      );
      return;
    }

    setName('');
    setEmail('');
    alert(`Thank you ${userName}. Your message was successfully sent`);
  };

  return (
    <div name='contact' className='bg-neutral-900 text-neutral-100 w-full h-screen flex justify-center items-center p-4'>
        <form action='' className='flex flex-col max-w-[600px] w-full mx-auto justify-center text-neutral-900'>
          <div className='pb-8 items-center'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-neutral-100'>Contact</p>
            <p className='text-neutral-100 py-4'>Submit the form below or click the envelope to send me an email</p>
          </div>
          <input
            className='bg-neutral-100 p-2'
            type='text'
            name='name'
            placeholder='Name'
            onChange={handleInputChange}
          />
          <input
            className='my-4 p-2 bg-neutral-100'
            type='email'
            name='email'
            placeholder='Email'
            onChange={handleInputChange}
          />
          <textarea
            className='bg-neutral-100 p-2'
            name='message'
            rows='10'
            placeholder='Message'
            onChange={handleInputChange}>
          </textarea>
          {errorMessage && (
            <div>
              <p className="error-text font-bold text-red-600 text-center">{errorMessage}</p>
            </div>
          )}
          <button className='text-neutral-100 font-bold group border-2 px-6 py-3 my-2 mx-auto flex items-center hover:bg-sky-400 hover:border-sky-400' onClick={handleFormSubmit}>SUBMIT</button>
        </form>
    </div>
  )
}

export default Contact
