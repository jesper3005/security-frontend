export function verificationAuth() {
    let verified = JSON.parse(localStorage.getItem('verified'));
  
    return verified;
  }