import { Text, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const CNCCS_Quarter_V = () => {
  return (
    <>
     <Heading id='quarter-v-cn-361-developing-multi-cloud-apps-using-cdk-for-terraform' as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
       Quarter V CN-361: Developing Multi-Cloud Apps using CDK for Terraform
     </Heading>  

      <Text as='p' mt='0.8em' color='#606C71'> Duration: 13 Weeks </Text>
      <Text as='p' mt='0.8em' color='#606C71'> Course Description: </Text>

      <Text as='p' mt='0.6em' color='#606C71'> 
       Terraform lets you use the same workflow to manage multiple providers and handle 
       cross-cloud dependencies.
       This simplifies management and orchestration for large-scale, multi-cloud infrastructures.
      </Text>

      <Text as='p' mt='0.6em' color='#606C71'> 
       Cloud Development Kit for Terraform (CDKTF) allows you to use familiar programming
       languages to define and provision infrastructure.
       This gives you access to the entire Terraform ecosystem without learning
       HashiCorp Configuration Language (HCL) and lets you leverage the power of your
       existing toolchain for testing, dependency management, etc.
      </Text>

      <Text as='p' mt='0.8em' color='#606C71'> Course Outline: </Text>

      <Text as='p' mt='0.8em' color='#606C71'> CDK for Terraform </Text>
      <Text as='p' color='#1e6bb8' bgColor='transparent' fontWeight='normal' _hover={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <Link href='https://developer.hashicorp.com/terraform/cdktf'  target='_blank'>  https://developer.hashicorp.com/terraform/cdktf  </Link>
      </Text> 
    </>
  )
}

export default CNCCS_Quarter_V