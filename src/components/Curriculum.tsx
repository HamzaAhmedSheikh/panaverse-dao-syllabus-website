import { Text, Heading } from "@chakra-ui/react";
import Quarter_1 from "./detailed_course_syllabus/Quarter-1/Quarter_1";
import Section_1 from "./detailed_course_syllabus/Quarter-1/Section_1";
import Quarter_II from "./detailed_course_syllabus/Quarter-2/Quarter_II";
import Quarter_III from "./detailed_course_syllabus/Quarter-3/Quarter_III";
import Quarter_IV from "./in-depth-information-about-specialization-courses/AI_and_Deep_Learning_Specialization/Quarter_IV";
import Quarter_V from "./in-depth-information-about-specialization-courses/AI_and_Deep_Learning_Specialization/Quarter_V";
import CNCCS_Quarter_IV from "./in-depth-information-about-specialization-courses/Cloud_Native_Computing_Specialization/Quarter_IV";
import CNCCS_Quarter_V from "./in-depth-information-about-specialization-courses/Cloud_Native_Computing_Specialization/Quarter_V";
import Section_I from "./in-depth-information-about-specialization-courses/Web_3_and_Metaverse_Specialization/Section_I";
import Section_II from "./in-depth-information-about-specialization-courses/Web_3_and_Metaverse_Specialization/Section_II";
import Outcome from "./Outcome";
import Relevant_Information_Links from "./Relevant_Information_Links";
import SpecializedTracks from "./Specialized-Tracks";

const Curriculum = () => {
  return (
    <>
     <Heading id="the-program-in-a-nutshell-earn-while-you-learn" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'>
       The Program in a Nutshell: Earn While You Learn
     </Heading>
     <Text as='p' mt='1em' mb='1em' color='#606C71'>
        In this brand-new type of curriculum, students will learn how to make money and
        boost exports in the classroom and will begin doing so within six months of the program’s
        beginning. It resembles a cross between a corporate venture and an educational project.
     </Text> 

     <Heading id="program-of-studies" as='h2' fontSize='1.5em' mt='1rem' mb='1rem' fontWeight='normal' color='#159957'> 
       Program of Studies 
     </Heading>
     <Text as='p' mt='1em' mb='1em' color='#606C71'>
       This curriculum is intended for beginners who want to learn software development from the
       ground up. The first two quarters are shared by all specialities and are dedicated
       to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development.
       It is going to be a year-long hybrid programme that includes both onsite and online
       classes and is divided into four quarters of 13 weeks each.
       The emphasis will be on hands-on learning by educating students to produce projects.
       To accommodate everyone, courses will be held primarily on weekends or after 6:00 p.m.
       (Pakistan Time) on weekdays. It employs a hybrid teaching format, with core
       onsite classes complemented by online Zoom laboratories and recorded videos.
     </Text>  

     <SpecializedTracks />
     <Outcome />
     <Relevant_Information_Links /> 
     <Quarter_1 />  
     <Quarter_II /> 
     <Quarter_III />

     {/***** in-depth-information-about-specialization-courses components  */}
     
     {/******* Web-3-and-Metaverse-Specialization *********** */}
      <Section_I /> 
      <Section_II /> 

     {/*** Artificial Intelligence (AI) and Deep Learning Specialization  ***/} 
       <Quarter_IV />
       <Quarter_V />
  
     {/*** Cloud-Native Computing Specialization  ***/}   
       <CNCCS_Quarter_IV /> 
       <CNCCS_Quarter_V />
    </>
  )
}

export default Curriculum