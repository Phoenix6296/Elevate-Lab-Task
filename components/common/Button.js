export const Button = ({
  type,
  title,
  onClick,
  className,
  disabled,
  containerStyles,
}) => {
  return (
    <div className={containerStyles}>
      <button
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={`${className} px-4 py-2 rounded-md bg-primary text-white font-semibold`}
      >
        {title}
      </button>
    </div>
  );
};
