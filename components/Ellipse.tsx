export const Ellipse = ({ className }: { className: string }) => {
  return (
    <svg
      width="400"
      height="600"
      viewBox="0 0 500 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <ellipse cx="250" cy="400" rx="250" ry="400" fill="#450B1D" />
    </svg>
  );
};
