import axios from "axios";

import { Product } from "src/modules/IProduct";

axios.defaults.baseURL = "https://dummyjson.com/products";

interface ApiResponse {
  data: {
    products: Product[];
  };
}

export const fetchData = async (): Promise<Product[]> => {
  const response: ApiResponse = await axios.get("");

  return response.data.products;
};
