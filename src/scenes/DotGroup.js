import AnchorLink from "react-anchor-link-smooth-scroll";
// Define a functional component called DotGroup
const DotGroup = ({ selectedPage, setSelectedPage }) => {
  // Define the styles for the selected dot
  const selectedStyles = `relative bg-yellow before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-yellow before:left-[-50%] before:top-[-50%]`;
  // Render the component
  return (
    <div className='flex flex-col gap-6 fixed top-[60%] right-7'>
      {/* Render the dot for the "home" section */}
      <AnchorLink
        href='#home'
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />
      {/* Render the dot for the "skills" section */}
      <AnchorLink
        href='#skills'
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")}
      />
      {/* Render the dot for the "projects" section */}
      <AnchorLink
        href='#projects'
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      />
      {/* Render the dot for the "testimonials" section */}
      <AnchorLink
        href='#testimonials'
        className={`${
          selectedPage === "testimonials" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("testimonials")}
      />
      {/* Render the dot for the "contact" section */}
      <AnchorLink
        href='#contact'
        className={`${
          selectedPage === "contact" ? selectedStyles : "bg-dark-grey"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("contact")}
      />
    </div>
  );
};
// Export the DotGroup component as the default export of this module
export default DotGroup;
