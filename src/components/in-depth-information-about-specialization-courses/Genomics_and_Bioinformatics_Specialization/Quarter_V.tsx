import { Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

const Quarter_V_GBS = () => {
  return (
    <>
     <Heading id="quarter-v-bio-361-bioinformatics-with-python" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
       Quarter V Bio-361: Bioinformatics with Python
     </Heading>

     <Text as='p' mt='0.8em' color='#606C71'> Duration: 13 Weeks </Text>
     <Text as='p' mt='0.8em' color='#606C71'> Course Description: </Text>
     <Text as='p' mt='0.8em' color='#606C71'> In this course we will discover modern, next-generation sequencing libraries from the powerful Python ecosystem to perform cutting-edge research and analyze large amounts of biological data. </Text>

     <Text as='p' mt='0.8em' fontWeight='semibold 'color='#606C71'>
       Textbook: 
       <Text as='p' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
         <Link href='https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_' target='_blank'>  https://www.amazon.com/Bioinformatics-Python-Cookbook-applications-computational/dp/1803236426/ref=sr_1_ </Link> 
       </Text>  
     </Text>  
    </>
  )
}

export default Quarter_V_GBS