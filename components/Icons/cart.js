export const Cart = ({ active }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 0.6 0.6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M.125.175H.47A.05.05 0 0 1 .52.23L.505.38a.05.05 0 0 1-.05.045H.216a.05.05 0 0 1-.049-.04L.125.175Z"
        stroke={active ? "#D5AB2D" : "#000"}
        strokeWidth=".05"
        strokeLinejoin="round"
      />
      <path
        d="M.125.175.105.094A.025.025 0 0 0 .081.075H.05m.15.45h.05m.15 0h.05"
        stroke="#000"
        strokeWidth=".05"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
