import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const CNCC = () => {
  return (
    <>
     <Heading id="cloud-native-computing-specialization" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
       Cloud-Native Computing Specialization
     </Heading>

     <Text as='p' mt='1em' mb='1em' color='#606C71'>
      The Cloud-Native Computing Specialization focuses on Containers, Kubernetes,
      and CDK for Kubernetes.
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
         Quarter III CN-351: Certified Kubernetes Application Developer (CKAD)
        </Link>
     </Text>

     <Text as='p' mt='1em' color="#1e6bb8" bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href="#">
         Quarter IV CN-361: Developing Multi-Cloud APIs using CDK for Terraform
        </Link>
     </Text>
    </>
  )
}

export default CNCC