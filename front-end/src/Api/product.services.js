import http from "./http-common";
class ProductServices{
    getTable(){
        return http.get(`/search`)
    }
}
export default new ProductServices();