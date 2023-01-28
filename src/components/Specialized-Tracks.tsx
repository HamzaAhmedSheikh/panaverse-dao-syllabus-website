import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";
import Ambient_Computing_IOT from "./specializations/AC&IOT";
import AI_Deep_Learning from "./specializations/AI&Deep_Learning";
import CNCC from "./specializations/CNCC";
import Genomics_and_Bioinformatics from "./specializations/Genomics_and_Bioinformatics";
import Network_Programmability_and_Automation from "./specializations/Network_Programmability_and_Automation";
import WEB3_Metaverse from "./specializations/WEB3&Metaverse";

const SpecializedTracks = () => {
  return (
    <>
     <Heading id="core-courses-common-in-all-specializations" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
       Core Courses (Common in All Specializations)
     </Heading>

     <Text as='p' mt='1em' mb='1em' color='#606C71'>
      Every participant of the program will start by completing the following two core courses:
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="https://github.com/panaverse/panaverse.github.io#quarter-i-core" target='_blank'>
           Quarter I (Core) CS-101: Object-Oriented Programming using TypeScript 
        </Link>
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="https://github.com/panaverse/panaverse.github.io#quarter-ii-core" target='_blank'> 
          Quarter II (Core) W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform
        </Link>
     </Text>

     <Heading id="specialized-tracks" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
        Specialized Tracks
     </Heading>

     <Text as='p' mt='1em' mb='1em' color='#606C71'>
        After completing the first two quarters the participants will select one or more specializations consisting of two courses each:
     </Text>

     <WEB3_Metaverse />
     <AI_Deep_Learning />
     <CNCC />
     <Ambient_Computing_IOT />
     <Genomics_and_Bioinformatics />
     <Network_Programmability_and_Automation />
    </>
  )
}

export default SpecializedTracks