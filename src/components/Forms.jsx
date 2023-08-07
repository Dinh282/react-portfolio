import { useState } from 'react';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Form() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setName(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'comment') {
      setComment(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name || !comment) {
      setErrorMessage('Please fill out all fields correctly.');
      return;
    }

    // TODO: Add the logic to handle the form submission (e.g., sending the data to a server or an API)

    // If everything goes according to plan, Reset the form fields
    setName('');
    setEmail('');
    setComment('');
    setErrorMessage('');
  };

  return (
    <div className="container mx-auto max-w-lg p-4 mt-10 mb-10  border rounded-lg bg-white">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <form onSubmit={handleFormSubmit}>
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
            className="mt-1 p-2 border rounded-md w-full"
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
            className="mt-1 p-2 border rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
            Comment:
          </label>
          <textarea
            value={comment}
            name="comment"
            onChange={handleInputChange}
            rows="6"
            placeholder="Leave your comment here"
            className="mt-1 p-2 border rounded-md w-full"
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