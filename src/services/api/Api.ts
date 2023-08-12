import axios, { AxiosResponse } from "axios";

import { Product } from "src/modules/IProduct";

axios.defaults.baseURL = "https://dummyjson.com/products";

export const fetchData = async (): Promise<Product[]> => {
  const response: AxiosResponse<{ products: Product[] }> = await axios.get("");
  return response.data.products;
};
