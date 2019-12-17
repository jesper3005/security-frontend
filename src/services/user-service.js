export const userService = {
  login,
  logout
}

function login(email, password) {
  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({ email, password})
  };
  const URL = 'http://localhost:8000/api/login'

  return fetch(URL, requestOptions)
      .then(handleResponse)
      .then(user => {
          if(user.token) {
              localStorage.setItem('user', JSON.stringify(user))
          }

          return user;
      })
      .then(err=>alert('Wrong username or password'))
}

function logout() {
  localStorage.removeItem('user')
};

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              location.reload(true);
          }

          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
      }

      return data;
  });

}


