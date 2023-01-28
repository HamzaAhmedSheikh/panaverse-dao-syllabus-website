import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Genomics_and_Bioinformatics = () => {
  return (
    <>
     <Heading id="genomics-and-bioinformatics-specialization" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
      Genomics and Bioinformatics Specialization
     </Heading>

     <Text as='p' mt='1em' mb='1em' color='#606C71'>
        Genomics is the study of the total genetic makeup of individual organisms, and how this
        genetic information is structured, functions, and has evolved; 
        bioinformatics encompasses a diverse range of analytical methods and tools applied
        to genomic data. This Specialization focus on performing complex 
        bioinformatics analysis using the most essential Python libraries and applications
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
           Quarter IV Bio-351: Python for Biologists
        </Link>
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
           Quarter V Bio-361: Bioinformatics with Python
        </Link>
     </Text>
    </>
  )
}

export default Genomics_and_Bioinformatics