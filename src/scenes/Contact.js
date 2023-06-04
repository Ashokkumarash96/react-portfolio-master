// Import a component called LineGradient from another file
import LineGradient from "../components/LineGradient";
// Import the useForm hook from react-hook-form library
import { useForm } from "react-hook-form";
// Import the motion component from framer-motion library
import { motion } from "framer-motion";

// Define a component called Contact
const Contact = () => {
  // Destructure some properties from the useForm hook
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  // Define a function called onSubmit that takes an event object as a parameter
  const onSubmit = async (e) => {
    // Log the event object to the console
    console.log("~ e", e);
    // Validate the form data using the trigger function
    const isValid = await trigger();
    // If the form data is not valid, prevent the default behavior of the event
    if (!isValid) {
      e.preventDefault();
    }
  };

  // Return some JSX elements from the component
  return (
    // Use a section element with an id and some classes
    <section id='contact' className='contact py-48'>
      {/* Use a comment to separate different sections of the JSX */}
      {/* HEADINGS */}
      {/*Use a motion.div element to add some animation effects*/}
      <motion.div
        // Set some initial, whileInView, viewport and transition properties for the animation
        initial='hidden'
        whileInView='visible'
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        // Set some variants for the animation states
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        // Set some classes for the element
        className='flex justify-end w-full'
      >
        {/*Use a div element to wrap some text elements*/}
        <div>
          {/*Use a p element with some classes to display a heading text*/}
          <p className='font-playfair font-semibold text-4xl'>
            {/*Use a span element with a class to highlight some text in yellow
            color*/}
            <span className='text-yellow'>CONTACT ME</span> TO GET STARTED
          </p>
          {/*Use a div element with some classes to wrap another component*/}
          <div className='flex md:justify-end my-5'>
            {/*Use the LineGradient component with a prop to display a line with
            gradient color*/}
            <LineGradient width='w-1/2' />
          </div>
        </div>
      </motion.div>
      {/* FORM & IMAGE */}
      {/*Use a div element with some classes and a gap property to display two
      sections side by side on larger screens*/}
      <div className='md:flex md:justify-between gap-16 mt-5'>
        {/*Use a motion.div element to add some animation effects to the image
        section*/}
        <motion.div
          // Set some initial, whileInView, viewport and transition properties for the animation
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          // Set some variants for the animation states
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          // Set some classes for the element
          className='basis-1/2 flex justify-center'
        >
          {/*Use an img element to display an image from a local file and set an
          alt attribute for accessibility*/}
          <img src='../assets/contact-image.jpeg' alt='contact' />
        </motion.div>
        {/*Use a motion.div element to add some animation effects to the form
        section*/}
        <motion.div
          // Set some initial, whileInView, viewport and transition properties for the animation with a delay property
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          // Set some variants for the animation states
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          // Set some classes for the element
          className='basis-1/2 mt-10 md:mt-0'
        >
          {/*Use a form element with some attributes and an onSubmit handler
          function to submit the form data to an external service*/}
          <form
            target='_blank'
            onSubmit={onSubmit}
            action='https://formsubmit.co/e8a5bdfa807605332f809e5656e27c6e'
            method='POST'
          >
            {/* Use an input element with some classes and attributes to get the
            name of the user and register it with the useForm hook*/}
            <input
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3'
              type='text'
              placeholder='NAME'
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {/* Use a conditional rendering to display an error message if the
            name input is invalid*/}
            {errors.name && (
              <p className='text-red mt-1'>
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" && "Max length is 100 char."}
              </p>
            )}
            {/* Use an input element with some classes and attributes to get the
            email of the user and register it with the useForm hook*/}
            <input
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
              type='text'
              placeholder='EMAIL'
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {/*  Use a conditional rendering to display an error message if the
            email input is invalid*/}
            {errors.email && (
              <p className='text-red mt-1'>
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}
            {/* Use a textarea element with some classes and attributes to get
            the message of the user and register it with the useForm hook*/}
            <textarea
              className='w-full bg-blue font-semibold placeholder-opaque-black p-3 mt-5'
              name='message'
              placeholder='MESSAGE'
              rows='4'
              cols='50'
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {/*Use a conditional rendering to display an error message if the
            message input is invalid*/}
            {errors.message && (
              <p className='text-red mt-1'>
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 2000 char."}
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

// Export the component so it can be used by other files
export default Contact;
