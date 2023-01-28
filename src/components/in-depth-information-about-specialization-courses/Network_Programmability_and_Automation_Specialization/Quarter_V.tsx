import { Heading, Text } from "@chakra-ui/react"
import Link from "next/link"

const Quarter_V_NPAS = () => {
  return (
    <>
     <Heading id="quarter-v-npa-361-network-programmability-and-automation" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
      Quarter V NPA-361: Network Programmability and Automation
     </Heading>

     <Text as='p' mt='0.8em' color='#606C71'> Duration: 13 Weeks </Text>
     <Text as='p' mt='0.8em' color='#606C71'> Course Description: </Text>
     <Text as='p' mt='0.6em' color='#606C71'> Traditional network management techniques can't be effectively automated and don't scale well. By implementing network programmability based on Application Programming Interfaces, this course will assist in overcoming issues of the future and help you develop the skills required for the Next-Generation Network Engineer. </Text>
     
     <Text as='p' mt='0.8em' fontWeight='semibold 'color='#606C71'> Textbook: </Text> 
     <Text as='p' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
         <Link href='https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3' target='_blank'> https://www.amazon.com/Network-Programmability-Automation-Networking-Technology/dp/1587145146/ref=sr_1_3 </Link> 
     </Text>
    </>
  )
}

export default Quarter_V_NPAS