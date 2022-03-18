// import axios from "axios";
import axios from "../utilities/interceptor/jwtInterceptor";

export default class CategoryService {
  getCategories() {
    // return axios.get("http://localhost:8080/api/categories/getall")
    return axios.get("/api/categories/getall");
  }

}
