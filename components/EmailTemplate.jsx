export default function EmailTemplate({firstName, lastName, email, message}) {
  return (
    <div>
      <h1>Hi, Eugene!</h1>
      <p>You have a message from {firstName} {lastName}.</p>
      <p>They said:</p>
      <p>{message}</p>
      <p>Please email them back at {email}</p>
    </div>
  );
};