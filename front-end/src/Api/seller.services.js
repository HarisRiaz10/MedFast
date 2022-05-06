import http from "./http-common";
class SellerDataServices {
  getAll() {
    return http.get("/seller");
  }
  get(id) {
    return http.get(`/seller/${id}`);
  }
  create(data) {
    return http.post("/seller", data);
  }
  update(id, data) {
    return http.put(`/seller/${id}`, data);
  }
  delete(id) {
    return http.delete(`/seller/${id}`);
  }
  deleteAll() {
    return http.delete(`/seller`);
  }
  findByTitle(title) {
    return http.get(`/seller?title=${title}`);
  }
  login(name,pass){
    return http.get(`/seller/name/${name}/${pass}`);
  }
}
export default new SellerDataServices();