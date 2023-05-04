import React from "react";
import { Page, Text,  Document, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   body: {
      paddingTop: 35,
      paddingBottom: 65,
      paddingHorizontal: 35,
   },
   title: {
      fontSize: 24,
      textAlign: "center",
   },
   text: {
      margin: 12,
      fontSize: 14,
      textAlign: "justify",
      fontFamily: "Times-Roman",
   },
   header: {
      fontSize: 12,
      marginBottom: 20,
      textAlign: "center",
      color: "grey",
   },
   pageNumber: {
      position: "absolute",
      fontSize: 12,
      bottom: 30,
      left: 0,
      right: 0,
      textAlign: "center",
      color: "grey",
   },
});

const PDFFile = () => {
   return (

      // PDF file text
      
      <Document>
         <Page style={styles.body}>
            <Text style={styles.header} fixed>
               Question & Answer
            </Text>
            <Text style={styles.text.header} fixed>
               i. Tell us the differences between uncontrolled and controlled components.
            </Text>
            <Text style={styles.text} className="text-white">
               Ans: Uncontrolled components in React are components that manage their own state internally instead of having their state managed by React. Their value is controlled by the DOM and changes are not handled by a change handler function. Controlled components in React are components whose value is controlled by React instead of the component itself. The value is set by the state of the parent component and changes are handled by a change handler function, making it easier to manage and update user input within the application state
            </Text>
            <Text style={styles.text.header} fixed>
               ii. How to validate React props using PropTypes
            </Text>
            <Text style={styles.text} className="text-white">
               Ans: First of all, install the prop-types package using npm or yarn. Import the PropTypes object from the prop-types package at the top of our component file. Define the expected type and shape of our props using the available validation functions provided by PropTypes. We can specify that a prop is required by chaining the isRequired function to the validation function. PropTypes provides a variety of validation functions for different types and we can also use it to validate the shape of objects and arrays, and define custom validation functions. React will automatically validate the props passed to our component at runtime and provide helpful error messages if the validation fails.
            </Text>
            <Text style={styles.text.header} fixed>
               iii. Tell us the difference between nodejs and express js.
            </Text>
            <Text style={styles.text} className="text-white">
               Ans: Node.js is a JavaScript runtime built on top of the Chrome V8 engine. It allows developers to write server-side applications in JavaScript, which was previously only possible on the client-side. Node.js provides an event-driven, non-blocking I/O model that makes it lightweight and efficient, and it has a large ecosystem of modules and packages. Express.js is a popular open-source web application framework for Node.js. It provides a set of features and tools to build web applications and APIs quickly and easily. Express.js simplifies the process of handling HTTP requests and responses, and provides features like routing, middleware, templating, and more. It also has a large community of developers and a vast library of third-party modules, making it one of the most widely used Node.js frameworks.
            </Text>
            <Text style={styles.text.header} fixed>
               iv. What is a custom hook, and why will you create a custom hook?
            </Text>
            <Text style={styles.text} className="text-white">
               Ans: A custom hook is a function in React that uses one or more built-in hooks to provide a reusable piece of logic that can be shared across multiple components. Custom hooks are used to simplify complex logic, improve code organization and reusability, and can accept parameters and return values like regular functions. We can create a custom hook in React to encapsulate complex or repetitive logic that is used across multiple components, making it easier to reuse and maintain. Custom hooks can also help improve the organization and structure of our code, allowing we to separate concerns and reduce duplication. Additionally, custom hooks can help promote consistency and best practices within our codebase by encapsulating common functionality into a single, reusable function.
            </Text>
            <Text
               style={styles.pageNumber}
               render={({ pageNumber, totalPages }) =>
                  `${pageNumber} / ${totalPages}`
               }
            />
         </Page>
      </Document>
   );
};

export default PDFFile;
