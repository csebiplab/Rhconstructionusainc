const SmallHeadingWithIcon = ({ smallHeadingText = "Heading Missing" }) => {
  return (
    <div className="flex items-center gap-x-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="12"
        viewBox="0 0 23 12"
        fill="none"
      >
        <circle cx="6" cy="6" r="6" fill="#FFB703" />
        <circle cx="16.667" cy="6" r="6" fill="black" />
      </svg>
      <h5 className="!text-sm !font-normal">{smallHeadingText}</h5>
    </div>
  );
};

export default SmallHeadingWithIcon;
