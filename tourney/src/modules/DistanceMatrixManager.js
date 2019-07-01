export default {
    get(url) {
      return fetch((url)).then(e => e.json())
    }
  }