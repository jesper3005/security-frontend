import { router } from '../router'

export const userService = {
  login,
  logout
}

function login(email, password, ip) {
  console.log('Creating header')
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password, ip })
  };
  const URL = 'http://localhost:8084/jwtbackend/api/login'

  console.log('Starting fetch')
  return fetch(URL, requestOptions)
      .then(handleResponse)
      .then(data => {
          if(data.token) {
              localStorage.setItem('data', JSON.stringify(data))
          }
          router.push('/verification');
          this.$router.go(0);
          console.log('Success')
          return user;
      })
      .then(err=>console.log(`Shieet` + err))
}

function logout() {
  localStorage.removeItem('data')
};

function handleResponse(response) {
  console.log('Handling response')
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              console.log('401')
              logout();
              location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          console.log("Something went wrong with handling response" + error)
          return Promise.reject(error);
      }
      console.log('Handling response success')
      return data;
  });

}


