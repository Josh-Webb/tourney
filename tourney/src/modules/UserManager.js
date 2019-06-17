const remoteURL = "http://localhost:5001"

export default {
  get(id) {
    return fetch(`${remoteURL}/users/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/users`).then(e => e.json())
  },
  deleteUser(id) {
    return fetch(`${remoteURL}/users/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  post(user) {
    return fetch(`${remoteURL}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user)
    }).then(e => e.json())
  },
  put(editedUser) {
    return fetch(`${remoteURL}/users/${editedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json());
  }
}