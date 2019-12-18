export function authHeader() {
  let data = JSON.parse(localStorage.getItem('data'));

  if(data && data.token) {
      return `${data.token}`
  } else {
      return []
  }
}