import { Heading, Text, List, ListItem } from "@chakra-ui/react"
import Link from "next/link"

import styles from '../../../styles/Home.module.css';

const Section_1 = () => {
  return (    
    <>
     {/******** Fundamentals of JavaScript (ECMAScript 2022 Language Specification)  *****/}    
     <Heading
        id="fundamentals-of-javascript-ecmascript-2022-language-specification"
        as="h3"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Fundamentals of JavaScript (ECMAScript 2022 Language Specification)
      </Heading>
      <Text
        as="p"
        mt="0.6em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
          target="_blank"
        >
          Learn JavaScript by Zeeshan Hanif (Watch Recorded Videos)
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.6em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
          target="_blank"
        >
          Chapters 2-6, 13 of JavaScript from Beginner to Professional: Learn
          JavaScript quickly by building fun, interactive, and dynamic web apps,
          games, and pages
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.6em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
          target="_blank"
        >
          JavaScript Book Code
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.6em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md"
          target="_blank"
        >
          Getting Started Exercises with JavaScript and Node.js
        </Link>
      </Text>

      {/********** Fundamentals of JavaScript and Node.js Quiz *********/}

      <Text as="p" mt="1em" mb="1em" color='#606C71'>        
        Fundamentals of JavaScript and Node.js Quiz
      </Text>
      <Text as="p" mt="1em" mb="1em" color='#606C71'>        
        Topics Covered in the Quiz:
      </Text>
      <Text as="p" mt="1em" mb="1em" color='#606C71'>
        Background of JavaScript and How to use JavaScript in Browser Variables,
        Primitive data types Analyzing and modifying data types, and Operators
        (Chapter 2 of JavaScript from Beginner to Professional)
      </Text>
 
      <List display='list-item' styleType='decimal'>
        <ListItem color='#606C71'>
          Intro to Node.js, .mjs files, Modules, NPM, import, export, and using
          external modules with npm:
          <Text
            as="p"
            color="#1e6bb8"
            bgColor="transparent"
            fontWeight="normal"
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
          >
            <Link
              href="https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
              target="_blank"
            >              
              https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing{" "}
            </Link>
          </Text>          
           How to accept user input in your Node.js JavaScript programs, this
           will allow us to create interactive Node.js console programs using
           prompt-sync library. The last example in this presentation shows you
           how to use prompt-sync library in your Node.js programs:
          <Text
            as="p"
            color="#1e6bb8"
            bgColor="transparent"
            fontWeight="normal"
            _hover={{ cursor: "pointer", textDecoration: "underline" }}
          >
            <Link
              href=" https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
              target="_blank"
            >              
              https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing{" "}
            </Link>
          </Text>          
          <b style={{ color: "black" }}> Note: </b> After this point, we will do
          all our class work and exercises using Node.js in .mjs files. We will
          also be able to develop interactive Node.js console programs which
          will greatly help the students to learn.
        </ListItem>  

        <ListItem color='#606C71' mt='0.5rem'>          
          Using Arrays and Objects in Node.js Programs (chapter 3 of JavaScript
          from Beginner to Professional)
        </ListItem>
        
        <ListItem color='#606C71' mt='0.5rem'>          
          Using if and if else statements, else if statements, Conditional
          ternary operators, and switch statements in Node.js programs (chapter
          4 of JavaScript from Beginner to Professional)
        </ListItem>

        
        <ListItem color='#606C71' mt='0.5rem'>         
          Using while loop, do while loop, for loop, for in, and for of loop in
          Node.js (chapter 5 of JavaScript from Beginner to Professional)
        </ListItem>
        
        <ListItem color='#606C71' mt='0.5rem'>          
          Using Basic functions, Function arguments, Return, Variable scope in
          functions, Recursive functions, Nested functions, Anonymous functions,
          and Function callbacks in Node.js (chapter 6 of JavaScript from
          Beginner to Professional)
        </ListItem>
       
        <ListItem color='#606C71' mt='0.5rem'>          
          Using Concurrency, Callbacks, Promises, async / await, and Event loop
          (chapter 13 of JavaScript from Beginner to Professional)
        </ListItem>
        
        <ListItem color='#606C71' mt='0.5rem'>          
          Using Concurrency, Callbacks, Promises, async / await, and Event loop
          (chapter 13 of JavaScript from Beginner to Professional)
        </ListItem>
       
      </List>

      <Text
        as="p"
        mt="0.3em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
          target="_blank"
        >          
          https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript{" "}
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.7em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        New JavaScript Features in ECMAScript 2022 and 2021
        <Link
          href="https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
          target="_blank"
        >          
          https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg{" "}
        </Link>
      </Text>
    </>
  )
}

export default Section_1