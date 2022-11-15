import http from "../http-common";

class PersonneDataService {
  getAll() {
    return http.get("/entree");
  }

  get(id) {
    return http.get(`/entree/${id}`);
  }

  create(data) {
    return http.post("/entree", data);
  }

  // A COMPLETER
  // modifier une personne via son id
  update(data) {
    return http.put("/entree/", data);
  }

  //supprimer une personne via son id
  delete(id) {
    return http.delete(`/entree/${id}`);
  }
}

export default new PersonneDataService();
