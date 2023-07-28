import Image from "next/image";

export const SearchInput = ({
  placeholder,
  value,
  setValue,
  onSearch,
  containerStyles,
}) => {
  return (
    <div className={`${containerStyles} flex rounded-md overflow-hidden`}>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="outline-none p-2 px-4 w-full"
      />
      <button
        className="bg-orange-300 px-4 rounded-tr-md rounded-br-md flex items-center"
        onClick={onSearch}
      >
        <Image src="/common/search.svg" alt="Search" width={20} height={20} />
      </button>
    </div>
  );
};
