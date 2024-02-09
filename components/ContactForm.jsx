'use client';

import { useState, useEffect } from 'react';
import { toast } from 'react-hot-toast';

export default function ContactForm() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [firstName, lastName, email, message]);

  const validateForm = () => {
    const errors = {};
    if (!firstName) errors['firstName'] = 'Please enter your first name';
    if (!lastName) errors['lastName'] = 'Please enter your last name';
    if (!email) {
      errors['email'] = 'Please enter your email';
    } else if (!/\S+@\S+/.test(email)) {
      errors['email'] = 'Please enter a valid email';
    }
    if (!message) errors['message'] = 'Please enter your message';
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  async function sendEmail(e) {
    if (isFormValid) {
      e.preventDefault();
      const data = {
        firstName, lastName, email, message
      }
      console.log('Making fetch request to /api/send');
      const res = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      if (res.status === 200) {
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        toast.success(`Hi ${firstName}, your message was sent successfully!`)
        console.log(`Hi ${firstName}, your message was sent successfully!`);
      }
    } else {
      toast.error(`Please fill out all fields on the contact form to send a message.`);
      console.log('Please fill out all fields on the contact form to send a message.');
    }
  }

  return (
    <div id='emailMe' className='relative flex flex-col h-screen items-center justify-center '>
      <h1 className='text-4xl font-bold text-center mb-12'>Email Me</h1>
      <form id='emailForm' onSubmit={sendEmail} className='w-full p-6 sm:w-2/3'>

        <label className='block'>
          <span>First Name</span>
          {errors['firstName'] && <p className='text-red-500 text-xs inline'> {errors['firstName']}</p>}
          <input
            id='firstName'
            autoComplete='true'
            required
            type='text'
            onChange={(e) => setFirstName(e.target.value)}
            className='border w-full mb-4'
            value={firstName}
          />
        </label>

        <label className='block'>
          <span>Last Name</span>
          {errors['lastName'] && <p className='text-red-500 text-xs inline'> {errors['lastName']}</p>}
          <input
            id='lastName'
            autoComplete='true'
            required
            type='text'
            onChange={(e) => setLastName(e.target.value)}
            className='border w-full mb-4'
            value={lastName}
          />
        </label>

        <label className='block'>
          <span>Email</span>
          {errors['email'] && <p className='text-red-500 text-xs inline'> {errors['email']}</p>}
          <input
            id='email'
            autoComplete='true'
            required
            type='text'
            onChange={(e) => setEmail(e.target.value)}
            className='border w-full mb-4'
            value={email}
          />
        </label>

        <label className='block'>
          <span>Message</span>
          {errors['message'] && <p className='text-red-500 text-xs inline'> {errors['message']}</p>}
          <textarea
            id='message'
            autoComplete='true'
            required
            type='text'
            rows='8'
            onChange={(e) => setMessage(e.target.value)}
            className='border w-full mb-4'
            value={message}
          />
        </label>

      </form>

      <button onClick={sendEmail} className='px-6 py-1 border transition duration-300 ease-in-out hover:scale-110'>
        Send
      </button>

    </div>
  )
}

