const remoteURL = "http://localhost:5001"

export default {
  get(id) {
    return fetch(`${remoteURL}/connections/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/connections`).then(e => e.json())
  },
  deleteEvent(id) {
    return fetch(`${remoteURL}/connections/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  post(connection) {
    return fetch(`${remoteURL}/connections`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(connection)
    }).then(e => e.json())
  },
  put(editedConnection) {
    return fetch(`${remoteURL}/connections/${editedConnection.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedConnection)
    }).then(data => data.json());
  }
}