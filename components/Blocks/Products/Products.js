import { ProductCardSkeleton } from "@/components/Skeleton";
import { capitalizeFirstLetter } from "@/utils/helper";

const Card = ({ product }) => {
  const { title, image, price } = product;
  return (
    <div className="rounded-md p-5 flex flex-col items-center justify-between gap-5 shadow-lg m-5">
      <h3 className="font-bold text-lg text-center truncate w-full">{title}</h3>
      <h4>
        <span className="text-yellow">Price: </span>
        {`₹${price}`}
      </h4>
      <img src={image} alt={title} width={200} height={200} />
    </div>
  );
};

const NoProducts = () => (
  <h1 className="text-2xl text-center col-span-3">No products found</h1>
);

const ProductList = ({ products }) =>
  products.map((product) => <Card key={product.id} product={product} />);

const ProductsHeader = ({ loading, products, selectedCategory }) => {
  if (loading || products.length === 0) return null;
  const category = !selectedCategory
    ? "All"
    : `${capitalizeFirstLetter(selectedCategory)}`;
  return (
    <h1 className="text-3xl font-bold text-center my-10">
      {category} Products
    </h1>
  );
};

export const Products = ({ products, loading, selectedCategory }) => {
  return (
    <>
      <ProductsHeader
        loading={loading}
        products={products}
        selectedCategory={selectedCategory}
      />
      <section className="grid grid-cols-3 px-20">
        {loading ? <ProductCardSkeleton size={6} /> : null}
        {!loading && products.length === 0 ? <NoProducts /> : null}
        {!loading && products.length > 0 && <ProductList products={products} />}
      </section>
    </>
  );
};
