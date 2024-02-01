'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast} from 'react-hot-toast';

export default function ContactForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  async function sendEmail(e) {
    console.log('Making fetch request to /api/send');
    e.preventDefault();
    const data = {
      firstName, lastName, email, message
    }
    
    const res = await fetch("/api", {
      method: "POST",
      mode: "*cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    if (res.status === 200) {
      setFirstName('');
      setLastName('');
      setEmail('');
      setMessage('');
      toast.success(`Hi ${firstName}, your message was sent successfully!`)
    }
  }

  return (
    <div id='emailMe' className='relative flex flex-col h-screen items-center justify-center'>
      <h1 className='text-4xl font-bold text-center mb-12'>Email Me</h1>
      <form id='emailForm' onSubmit={sendEmail} className='w-1/2'>

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
          />
        </label>

        <label className='block'>
          <span>Email</span>
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

        <button onClick={sendEmail} className='px-6 py-1 border mt-4'>
          Send
        </button>
      </form>
    </div>
  )
}

