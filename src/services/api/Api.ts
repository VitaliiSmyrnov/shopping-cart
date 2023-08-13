import axios, { AxiosResponse } from "axios";

import { Product } from "src/modules/IProduct";

axios.defaults.baseURL = "https://dummyjson.com/products";

interface ApiResponse {
  data: {
    products: Product[];
  };
}

export const fetchData = async (): Promise<ApiResponse> => {
  const response: AxiosResponse<ApiResponse> = await axios.get("");
  return response.data.products;
};
