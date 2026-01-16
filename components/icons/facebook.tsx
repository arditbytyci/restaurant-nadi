interface FacebookProps {
  color?: string;
}

export const Facebook: React.FC<FacebookProps> = ({ color = "#450b1d" }) => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14 h-14 lg:w-20 lg:h-20"
    >
      <path
        d="M322.56 113.493H362.667V45.6533C343.248 43.6341 323.737 42.6371 304.213 42.6667C246.187 42.6667 206.507 78.08 206.507 142.933V198.827H141.013V274.773H206.507V469.333H285.013V274.773H350.293L360.107 198.827H285.013V150.4C285.013 128 290.987 113.493 322.56 113.493Z"
        fill={color}
      />
    </svg>
  );
};
