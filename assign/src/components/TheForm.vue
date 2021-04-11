<template>
<div>
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-brand" href="#">Welcome</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" :class="{ 'active': currentTab == 1 }" href="#">
              Personal Info <span class="sr-only">(current)</span></a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              :class="{'active': currentTab == 2 }"
              href="#"
            >
              Account Info
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link disabled"
              :class="{ 'active': currentTab == 3 }"
              href="#"
            >
              Contact Details
            </a>
          </li>
        </ul>
      </div>
    </nav>
    <ValidationObserver v-slot="{ handleSubmit }">
  <form @submit.prevent="handleSubmit(updateTabP)">
    <!-- Personal details -->
            <fieldset v-if="currentTab === 1">
         <ValidationProvider name="Name" rules="required|alpha" v-slot="{ errors }">
      <div class="form-group">
         
        <label for="name"> Name </label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="details.name"
          placeholder=""
        />
        <span>{{ errors[0] }}</span>
      </div>
      </ValidationProvider>

 <ValidationProvider name="Hobbies" rules="required" v-slot="{ errors }">
      <div class="form-group">
        <label> Hobby: </label>
        <div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox" value="Sports" name="hobby" v-model="details.hobbies" >
    </div>
  </div>
  <input type="text" class="form-control" disabled value="Sports">
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox" value="Cultural" name="hobby" v-model="details.hobbies">
    </div>
  </div>
  <input type="text" class="form-control" disabled  value="Cultural" >
</div>
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="input-group-text">
      <input type="checkbox" value="SocialWork" name="hobby" v-model="details.hobbies" >
    </div>
  </div>
  <input type="text" class="form-control" disabled  value="Social-Work" >
</div>
<span>{{ errors[0] }}</span>
      </div>
 </ValidationProvider>
  <ValidationProvider name="Gender" rules="required" v-slot="{ errors }">
      <div class="form-group">
        <div class="input-group-prepend">
          <div class="input-group-text">
            <label for="gender"> Male: </label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              v-model="details.gender"
              aria-label="Radio button for following text input"
            />
          </div>
          <div class="input-group-text">
            <label for="gender"> Female: </label>
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              v-model="details.gender"
              aria-label="Radio button for following text input"
            />
          </div>
        </div>
        <span>{{ errors[0] }}</span>
      </div>
       </ValidationProvider>
      <!-- <div class="form-group">
        <label> Birth-Date </label>
       
        <flat-pickr v-model="details.bod"></flat-pickr>
      </div> -->
        <ValidationProvider name="Birthdate" rules="required" v-slot="{ errors }">
      <div class="form-group">
        <label> Birth-Date </label>
        <datepicker v-model="details.bod"></datepicker>
        <span>{{ errors[0] }}</span>
      </div>
        </ValidationProvider>
       <ValidationProvider name="State" rules="required" v-slot="{ errors }"> 
      <div class="form-group">
        <label for="state"> State </label>
        <select class="form-control" id="state" v-model="details.state">
          <option>Gujrat</option>
          <option>Maharashtra</option>
          <option>Punjab</option>
          <option>Rajasthan</option>
          <option>MadhyaPradesh</option>
        </select>
        <span>{{ errors[0] }}</span>
      </div>
       </ValidationProvider>
<ValidationProvider name="address" rules="required" v-slot="{ errors }">
      <div class="form-group">
        <label for="address"> Address </label>
        <textarea
          class="form-control"
          id="address"
          rows="3"
          v-model="details.address"
        ></textarea>
        <span style="color : red">{{ errors[0] }}</span>
      </div>
</ValidationProvider>
            </fieldset>
    <!-- Account details -->
    
    
        <fieldset v-else-if="currentTab === 2">
        <ValidationProvider name="Bank name" rules="required|alpha" v-slot="{ errors }">
      <div class="form-group">
        <label for="bname"> Bank Name </label>
        <input
          type="text"
          class="form-control"
          v-model="details.bName"
          id="bname"
          placeholder=""
        />
        <span>{{ errors[0] }}</span>
      </div>
        </ValidationProvider>
        <ValidationProvider name="Branch name" rules="required|alpha" v-slot="{ errors }">
      <div class="form-group">
        <label for="brname"> Branch Name </label>
        <input
          type="text"
          class="form-control"
          v-model="details.brName"
          id="brname"
          placeholder=""
        />
        <span>{{ errors[0] }}</span>
      </div>
        </ValidationProvider>
    <ValidationProvider name="Account number" :rules="{required,regex:/^[0-9]*$/ }" v-slot="{ errors }">
      <div class="form-group">
        <label for="acnum"> Account Number </label>
        <input
          type="text"
          class="form-control"
          v-model="details.accNum"
          id="acnum"
          placeholder=""
        />
        <span>{{ errors[0] }}</span>
      </div>
    </ValidationProvider>
        </fieldset>
    <!--  Contact Details -->
            <fieldset v-else-if="currentTab === 3">
         <ValidationProvider name="Email" rules="required|email" v-slot="{ errors }">
      <div class="form-group">
        <label for="email"> Email address </label>
        <input
          type="email"
          class="form-control"
          id="email"
          v-model="details.email"
          placeholder="name@example.com"
        />
        <span>{{ errors[0] }}</span>
      </div>
         </ValidationProvider>
         <ValidationProvider name="PhoneNumber"  :rules="{required, regex:/^[789]\d{9}$/ }" v-slot="{ errors }">
      <div class="form-group">
        <label for="phnum"> Phone Number </label>
        <input
          type="text"
          v-model="details.phNum"
          class="form-control"
          id="phnum"
        />
        <span>{{ errors[0] }}</span>
      </div>
         </ValidationProvider>
            </fieldset>
        
   
<!-- form buttons -->

    <section  class="btn">
      <button
        v-if="currentTab > 1"
        @click="updateTabM()"
        type="button"
        class="btn btn-secondary"
      >
        Prev
      </button>
      <button
       
        type="submit"
        class="btn btn-secondary"
      >
        Next
      </button>
      <!-- <button
        v-if="currentTab == 3"
      
        type="submit"
        class="btn btn-secondary"
      >
        Submit
      </button> -->
    </section>
  </form>
</ValidationObserver>
</div>
</template>

<script>
 import Datepicker from 'vuejs-datepicker';
 export default {
components :{
 Datepicker,
},
  data() {
    return {
      details: {
        name: "",
        address: "",
        email: "",
        gender: "",
        state: "",
        bName: "",
        brName: "",
        accNum: "",
        phNum: "",
        bod: null,
        hobbies:[],
      },
      currentTab: 1,
      TotalTab: 3,
      isShow : false,
    };
  },
  methods: {
    updateTabP() {
        if(this.currentTab==3){
             this.isShow =true;
      this.$emit('save-data',this.details,this.isShow);
      this.currentTab=0;
       this.details.name ="";
       this.details.address = "" ;
        this.details.email = "";
        this.details.gender = "";
        this.details.state = "";
        this.details.bName = "";
        this.details.brName = "";
        this.details.accNum = "";
        this.details.phNum = "";
        this.details.bod = null;
        return;
        }
        
            this.currentTab += 1;
        
    },
    updateTabM() {
      this.currentTab -= 1;
    },
    submitData() {
      this.isShow =true;
      this.$emit('save-data',this.details,this.isShow);
      this.currentTab=0;
       this.details.name ="";
       this.details.address = "" ;
        this.details.email = "";
        this.details.gender = "";
        this.details.state = "";
        this.details.bName = "";
        this.details.brName = "";
        this.details.accNum = "";
        this.details.phNum = "";
        this.details.bod = null;
    },
  },
};
</script>

<style scoped>
.form-group {
  box-sizing: border-box;
  margin: 10px 50px 10px 50px;
}
.input-group-text {
  margin-right: 20px;
}

nav {
  background: rgb(85, 14, 136);
}
.navbar .navbar-brand
{
  color: white;
}
.navbar .navbar-nav li a {
 color: white !important;
}
.navbar .navbar-nav li a.active{
    background: white !important;
    color: rgb(85, 14, 136)  !important ;
}
.btn{
    margin-left: 20px;
}
.btn > button{
background:rgb(85, 14, 136)  !important ;
    color:white !important ;
    border : none;
    border-radius: 5px;   
    margin-left: 15px;
    margin-right: 10px;
}
.form-group span{
    color : red;
}
</style>
