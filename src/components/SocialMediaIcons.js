// Import an image file for the GitHub icon
import githubIcon from "../assets/githubicon.png";

// Define a component called SocialMediaIcons
const SocialMediaIcons = () => {
  // Return a div element with some classes and three child elements
  return (
    <div className='flex justify-center md:justify-start my-10 gap-7'>
      {/*The first child element is an anchor element that links to a LinkedIn profile*/}
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.linkedin.com/in/ashokkumar-ashok/'
        target='_blank'
        rel='noreferrer'
      >
        {/*The anchor element contains an image element that displays the LinkedIn logo*/}
        <img alt='linkedin-link' src='../assets/linkedin.png' />
      </a>
      {/*The second child element is an anchor element that links to a GitHub profile */}
      <a
        className='hover:opacity-50 transition duration-500 text-white'
        href='https://github.com/Ashokkumarash96'
        target='_blank'
        rel='noreferrer'
      >
        {/*The anchor element contains an image element that displays the GitHub icon imported earlier*/}
        <img alt='github-link' src={githubIcon} />
      </a>
      {/*The third child element is an anchor element that links to an Instagram profile */}
      <a
        className='hover:opacity-50 transition duration-500'
        href='https://www.instagram.com/ashok.ash.s/'
        target='_blank'
        rel='noreferrer'
      >
        {/*The anchor element contains an image element that displays the Instagram logo*/}
        <img alt='instagram-link' src='../assets/instagram.png' />
      </a>
    </div>
  );
};
// Export the component so it can be used by other files
export default SocialMediaIcons;
