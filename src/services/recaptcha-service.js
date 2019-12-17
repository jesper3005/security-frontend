import axios from 'axios'

export const captchaValidation = {
  validation,
}

function validation(token) {
  const URL = 'https://www.google.com/recaptcha/api/siteverify'
  axios({
    method: 'post',
    url: URL,
    data: {
      token
    }
  })
  .then(data=>{
    console.log(data)
    if(data.length == 0)
      alert('You are not welcome')
      window.locataion = 'https://google.com'      
  })
  .then(err=>console.log(err))
}