import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Ambient_Computing_IOT = () => {
  return (
    <>
     <Heading id="ambient-computing-and-iot-specialization" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
      Ambient Computing and IoT Specialization
     </Heading>

     <Text as='p' mt='1em' mb='1em' color='#606C71'>
        The Ambient Computing and IoT Specialization focuses on building Smart Homes,
        Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
         Quarter III AC-351: Ambient Computing with Voice Assistants and Matter Devices
        </Link>
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
         Quarter IV AC-361: Embedded Programming using C and Rust
        </Link>
     </Text>
    </>
  )
}

export default Ambient_Computing_IOT