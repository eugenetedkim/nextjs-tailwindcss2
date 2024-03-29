import { NextApiRequest, NextApiResponse } from 'next';
import EmailTemplate from '../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (NextApiRequest, NextApiResponse) => {
  const requestBody = NextApiRequest.body;
  console.log(requestBody);
  console.log(NextApiRequest.method);
  if (NextApiRequest.method == 'POST') {

    const firstName = requestBody.firstName;
    const lastName = requestBody.lastName;
    const email = requestBody.email;
    const message = requestBody.message;
    console.log('sending email');
    const { data, error } = await resend.emails.send({
      from: 'eugene@eugenetedkim.com',
      to: ['eugenetedkim@gmail.com'],
      subject: 'Message from your portfolio site',
      // html: '<div>Hi</div>'
      react: EmailTemplate({firstName, lastName, email, message}),
    });
  
    if (error) {
      return NextApiResponse.status(400).json(error);
    }
  
    NextApiResponse.status(200).json(data);
  }
};