<script>
export default {
    name: 'Verification'
}
</script>

<template>
    <div>
        <h1>Please check your email and type in the code here</h1>
        <input type=number class="verification" />
    </div>
</template>

<style scoped>
    .verification {
        display: block;
        margin: auto;
        background-color: white;
        height: 20px;
        width: 18%;
        border: 1px solid rgba(214, 214, 214, 0.664);
        box-shadow: 1px 1px rgba(228, 228, 228, 0.603);
        border-radius: 40px;
        padding: 20px;
        margin-bottom: 12px;
  }
</style>