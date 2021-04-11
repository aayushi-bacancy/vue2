<template>
  <form @submit.prevent="register">
    <div class="form-group">
      <input type="text" id="fname" name="fname" v-model="fname" />
      <label for="fname">First Name</label>
    </div>
    <div class="form-group">
      <input type="text" id="lname" name="lname" v-model="lname" />
      <label for="lname">Last Name</label>
    </div>
    <div class="form-group">
      <textarea
        name="area"
        id="area"
        cols="10"
        rows="5"
        v-model="address"
      ></textarea>
      <label for="area">Address</label>
    </div>
    <div class="form-group">
      <div>
        <input type="radio" value="male" id="male" v-model="gender" />
        <label for="male">Male</label>
      </div>
      <div>
        <input type="radio" value="female" id="female" v-model="gender" />
        <label for="female">Female</label>
      </div>
    </div>
    <div class="form-group">
      <div>
        <button>submit</button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fname: '',
      lname: '',
      address: '',
      gender: ''
    };
  },
  methods: {
    register() {
      const data = {
        firstName: this.fname,
        lastName: this.lname,
        address: this.address,
        gender: this.gender
      };
      this.$store.dispatch('regData', data);
      this.$router.replace('/show');
    }
  }
};
</script>

<style scoped></style>
