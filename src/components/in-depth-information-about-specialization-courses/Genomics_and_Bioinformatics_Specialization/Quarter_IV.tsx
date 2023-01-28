import { Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

const Quarter_IV_GBS = () => {
  return (
    <>
      <Heading id="quarter-iv-genomics-and-bioinformatics-specialization" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'> 
       Quarter IV Genomics and Bioinformatics Specialization
      </Heading> 
      <Heading id="bio-351-python-for-biologists" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
       Bio-351: Python for Biologists
      </Heading>
      
      <Text as='p' mt='0.8em' color='#606C71'> Duration: 13 Weeks </Text>
      <Text as='p' mt='0.8em' color='#606C71'> Course Description: </Text>
      <Text as='p' mt='0.6em' color='#606C71'> This course will focus on learning the basics of the Python programming language through genomics examples </Text>    

      <Text as='p' mt='0.8em' fontWeight='semibold 'color='#606C71'>
       Textbook:
       <Text as='p' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
         <Link href='https://www.pythonforbiologists.org/' target='_blank'>  https://www.pythonforbiologists.org/ </Link> 
       </Text>  
      </Text>  
    </>
  )
}

export default Quarter_IV_GBS