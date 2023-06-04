import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import htmlSkill from "../assets/htmlicon.jpeg";
import cssSkill from "../assets/cssicon.jpeg";
import jsSkill from "../assets/jsicon.jpeg";
import reactSkill from "../assets/reacticon.png";
import mongoSkill from "../assets/mongoicon.png";
import nodeSkill from "../assets/nodeeicon.png";
import expressSkill from "../assets/expressicon.png";

const MySkills = () => {
  return (
    <section id='skills' className='pt-10 pb-24'>
      {/* HEADER AND IMAGE SECTION */}
      <div className='md:flex md:justify-between md:gap-16 mt-32'>
        <motion.div
          className='md:w-1/3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className='font-playfair font-semibold text-4xl mb-5'>
            MY <span className='text-red'>SKILLS</span>
          </p>
          <LineGradient width='w-1/3' />
          <p className='mt-10 mb-7'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Cupiditate, unde qui suscipit ad eum harum?
          </p>
        </motion.div>

        <div className='mt-16 md:mt-0'></div>
      </div>

      {/* SKILLS */}
      <div className='md:flex md:justify-between mt-16'>
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10 place-content-center'>
              <img
                className='h-36 w-48 place-content-center'
                src={htmlSkill}
                alt=''
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10 place-content-center'>
              <img
                className='h-36 w-48 place-content-center'
                src={cssSkill}
                alt=''
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10 place-content-center'>
              <img
                className='h-36 w-48 place-content-center'
                src={jsSkill}
                alt=''
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10 place-content-center'>
              <img
                className='h-36 w-48 place-content-center'
                src={reactSkill}
                alt=''
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10 place-content-center'>
              <img
                className='h-36 w-48 place-content-center'
                src={nodeSkill}
                alt=''
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10 place-content-center'>
              <img
                className='h-36 w-48 place-content-center'
                src={expressSkill}
                alt=''
              />
            </div>
          </div>
        </motion.div>
        <motion.div
          className='md:w-1/3 mt-10'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className='relative h-32'>
            <div className='z-10 place-content-center'>
              <img
                className='h-36 w-48 place-content-center'
                src={mongoSkill}
                alt=''
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
