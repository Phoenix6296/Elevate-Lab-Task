import { toast } from "react-hot-toast";
import { getData } from "../services";

export const getProducts = async (setData, setLoading) => {
  setLoading(true);
  const response = await getData("/products");
  if (response.status === 200) {
    setData(response.data);
    setLoading(false);
  } else {
    setLoading(false);
    toast.error(response.message || "Something went wrong");
  }
};

export const getCategories = async (setData) => {
  const response = await getData("/products/categories");
  if (response.status === 200) {
    setData(response.data);
    setData((prev) => [...prev, "All"]);
  } else {
    toast.error(response.message || "Something went wrong");
  }
};
