export const Profile = ({ active }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 0.6 0.6"
      xmlns="http://www.w3.org/2000/svg"
      fill={active ? "#D5AB2D" : "black"}
    >
      <path d="M.393.318a.15.15 0 1 0-.185 0 .25.25 0 0 0-.155.205.025.025 0 0 0 .05.006.2.2 0 0 1 .398 0 .025.025 0 0 0 .025.022h.003A.025.025 0 0 0 .551.523.25.25 0 0 0 .395.318ZM.3.3A.1.1 0 1 1 .4.2a.1.1 0 0 1-.1.1Z" />
    </svg>
  );
};
