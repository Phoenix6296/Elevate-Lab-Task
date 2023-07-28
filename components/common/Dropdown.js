import { capitalizeFirstLetter } from "@/utils/helper";

export const Dropdown = ({
  options,
  identifier = "value",
  value,
  setValue,
  defaultValue,
  className,
}) => {
  return (
    <div className="relative">
      <select
        value={value ? value[identifier] || value : defaultValue} // Use the defaultValue prop here
        onChange={(e) => {
          const selectedOption = options.find(
            (option) =>
              option && (option[identifier] || option) === e.target.value
          );
          setValue(selectedOption);
        }}
        className={`${className} cursor-pointer block appearance-none w-full px-4 py-2.5 pr-8 rounded shadow leading-tight outline-none`}
      >
        {defaultValue && (
          <option value="">{capitalizeFirstLetter(defaultValue)}</option>
        )}
        {options.map((option, index) => (
          <option
            key={option ? option[identifier] || index : index}
            value={option ? option[identifier] || option : ""}
          >
            {option ? option[identifier] || capitalizeFirstLetter(option) : ""}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 lg:flex hidden items-center px-2 text-gray-700">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g data-name="24x24/On Light/Arrow-Bottom">
            <path fill="none" d="M0 24V0h24v24H0z" />
            <path
              d="M7.53 9.47a.75.75 0 0 0-1.06 1.06l5 5a.75.75 0 0 0 1.061 0l5.001-5.001a.75.75 0 0 0-1.062-1.06L12 13.939Z"
              fill="#141124"
            />
          </g>
        </svg>
      </div>
    </div>
  );
};
