import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const WEB3_Metaverse = () => {
  return (
    <>
     <Heading id="web-30-blockchain-and-metaverse-specialization" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
       Web 3.0 (Blockchain) and Metaverse Specialization
     </Heading>

     <Text as='p' mt='1em' mb='1em' color='#606C71'>
       This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0
       and Metaverse experiences for the next generation of the internet by specializing in
       building worlds that merge the best of cutting-edge decentralized distributed
       blockchains with 3D metaverse client experiences.
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
          Quarter IV W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps 
        </Link>
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
         Quarter V MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences 
        </Link>
     </Text>
    </>
  )
}

export default WEB3_Metaverse