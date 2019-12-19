<script>
import { mapActions } from 'vuex'

export default {
  name: 'Profile',
  data () {
    return {
      email: '',
      data: JSON.parse(localStorage.getItem('data')),
    }
  },
  created () {
    const data = JSON.parse(localStorage.getItem('data'))
    console.log(data)
    const email = data.email;
    const token = data.token;
    this.getUserInformation({email, token})
  },
  methods: {
    ...mapActions('account', ['getUserInformation']),
    // fetchUserData(email, token) {
    //   const requestOptions = {
    //     method: 'GET',
    //     headers: { 'Content-Type': 'application/json'},
    //     body: JSON.stringify({ email, token })
    //   };
    //   try {
    //         const res = await userService.getUserInformation(email, token);
    //         if ( res.status === 200 ) {
    //             const data = await res.json();
    //             return data;
    //         } else {
    //             console.log("There was no data")
    //         }
    //     } catch (e) {
    //         console.log('Something went wront ' + e.message)
    //     }
    // }
  }
}
</script>

<template>
  <div>
    <h1>Profile</h1>
    <p> {{data.email}} </p>
  </div>
</template>