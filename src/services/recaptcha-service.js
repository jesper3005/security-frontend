import axios from 'axios'

export const captchaValidation = {
  validation,
}

function validation(token) {
  const URL = 'https://www.google.com/recaptcha/api/siteverify'
  console.log("Sending data")
  // axios({
  //   method: 'post',
  //   url: URL,
  //   data: {
  //     token
  //   }
  // })
  //   .then(data => {
  //     console.log(data)
  //     if (data.length == 0) {
  //       alert('You are not welcome')
  //       window.locataion = 'https://google.com'
  //     }
  //     else {
  //       alert("You are a good guy")
  //     }
  //   })
  //   .then(err => console.log(err.message))
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ token })
  }
  return fetch(URL, requestOptions)
    .then(handleResponse)
    .then(data => {
      if (data.length == 0) {
        alert("You shall not pass!")
        window.location = 'https://google.com'
      }
      else {
        alert("you're a good guy! Please proceed")
      }
    })
    .then(err => console.log(`Shieet: ` + err))
}