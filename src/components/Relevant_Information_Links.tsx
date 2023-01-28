import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Relevant_Information_Links = () => {
  return (
    <>
      <Heading
        id="relevant-information-links"
        as="h2"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >        
        Relevant Information Links
      </Heading>
      <Text
        as="p"
        mt="0.6rem"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link href="https://www.piaic.org/" target="_blank">          
          Admission Website
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.6rem"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link href="https://www.panaverse.co/" target="_blank">          
          Syllabus and Community Website
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.6rem"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link href="https://www.facebook.com/groups/panaverse" target="_blank">          
          Facebook Group
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.6rem"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link href="https://www.youtube.com/@panaverse/streams" target="_blank">          
          YouTube Live Channel
        </Link>
      </Text>

      <Text
        as="p"
        mt="0.6rem"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link href="https://twitter.com/Panaverse_edu" target="_blank">          
          Twitter
        </Link>
      </Text>
      
      <Text
        as="p"
        mt="0.6rem"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link href="https://github.com/panaverse" target="_blank">          
          Github Repos
        </Link>
      </Text>
    </>
  );
}; 

export default Relevant_Information_Links;
