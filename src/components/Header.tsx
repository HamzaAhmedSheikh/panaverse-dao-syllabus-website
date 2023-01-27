import { Box, Heading } from "@chakra-ui/react"
import styles from '../styles/Header.module.css';

const Header = () => {
  return (      
    // <Box as="header" className={styles.pageHeader} display='block' color='#fff' textAlign='center' backgroundColor='#159957' bgGradient='linear-gradient(120deg, #155799, #159957)' role='banner'>     
    //  <Heading as='h1' margin='0.67em 0' mt='0' mb='0.1rem' fontWeight='bold' fontSize='2.9rem'>
    //   Certified Web 3.0 and Metaverse Developer: A <br /> Nationwide Program in Karachi, Lahore, Islamabad, <br /> and Peshawar
    //  </Heading>
    //  <Heading as='h2' className={styles.projectTagline} mb='2rem' fontWeight='normal' opacity='0.7' fontSize='xl'>
    //    Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
    //  </Heading>
    // </Box>

    <Box as="header" className={styles.pageHeader} display='block' color='#fff' textAlign='center' backgroundColor='#159957' bgGradient='linear-gradient(120deg, #155799, #159957)' role='banner'>     
     <Heading as='h1' margin='0.67em 0' mt='0' mb='0.1rem' fontWeight='bold' fontSize='2.9rem' textAlign='center' lineHeight='inherit' wordBreak='break-word'>
      Certified Web 3.0 and Metaverse Developer: A <br /> Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
     </Heading>
     <Heading as='h2' className={styles.projectTagline} mt='2rem' mb='2rem' fontWeight='normal' opacity='0.7' fontSize='xs' textAlign='center' wordBreak='break-word'>
       Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
     </Heading>
    </Box>

  )
}

export default Header