const remoteURL = "http://localhost:5001"

export default {
  get(id) {
    return fetch(`${remoteURL}/locations/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/locations`).then(e => e.json())
  },
  getDays(day){
    return fetch(`${remoteURL}/locations?checkboxes.${(day)}=true`).then(e => e.json())
  },
  deleteLocation(id) {
    return fetch(`${remoteURL}/locations/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  post(location) {
    return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(location)
    }).then(e => e.json())
  },
  put(editedLocation) {
    return fetch(`${remoteURL}/locations/${editedLocation.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedLocation)
    }).then(data => data.json());
  }
}
