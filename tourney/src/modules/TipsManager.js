const remoteURL = "http://localhost:6001"

export default {
  get(id) {
    return fetch(`${remoteURL}/tips/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/tips`).then(e => e.json())
  },
  deleteTip(id) {
    return fetch(`${remoteURL}/tips/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  post(tip) {
    return fetch(`${remoteURL}/tips`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tip)
    }).then(e => e.json())
  },
  put(editedTip) {
    return fetch(`${remoteURL}/locations/${editedTip.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTip)
    }).then(data => data.json());
  }
}