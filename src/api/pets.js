import SERVER_BASE_URL from './config';

// API Pets static class
export default class ApiPets {

  // get a list of pets
  static getList({page, size = 10}) {
    return fetch(`${SERVER_BASE_URL}/pet/list?page=${page}&size=${size}`, {
      method: 'get',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'})
    }).then(response => response.json());
  }

  // get pet detail
  static get(id) {
    return fetch(`${SERVER_BASE_URL}/pet/${id}`, {
      method: 'get',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'})
    }).then(response => response.json());
  }

  // get the pet categories
  static getCategories() {
    return fetch(`${SERVER_BASE_URL}/category/list`, {
      method: 'get',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'})
    }).then(response => response.json());
  }

  // add/edit a pet
  static addEdit(data) {
      // Call add/update rest service
      return fetch(`${SERVER_BASE_URL}/pet`, {
        method: !data.id ? 'post' : 'put',
        mode: 'cors',
        headers: new Headers({'content-type': 'application/json'}),
        body: JSON.stringify(data)
      }).then(response => response.json());
  }

  // update a pet
  static update(data) {
    return fetch(`${SERVER_BASE_URL}/pet`, {
      method: 'put',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'}),
      body: JSON.stringify(data)
    }).then(response => response.json());
  }

  // delete a pet
  static delete(id) {
    return fetch(`${SERVER_BASE_URL}/pet/${id}`, {
      method: 'delete',
      mode: 'cors',
      headers: new Headers({'content-type': 'application/json'})
    });
  }
}
