import React from 'react';
import PDFFile from './PDFFile';
import { PDFDownloadLink } from '@react-pdf/renderer';
import useTitle from '../../hooks/useTitle';

const Blog = () => {

  useTitle('Blog')

  return (
    <div className='text-white'>

      {/* PDF file download button */}

      <div className='lg:p-10 lg:pb-4'>
        <PDFDownloadLink document={<PDFFile></PDFFile>} filename="FORM">
          {({ loading }) => (loading ? <button className='btn w-40 text-lg btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none' >Loading Document...</button> : <button className='btn w-50 text-lg btn-primary bg-gradient-to-r from-red-800 to-red-600 border-none'>Download PDF</button>)}
        </PDFDownloadLink>
      </div>

      {/* Question & Answer section */}

      <div>
        <div className='bg-indigo-100/10 px-4 py-5 mt-2 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 rounded-lg'>
          <h1 className='text-center text-3xl font-bold '><u>Question & Answer</u></h1>
        </div>
        <div className='bg-indigo-100/10 px-4 py-5 mt-2 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-justify rounded-lg '>

          <h1 className='text-2xl font-bold text-zinc-100  '>i. Tell us the differences between uncontrolled and controlled components.</h1>
          <p className='text-lg font-medium'><u>Ans:</u> Uncontrolled components in React are components that manage their own state internally instead of having their state managed by React. Their value is controlled by the DOM and changes are not handled by a change handler function. Controlled components in React are components whose value is controlled by React instead of the component itself. The value is set by the state of the parent component and changes are handled by a change handler function, making it easier to manage and update user input within the application state

          </p>
        </div>
        <div className='bg-indigo-100/10 px-4 py-5 mt-2 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-justify rounded-lg'>

          <h1 className='text-2xl font-bold text-zinc-100  '>ii. How to validate React props using PropTypes</h1>
          <p className='text-lg font-medium'><u>Ans:</u> First of all, install the prop-types package using npm or yarn. Import the PropTypes object from the prop-types package at the top of our component file. Define the expected type and shape of our props using the available validation functions provided by PropTypes. We can specify that a prop is required by chaining the isRequired function to the validation function. PropTypes provides a variety of validation functions for different types and we can also use it to validate the shape of objects and arrays, and define custom validation functions. React will automatically validate the props passed to our component at runtime and provide helpful error messages if the validation fails.

          </p>
        </div>
        <div className='bg-indigo-100/10 px-4 py-5 mt-2 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-justify rounded-lg'>

          <h1 className='text-2xl font-bold text-zinc-100  '>iii. Tell us the difference between nodejs and express js.</h1>
          <p className='text-lg font-medium'><u>Ans:</u>  Node.js is a JavaScript runtime built on top of the Chrome V8 engine. It allows developers to write server-side applications in JavaScript, which was previously only possible on the client-side. Node.js provides an event-driven, non-blocking I/O model that makes it lightweight and efficient, and it has a large ecosystem of modules and packages. Express.js is a popular open-source web application framework for Node.js. It provides a set of features and tools to build web applications and APIs quickly and easily. Express.js simplifies the process of handling HTTP requests and responses, and provides features like routing, middleware, templating, and more. It also has a large community of developers and a vast library of third-party modules, making it one of the most widely used Node.js frameworks.

          </p>
        </div>
        <div className='bg-indigo-100/10 px-4 py-5 mt-2 shadow-lg mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 text-justify rounded-lg'>

          <h1 className='text-2xl font-bold text-zinc-100  '>iv. What is a custom hook, and why will you create a custom hook?
          </h1>
          <p className='text-lg font-medium'><u>Ans:</u> A custom hook is a function in React that uses one or more built-in hooks to provide a reusable piece of logic that can be shared across multiple components. Custom hooks are used to simplify complex logic, improve code organization and reusability, and can accept parameters and return values like regular functions. We can create a custom hook in React to encapsulate complex or repetitive logic that is used across multiple components, making it easier to reuse and maintain. Custom hooks can also help improve the organization and structure of our code, allowing we to separate concerns and reduce duplication. Additionally, custom hooks can help promote consistency and best practices within our codebase by encapsulating common functionality into a single, reusable function.

          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;