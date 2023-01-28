import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Network_Programmability_and_Automation = () => {
  return (
    <>
     <Heading id="network_programmability_and_automation_specialization" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
       Network Programmability and Automation Specialization
     </Heading>

     <Text as='p' mt='1em' mb='1em' color='#606C71'>
       More than ever, network engineers are finding it challenging to complete their duties
       entirely manually. Network automation is now crucial due to new protocols, technologies,
       delivery models, and the requirement for enterprises to become more adaptable and agile.        
       This course teaches network engineers how to automate systems with code using a
       variety of technologies and tools, including Linux, Python, APIs, and Git.
     </Text>     

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
            Quarter IV NPA-351: CCNA 200-301 Certification
        </Link>
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
            Quarter V NPA-361: Network Programmability and Automation
        </Link>
     </Text>
    </>
  )
}

export default Network_Programmability_and_Automation