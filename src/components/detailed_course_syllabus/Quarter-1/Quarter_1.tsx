import { Text, Heading, List, ListItem } from "@chakra-ui/react";
import Link from "next/link";
import OOP_with_Typescript from "./OOP_with_Typescript";
import Section_1 from "./Section_1";
import VC_with_Git from "./VC_with_Git";

const Quarter_1 = () => {
  return (
    <>
      <Heading
        id="detailed-course-syllabus"
        as="h1"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Detailed Course Syllabus
      </Heading>

      <Heading
        id="quarter-i-core"
        as="h2"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Quarter I (Core)
      </Heading>

      <Heading
        id="cs-101-object-oriented-programming-using-typescript"
        as="h2"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        CS-101: Object-Oriented Programming using TypeScript
      </Heading>

      <Text as="p" mt="1em" mb="1em" color="#606C71">
        Duration: 13 Weeks
      </Text>

      <Text as="p" mt="1em" mb="1em" color="#606C71">
        Course Description:
      </Text>

      <Text as="p" mt="1em" mb="1em" color="#606C71">
        We will start the program by learning the fundamentals of
        Object-Oriented programming using JavaScript and TypeScript. We will
        also understand the latest Web trends i.e. Web 3.0 and Metaverse
        concepts and try to understand their working from the perspective of the
        users.
      </Text>

      <Text as="p" mt="1em" mb="1em" color="#606C71">
        Course Outline:
      </Text>

      {/********* Course Outline ******/}

      <Heading
        as="h3"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        HTML and CSS (Homework)
      </Heading>

      <Text
        as="p"
        mt="0.7rem"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
          target="_blank"
        >
          Learn HTML by Hira Khan (Watch Recorded Videos)
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.7rem"
        mb="0.8rem"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
          target="_blank"
        >
          Learn CSS Intro by Hira Khan (Watch Recorded Videos)
        </Link>
      </Text>

      <Heading
        as="h3"
        fontSize="1.5em"
        mt="0.7rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        Web 3.0 and Metaverse Theory
      </Heading>

      <Text
        as="p"
        mb="0.7em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
          target="_blank"
        >
          Introduction to Panaverse DAO
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
        <Link
          href="https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
          target="_blank"
        >
          Web 3.0 User Guide
        </Link>
      </Text>

      <Text as="p" mt="0.7em" color="#606C71">
        Complete Web 3 Assignments included in the Web 3 User Guide
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
          href="https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
          target="_blank"
        >
          Virtual and Augmented Metaverse User Guide
        </Link>
      </Text>

      {/******** Fundamentals of JavaScript (ECMAScript 2022 Language Specification) and Node.js Quiz  *****/}

      <Section_1 />

      {/* Object-Oriented Programming with TypeScript **/}  

      <OOP_with_Typescript />

      
     { /************  TypeScript for React **********/ }

     <Heading as='h3' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'> TypeScript for React </Heading>
     <Text as='p' mt='0.8em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
      <Link href="https://profy.dev/article/react-typescript" target='_blank'> Minimal TypeScript Crash Course For React With Interactive Code Exercises </Link>
     </Text>

     { /*********** TypeScript for Quizzes ********* */ }
     
     <Heading as='h3' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'> TypeScript Quizzes </Heading>
     <Text as='p' mt='0.7em' color='#606C71'> Fundamentals of TypeScript Quiz </Text> 
     <Text as='p' mt='0.7em' color='#606C71'> TypeScript Professional Proficiency Quiz </Text>

     {/************  Fundamentals of Version Control with Git (Recorded Videos) **********/}

     <VC_with_Git />
    </>
  );
};

export default Quarter_1;
