// import the component that renders social media icons
import SocialMediaIcons from "../components/SocialMediaIcons";
// import the motion component from framer-motion library for animations
import { motion } from "framer-motion";
// import the AnchorLink component for smooth scrolling to sections
import AnchorLink from "react-anchor-link-smooth-scroll";
// import the profile picture image
import profilePic from "../assets/profile-pic.png";
// define the Landing component that renders the home section
const Landing = ({ setSelectedPage }) => {
  return (
    <section
      id='home'
      className='md:flex md:justify-between md:items-center gap-16 md:h-full py-10'
    >
      {/* IMAGE SECTION */}
      <div className='basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2'>
        <div
          className='relative z-0 ml-20 before:absolute  
            before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]'
        >
          <img
            alt='profile'
            className='hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[400px] '
            src={profilePic}
          />
        </div>
      </div>

      {/* MAIN TEXT */}

      <div className='z-30 basis-2/5 mt-12 md:mt-32'>
        {/* HEADINGS */}
        {/*use the motion component to animate the headings with variants*/}
        <motion.div
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/*display the name with a custom font and a brush effect on the last name*/}
          <p className='text-6xl font-playfair z-10 text-center md:text-start'>
            ASHOK{" "}
            <span
              className='xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]'
            >
              KUMAR
            </span>
          </p>
          {/*display a short introduction paragraph*/}
          <p className='mt-10 mb-7 text-sm text-center md:text-start'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
            neque illo, ea magni nesciunt repudiandae!
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        {/*use the motion component to animate the buttons with variants and a delay*/}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/*use the AnchorLink component to scroll to the contact section and set the selected page state*/}
          <AnchorLink
            className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500'
            onClick={() => setSelectedPage("contact")}
            href='#contact'
          >
            Contact Me
          </AnchorLink>
          {/*use another AnchorLink component with a different style for the same purpose*/}
          <AnchorLink
            className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
            onClick={() => setSelectedPage("contact")}
            href='#contact'
          >
            <div className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair'>
              Let's talk.
            </div>
          </AnchorLink>
        </motion.div>
        {/*use the motion component to animate the social media icons with variants and a delay*/}
        <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/*use the SocialMediaIcons component to render the icons with links*/}
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
