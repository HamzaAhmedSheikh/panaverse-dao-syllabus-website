import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const AI_Deep_Learning = () => {
  return (
    <>
     <Heading id="artificial-intelligence-ai-and-deep-learning-specialization" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
       Artificial Intelligence (AI) and Deep Learning Specialization
     </Heading>

     <Text as='p' mt='1em' mb='1em' color='#606C71'>
        The AI and Deep Learning specialization focuses on building and deploying
        intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
         Quarter III AI-351: Developing Planet-Scale Intelligent APIs and Python Programming
        </Link>
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
          Quarter IV AI-361: Deep Learning and MLOps
        </Link>
     </Text>
    </>
  )
}

export default AI_Deep_Learning