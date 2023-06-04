import SocialMediaIcons from "../components/SocialMediaIcons";
// Define a functional component called Footer
const Footer = () => {
  // Render the component
  return (
    <footer className='h-64 bg-red pt-10'>
      <div className='w-10/12 mx-auto'>
        {/* Render the SocialMediaIcons component */}
        <SocialMediaIcons />
        <div className='md:flex justify-center md:justify-between text-center '>
          {/* Render the name */}
          <p className='font-playfair font-semibold text-2xl text-yellow'>
            ASHOK KUMAR
          </p>
          {/* Render the copyright */}
          <p className='font-playfair text-md text-yellow'>
            ©2023 ASH. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
// Export the Footer component as the default export of this module
export default Footer;
