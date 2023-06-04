// Define a component called LineGradient
const LineGradient = ({ width = "w-full" }) => {
  // Return a div element with two classes and a style attribute height: 0.125rem (2px), background
  return <div className={`h-0.5 ${width} bg-gradient-rainblue`} />;
};
// Export the component so it can be used by other files
export default LineGradient;
