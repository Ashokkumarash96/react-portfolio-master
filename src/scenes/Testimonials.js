// import a component that renders a line gradient
import LineGradient from "../components/LineGradient";
// import a library that enables animation for React components
import { motion } from "framer-motion";
// define a functional component that displays testimonials
const Testimonials = () => {
  return (
    //use a section element with an id and some tailwind classes for styling
    <section id='testimonials' className='pt-32 pb-16'>
      {/* HEADING */}
      {/*use a motion div element to animate the heading*/}
      <motion.div
        className='md:w-1/3 text-center md:text-left'
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/*use a paragraph element to display the title of the section*/}
        <p className='font-playfair font-semibold text-4xl mb-5 text-red'>
          TESTIMONIALS
        </p>
        {/*use the LineGradient component to render a line below the title*/}
        <LineGradient width='mx-auto w-2/5' />
        {/* use another paragraph element to display a subtitle*/}
        <p className='mt-10'>Here's What People are Saying About My Work.</p>
      </motion.div>

      {/* TESTIMONIALS */}
      {/*use a div element with flex layout and some gap to display the testimonials*/}
      <div className='md:flex md:justify-between gap-8'>
        {/*use a motion div element to animate the first testimonial*/}
        <motion.div
          className='mx-auto relative bg-blue max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person1'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/*use a paragraph element to display a quotation mark*/}
          <p className='font-playfair text-6xl'>“</p>
          {/*use another paragraph element to display the testimonial text*/}
          <p className='text-center text-xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        {/*use a motion div element to animate the second testimonial with some delay*/}
        <motion.div
          className='mx-auto relative bg-red max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person2'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* use a paragraph element to display a quotation mark*/}
          <p className='font-playfair text-6xl'>“</p>
          {/*use another paragraph element to display the testimonial text*/}
          <p className='text-center text-xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </motion.div>
        {/*use a motion div element to animate the third testimonial with some delay*/}
        <motion.div
          className='mx-auto relative bg-yellow max-w-[400px] h-[350px] flex flex-col justify-end p-16 mt-48
            before:absolute before:top-[-120px] before:-ml-[110px] before:left-1/2 before:content-person3'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          {/* use a paragraph element to display a quotation mark*/}
          <p className='font-playfair text-6xl'>“</p>
          {/*use another paragraph element to display the testimonial text*/}
          <p className='text-center text-xl'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit
          </p>
        </motion.div>
      </div>
    </section>
  );
};
// export the component as default
export default Testimonials;
