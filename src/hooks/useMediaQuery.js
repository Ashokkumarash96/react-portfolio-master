// Import the useState and useEffect hooks from React
import { useState, useEffect } from "react";

// Define a custom hook called useMediaQuery that takes a query string as a parameter
const useMediaQuery = (query) => {
  // Declare a state variable called matches that stores a boolean value
  const [matches, setMatches] = useState(false);

  // Use the useEffect hook to run a side effect when the component mounts or updates
  useEffect(() => {
    // Create a media query object using the window.matchMedia method
    const media = window.matchMedia(query);
    // Check if the media query matches the current window size
    if (media.matches !== matches) {
      // If not, update the matches state variable using the setMatches function
      setMatches(media.matches);
    }
    // Define a listener function that updates the matches state variable when the window size changes
    const listener = () => setMatches(media.matches);
    // Add the listener function to the resize event of the window object
    window.addEventListener("resize", listener);
    // Return a cleanup function that removes the listener function from the resize event
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]); // Pass an array of dependencies to the useEffect hook

  // Return the matches state variable from the custom hook
  return matches;
};

// Export the custom hook so it can be used by other files
export default useMediaQuery;
