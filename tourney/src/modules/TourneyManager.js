const remoteURL = "http://localhost:5001"

export default {
  get(id) {
    return fetch(`${remoteURL}/tourneys/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/tourneys?_sort=date&_order=desc`).then(e => e.json())
  },
  deleteTourney(id) {
    return fetch(`${remoteURL}/tourneys/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  post(tourney) {
    return fetch(`${remoteURL}/tourneys`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tourney)
    }).then(e => e.json())
  },
  put(editedTourney) {
    return fetch(`${remoteURL}/tourneys/${editedTourney.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedTourney)
    }).then(data => data.json());
  }
}