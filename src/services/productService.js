// import axios from "axios";
import axios from "../utilities/interceptor/jwtInterceptor";

export default class ProductService {
  getProducts() {
    // return axios.get("http://localhost:8080/api/products/getall")
    return axios.get("/api/products/getall");
  }
  getByProductId(id) {
    return axios.get("http://localhost:8080/api/products/getById?id=" + id);
  }
  addProduct(product) {
    return axios.post("http://localhost:8080/api/products/add", product);
  }
}
