// Import the LineGradient component
import LineGradient from "../components/LineGradient";

// Import the motion library
import { motion } from "framer-motion";
// Define the container styles
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
// Define the project styles
const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};
// Define the Project component
const Project = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // Get the project title in lowercase and with spaces replaced by hyphens
  const projectTitle = title.split(" ").join("-").toLowerCase();
  // Return a motion.div element with the project styles
  return (
    <motion.div variants={projectVariant} className='relative'>
      <div className={overlayStyles}>
        <p className='text-2xl font-playfair'>{title}</p>
        <p className='mt-7'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi
          perferendis illum sunt quasi cupiditate dicta temporibus
        </p>
      </div>
      {/*Add an image of the project*/}
      <img src={`../assets/${projectTitle}.jpg`} alt={projectTitle} />
    </motion.div>
  );
};
// Define the Projects component
const Projects = () => {
  // Return a section with the projects heading, projects, and footer
  return (
    <section id='projects' className='pt-48 pb-48'>
      {/* HEADINGS */}
      {/*Add a motion.div element with the heading styles*/}
      <motion.div
        className='md:w-2/5 mx-auto text-center'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className='font-playfair font-semibold text-4xl'>
            <span className='text-red'>PRO</span>JECTS
          </p>
          <div className='flex justify-center mt-5'>
            <LineGradient width='w-2/3' />
          </div>
        </div>
        <p className='mt-10 mb-10'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, qui
          dolorum. Eos fugiat nulla blanditiis molestias, vero ullam quibusdam
          eaque culpa eum, in sunt autem.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className='flex justify-center'>
        <motion.div
          className='sm:grid sm:grid-cols-3'
          variants={container}
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/*Use a div element to display an empty space with a background color*/}
          <div
            className='flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
          ></div>
          {/*Use the Project component to display the projects*/}
          <Project title='Project 1' />
          <Project title='Project 2' />

          {/* ROW 2 */}
          <Project title='Project 3' />
          <Project title='Project 4' />
          <Project title='Project 5' />

          {/* ROW 3 */}
          <Project title='Project 6' />
          <Project title='Project 7' />
          <Project title='Project 8' />

          {/* ROW 4*/}
          <Project title='Project 9' />
          <Project title='Project 10' />
          {/*Use a div element to display an empty space with a background color*/}
          <div
            className='flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold'
          ></div>
        </motion.div>
      </div>
    </section>
  );
};
// Export the Projects component as default
export default Projects;
