const remoteURL = "http://localhost:5001"

export default {

  get(userName) {
      return fetch(`${remoteURL}/users?user_name=${userName}`).then(e => e.json())
  },

  getAll(users) {
    return fetch(`${remoteURL}/users`).then(e => e.json())
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
    }).then(data => data.json())
  },
  patch(editedUser) {
    return fetch(`${remoteURL}/users/${editedUser.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedUser)
    }).then(data => data.json())
  }
}