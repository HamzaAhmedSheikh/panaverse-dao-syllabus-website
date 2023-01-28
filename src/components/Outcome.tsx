import { Text, Heading } from "@chakra-ui/react";
import Link from "next/link";

const Outcome = () => {
  return (
    <>
      <Heading
        id="the-outcome-for-participants-of-the-program"
        as="h2"
        fontSize="1.5em"
        mt="1rem"
        mb="1rem"
        fontWeight="normal"
        color="#159957"
      >
        The Outcome for Participants of the Program
      </Heading>

      <Text as="p" mt="1em" mb="1em" color="#606C71">
        The graduates of this program will own products (Full-Stack App
        Templates, AR and VR Experiences, and APIs) that are marketed globally
        by the Panaverse DAO and, if they like, will also be able to start off
        by offering services at a rate of $50 per hour ($96,000 per year). This
        would give Pakistani professionals and students a fantastic opportunity
        to better their financial situation while also giving the economy a
        much-needed boost by expanding software exports.
      </Text>

      <Text
        as="p"
        mt="1em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://content.techgig.com/hiring/top-5-metaverse-jobs-that-will-rule-the-future-of-tech-industry/articleshow/87581325.cms"
          target="_blank"
        >
          Top 5 ‘Metaverse’ jobs that will rule the future of tech industry
        </Link>
      </Text>

      <Text
        as="p"
        mt="1em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://web3.career/web3-salaries/blockchain-developer"
          target="_blank"
        >
          Blockchain Developer Salary - Jun 2022
        </Link>
      </Text>

      <Text
        as="p"
        mt="1em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://thedefiant.io/web3-soaring-salaries/"
          target="_blank"
        >
          Web3 Salaries Soar to $750,000 for Rank-and-File Devs
        </Link>
      </Text>

      <Text
        as="p"
        mt="1em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://newzoo.com/insights/trend-reports/newzoo-report-on-metaverse-blockchain-gaming-nft-2022"
          target="_blank"
        >
          The Metaverse, Blockchain Gaming, and NFTs: Navigating the Internet’s
          Uncharted Waters
        </Link>
      </Text>
      <Text
        as="p"
        mt="1em"
        color="#1e6bb8"
        bgColor="transparent"
        fontWeight="normal"
        _hover={{ cursor: "pointer", textDecoration: "underline" }}
      >
        <Link
          href="https://www.blockchain-council.org/metaverse/how-to-become-metaverse-developer/"
          target="_blank"
        >
          How To Become Metaverse Developer: Scope, Skills, and Salary
        </Link>
      </Text>
    </>
  );
};

export default Outcome;
