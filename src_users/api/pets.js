// API Pets static class
export default class ApiPets {

  // TODO export this vars in a config js file
  static serverBaseUrl() { return 'http://localhost:8080' };

  // get a list of pets
  static getList({page, size = 10}) {
    const data = {page, size};
    return fetch(`${ApiPets.serverBaseUrl()}/pet/list`, {
      method: 'post',
      mode: 'no-cors',
      body: JSON.stringify(data)
    });
  }

  // get pet detail
  static get(id) {
    return fetch(`${ApiPets.serverBaseUrl()}/pet/${id}`, {
      method: 'get',
      mode: 'no-cors'
    });
  }

  // get the pet categories
  static getCategories() {
    return fetch(`${ApiPets.serverBaseUrl()}/category/list`, {method: 'get', mode: 'no-cors'});
  }

  // add/edit a pet
  static addEdit(data) {
    return fetch(`${ApiPets.serverBaseUrl()}/pet`, {
      method: 'post',
      mode: 'no-cors',
      body: JSON.stringify(data)
    });
  }

  // update a pet
  static update(data) {
    return fetch(`${ApiPets.serverBaseUrl()}/pet`, {
      method: 'put',
      mode: 'no-cors',
      body: JSON.stringify(data)
    });
  }

  // delete a pet
  static delete(id) {
    return fetch(`${ApiPets.serverBaseUrl()}/pet/${id}`, {method: 'delete', mode: 'no-cors'});
  }
}
