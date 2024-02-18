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
    if (!firstName) errors['firstName'] = ' Please enter your first name';
    if (!lastName) errors['lastName'] = ' Please enter your last name';
    if (!email) {
      errors['email1'] = ' Please enter your email';
    } else if (!/\S+@\S+/.test(email)) {
      errors['email2'] = 'Please enter a valid email';
    }
    if (!message) errors['message'] = ' Please enter your message';
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
    <div id='emailMe' className='relative flex flex-col h-screen gap-12 px-4'>

      {/* Heading */}
      <div className='flex justify-center items-center mt-24 lg:mb-0'>
        <h1 className='text-center text-4xl font-bold'>Email Me</h1>
      </div>

      <div className='flex flex-col justify-center items-center'>
        <p className='text-lg w-full sm:w-2/3 mb-6'>Please use this form or email me at <a className='font-medium text-blue-600 hover:text-blue-600 visited:text-blue-800' href='mailto:eugenetedkim@gmail.com'>eugenetedkim@gmail.com</a> to contact me.</p>
        <form id='emailForm' onSubmit={sendEmail} className='w-full sm:w-2/3'>

          <label className='block'>
            <span>First Name</span>
            <input
              id='firstName'
              autoComplete='true'
              required
              type='text'
              onChange={(e) => setFirstName(e.target.value)}
              className='border w-full mb-4'
              value={firstName}
              placeholder={errors['firstName'] ? errors['firstName'] : ''}
            />
          </label>

          <label className='block'>
            <span>Last Name</span>
            <input
              id='lastName'
              autoComplete='true'
              required
              type='text'
              onChange={(e) => setLastName(e.target.value)}
              className='border w-full mb-4'
              value={lastName}
              placeholder={errors['lastName'] ? errors['lastName'] : ''}
            />
          </label>

          <label className='block'>
            <span>Email</span>
            {errors['email2'] && <p className='text-red-500 text-xs inline'> {errors['email2']}</p>}
            <input
              id='email'
              autoComplete='true'
              required
              type='text'
              onChange={(e) => setEmail(e.target.value)}
              className='border w-full mb-4'
              value={email}
              placeholder={errors['email1'] ? errors['email1'] : ''}
            />
          </label>

          <label className='block'>
            <span>Message</span>
            <textarea
              id='message'
              autoComplete='true'
              required
              type='text'
              rows='8'
              onChange={(e) => setMessage(e.target.value)}
              className='border w-full mb-4'
              value={message}
              placeholder={errors['message'] ? errors['message'] : ''}
            />
          </label>

        </form>

        <button onClick={sendEmail} className='px-4 border rounded-sm transition duration-300 ease-in-out hover:scale-110 mb-12'>
          Send
        </button>
      </div>
    </div>
  )
}

