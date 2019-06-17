const remoteURL = "http://localhost:5001"

export default {
  get(id) {
    return fetch(`${remoteURL}/games/${id}`).then(e => e.json())
  },
  getAll() {
    return fetch(`${remoteURL}/games`).then(e => e.json())
  },
  deleteGame(id) {
    return fetch(`${remoteURL}/games/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    }).then(e => e.json())
  },
  post(game) {
    return fetch(`${remoteURL}/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(game)
    }).then(e => e.json())
  },
  put(editedGame) {
    return fetch(`${remoteURL}/locations/${editedGame.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedGame)
    }).then(data => data.json());
  }
}