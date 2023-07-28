export const ProductCardSkeleton = ({ size }) => {
  return (
    <>
      {[...Array(size)].map((_, index) => (
        <div
          key={index}
          className="rounded-md p-5 flex flex-col items-center justify-between gap-5 shadow-lg m-5 animate-pulse"
        >
          <div className="font-bold text-lg text-center truncate w-full h-6 bg-gray-300 rounded-md"></div>
          <div className="h-4 w-24 bg-gray-300 rounded-md"></div>
          <div className="w-48 h-48 bg-gray-300 rounded-md"></div>
        </div>
      ))}
    </>
  );
};
