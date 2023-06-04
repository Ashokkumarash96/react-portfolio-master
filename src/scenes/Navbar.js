// Import the useState hook from React
import { useState } from "react";
// Import the AnchorLink component that enables smooth scrolling to anchors
import AnchorLink from "react-anchor-link-smooth-scroll";
// Import the useMediaQuery custom hook that returns a boolean based on a media query
import useMediaQuery from "../hooks/useMediaQuery";
// Define the Link component that renders an anchor link with some styles
const Link = ({ page, selectedPage, setSelectedPage }) => {
  // Get the page name in lowercase
  const lowerCasePage = page.toLowerCase();
  return (
    // Use the AnchorLink component with some tailwind classes and props
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? "text-yellow" : ""
      } hover:text-yellow transition duration-500`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
};
// Define the Navbar component that renders a navigation bar with some links
const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
  // Use the useState hook to manage the state of the menu toggle
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  // Use the useMediaQuery hook to check if the screen size is desktop or not
  const isDesktop = useMediaQuery("(min-width: 768px)");
  // Use a ternary operator to set the navbar background based on the isTopOfPage prop
  const navbarBackground = isTopOfPage ? "" : "bg-red";

  return (
    // Use a nav element with some tailwind classes and styles
    <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
      <div className='flex items-center justify-between mx-auto w-5/6'>
        {/*Use an h4 element to display the logo*/}
        <h4 className='font-playfair text-3xl font-bold'>AK</h4>
        {/* DESKTOP NAV */}
        {/*Use a conditional rendering to display the desktop nav if isDesktop is true*/}
        {isDesktop ? (
          <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
            {" "}
            {/*Use a div element with some tailwind classes and styles*/}
            {/*Use the Link component to display the home link*/}
            <Link
              page='Home'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/*Use the Link component to display the skills link*/}
            <Link
              page='Skills'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* Use the Link component to display the projects link*/}
            <Link
              page='Projects'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/*Use the Link component to display the testimonials link*/}
            <Link
              page='Testimonials'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/*Use the Link component to display the contact link*/}
            <Link
              page='Contact'
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        ) : (
          <button
            className='rounded-full bg-red p-2'
            onClick={() => setIsMenuToggled(!isMenuToggled)}
          >
            {/*Use a button element with some tailwind classes and styles to toggle the menu icon*/}
            <img alt='menu-icon' src='../assets/menu-icon.svg' />
          </button>
        )}
        {/* MOBILE MENU POPUP */}
        {/*Use a conditional rendering to display the mobile menu popup if isDesktop is false and isMenuToggled is true*/}
        {!isDesktop &&
          isMenuToggled &&
          {
            /*Use a div element with some tailwind classes and styles to display the popup*/
          }(
            <div className='fixed right-0 bottom-0 h-full bg-blue w-[300px]'>
              {/* CLOSE ICON */}
              {/* Use a div element with some tailwind classes and styles to display the close icon*/}
              <div className='flex justify-end p-12'>
                {/*Use a button element to toggle the close icon*/}
                <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                  <img alt='close-icon' src='../assets/close-icon.svg' />
                </button>
              </div>

              {/* MENU ITEMS */}
              {/*Use a div element with some tailwind classes and styles to display the menu items*/}
              <div className='flex flex-col gap-10 ml-[33%] text-2xl text-deep-blue'>
                {/*Use the Link component to display the home link*/}
                <Link
                  page='Home'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/*Use the Link component to display the skills link*/}
                <Link
                  page='Skills'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/*Use the Link component to display the project link*/}
                <Link
                  page='Projects'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/*Use the Link component to display the testimonials link*/}
                <Link
                  page='Testimonials'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
                {/*Use the Link component to display the contact link*/}
                <Link
                  page='Contact'
                  selectedPage={selectedPage}
                  setSelectedPage={setSelectedPage}
                />
              </div>
            </div>
          )}
      </div>
    </nav>
  );
};
// Export the Navbar component as default
export default Navbar;
