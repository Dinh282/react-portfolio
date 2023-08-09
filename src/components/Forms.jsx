import { useState } from 'react';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    // e.preventDefault();
    // window.location.reload();

    if (!validateEmail(email) || !name || !message) {
      setErrorMessage('Please fill out all fields correctly.');
      return;
    }

    // TODO: Add the logic to handle the form submission (e.g., sending the data to a server or an API) 
    // This TODO is not required since Netlify handles form submission we add appropriate attributes to the form tag.

    // If everything goes according to plan, Reset the form fields
    // setName('');
    // setEmail('');
    // setMessage('');
    // setErrorMessage('');
  };

  return (
    <div className="container mx-auto max-w-lg p-4 mt-10 mb-10 border rounded-lg bg-white border-black">
      <h1 className="text-3xl font-bold mb-4 text-black">Contact Me</h1>
      <form onSubmit={handleFormSubmit}
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            value={name}
            name="name"
            onChange={handleInputChange}
            type="text"
            placeholder="Your name"
            className="mt-1 p-2 border border-black bg-gray-200 text-black placeholder-gray-400 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            placeholder="Your email"
            className="mt-1 p-2 border border-black bg-gray-200 text-black placeholder-gray-400 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment:
          </label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            rows="6"
            placeholder="Leave your comment here"
            className="mt-1 p-2 border border-black bg-gray-200 text-black placeholder-gray-400 rounded-md w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
      {errorMessage && <p className="text-red-500 mt-2">{errorMessage}</p>}
    </div>

  );
}

export default Form;