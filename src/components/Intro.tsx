import { Box, Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import styles from '../styles/Home.module.css';
import Curriculum from "./Curriculum";


const Intro = () => {
  return (
    <>
     <Box
        display="block"       
        padding={{ sm: "2em 1em", md: "2em 4em", lg: "2em 6em" }}
        margin="0 auto"
        fontSize={{ sm: '1em', md: "1.1em", lg: "1.1em" }}       
        className={styles.mainContent}        
        // lineHeight='1.75'                               
      >
       <Heading as='h1' fontSize='2em' mt='0' mb='1rem' fontWeight='normal' color='#159957'> 
         Certified Web 3.0 and Metaverse Developer: A <br /> Nationwide Program in Karachi, Lahore, <br /> Islamabad, and Peshawar
       </Heading> 

       <Text as='p' mt='0.5em'>  
         <Image 
          src="/images/dao-logo.png"
          alt="Panaverse Dao Logo"
          width={838}
          height={478}    
         />       
        </Text>

        <Heading as='h2' fontSize='1.5em' mt='2rem' mb='1rem' fontWeight='normal' color='#159957'>
         The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
        </Heading>

        <Heading as='h2' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
         <Link href="https://www.piaic.org/" target='_blank'>
          Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar         
         </Link>
        </Heading>

        <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
          <Link href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing" target='_blank'> This document on Google Docs </Link>
        </Text>

        <Text as='p' mt='1em' mb='1em' color='#606C71'>
         The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.
        </Text>

        <Text as='p' mt='1em' mb='1em' color='#606C71'>
          Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 
         <Text as='span' color="#1e6bb8" bgColor='transparent' m='0.1em' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}> <Link href="https://www.citivelocity.com/citigps/metaverse-and-money/" color="#1e6bb8" target="_blank"> research paper </Link>  </Text>
         that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.
        </Text>

        <Curriculum />
     </Box> 
    </>    
  )
}

export default Intro