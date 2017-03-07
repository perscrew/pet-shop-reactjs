// API Pets static class
export default class ApiPets {

  // TODO export this vars in a config js file
  static serverBaseUrl() { return 'http://localhost:8080' };

  // get a list of pets
  static getList({page, size = 10}) {
    return fetch(`${ApiPets.serverBaseUrl()}/pet/list?page=${page}&size=${size}`, {
      method: 'get',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'})
    }).then(response => response.json());
  }

  // get pet detail
  static get(id) {
    return fetch(`${ApiPets.serverBaseUrl()}/pet/${id}`, {
      method: 'get',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'})
    }).then(response => response.json());
  }

  // get the pet categories
  static getCategories() {
    return fetch(`${ApiPets.serverBaseUrl()}/category/list`, {
      method: 'get',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'})
    }).then(response => response.json());
  }

  // add/edit a pet
  static addEdit(data) {
    return fetch(`${ApiPets.serverBaseUrl()}/pet`, {
      method: 'post',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  // update a pet
  static update(data) {
    return fetch(`${ApiPets.serverBaseUrl()}/pet`, {
      method: 'put',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  // delete a pet
  static delete(id) {
    return fetch(`${ApiPets.serverBaseUrl()}/pet/${id}`, {
      method: 'delete',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'})
    });
  }
}
