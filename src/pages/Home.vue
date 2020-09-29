<template>
  <div>
      <p>Hello, and welcome to the Marvel Character Lookup system. Here, you can search for different characters
        that exist in the Marvel Comics universe and learn more about those characters.</p>
      <p>First, let's create a (mock) account for you, to ensure that you're a real user and so (one day) you can
        save your searches and keep lists for your personal use</p>
    <div>
      <form
  id="form"
>
  <div class="form-group col-4" style="float:left;">
    <label for="name">Name</label>
    <input
      id="name"
      v-model="name"
      type="text"
      name="name"
      class="form-control"
      required
    >
    <div class="valid-feedback">
        Looks good!
      </div>
    <div class="invalid-feedback">
      Your name is required
    </div>
  </div>

  <div class="form-group col-4" style="float:left;">
    <label for="email">Email</label>
    <input
      id="email"
      v-model="email"
      type="text"
      name="email"
      min="0"
      class="form-control"
      required
    >
    <div class="valid-feedback">
      Looks good!
    </div>
    <div class="invalid-feedback">
      {{ emailError }}
    </div>
  </div>

  <div class="form-group col-4" style="float:left;">
    <label for="age">Age {{age}}</label>
    <input
      id="age"
      v-model="age"
      type="range"
      min="1"
      max="99"
      name="age"
      class="custom-range"
      required
    >
    <div class="valid-feedback">
      Looks good!
    </div>
    <div class="invalid-feedback">
      {{ ageError }}
    </div>
  </div>

  <div class="form-group" id="button-container">
    <button
      style="margin-left:50%;"
      type="submit"
      class="btn btn-primary">
      Submit
    </button>
  </div>
</form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: function() { 
    return {
      name: null,
      email: null,
      age: 1,
      emailError: "",
      ageError: ""
    }
  },
  methods:{
    checkEmail: function () {
      const emailRequiredError = 'Email required.';
      const emailFormatError = 'Email is not in the correct format.';
      const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

      document.getElementById("email").classList.remove("is-invalid");
      document.getElementById("email").classList.remove("is-valid");

      if (!this.email) {
        this.emailError = emailRequiredError;
        document.getElementById("email").classList.add("is-invalid");
      } else if (!emailRegex.test(this.email)) {
        this.emailError = emailFormatError;
        document.getElementById("email").classList.add("is-invalid");
      } else {
        document.getElementById("email").classList.add("is-valid");
      }
    },
    checkAge: function() {
      const minAgeError = 'You need to be 18 or older to use this service.';

      document.getElementById("age").classList.remove("is-invalid");
      document.getElementById("age").classList.remove("is-valid");

      if (this.age < 18) {
        this.ageError = minAgeError;
        document.getElementById("age").classList.add("is-invalid");
      } else {
        document.getElementById("age").classList.add("is-valid");
      }
    }
  },
  watch: {
    email: function() {
      this.checkEmail();
    },
    age: function() {
      this.checkAge();
    }, 
    name: function() {
      document.getElementById("name").parentElement.classList.add("was-validated");
    }
  }
}
</script>

<style scoped>
#button-container {
  float: left;
  width: 100%;
}
</style>
