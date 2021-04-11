<template>
  <section class="container">
    <user-data :firstName="fName" :lastName="lName"></user-data>
    <button @click="changeAge">change Age</button>
    <div>
      <input type="text" placeholder="FirstName" v-model="fName" />
      <input type="text" placeholder="LastName" ref="lastNameInput" />
      <button @click="setLastName">Set Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';
export default {
  components: { UserData },
  setup() {
    //const uName = ref('Aayushi');
    const uAge = ref(21);
    const lastNameInput = ref(null);
    const fName = ref('');
    const lName = ref('');

    // const user = reactive({
    //   uName: 'Aayushi',
    //   uAge: 21,
    // });
    provide('userAge', uAge);

    const uName = computed(function () {
      return fName.value + ' ' + lName.value;
    });

    watch([uName, uAge], function (newVal, oldVal) {
      console.log(oldVal[0], newVal[0]);
      console.log(oldVal[1], newVal[1]);
    });

    function changeAge() {
      uAge.value = 22;
    }
    function firstName(event) {
      fName.value = event.target.value;
    }

    function lastName(event) {
      lName.value = event.target.value;
    }
    function setLastName() {
      lName.value = lastNameInput.value.value;
    }

    // setTimeout(() => {
    //   user.uName = 'aayu';
    //   user.uAge = 22;
    // }, 2000);

    // setTimeout(() => {
    //   uName.value = 'aayu';
    //   uAge.value = 22;
    // }, 2000);

    //return { userName: uName, userAge: uAge };
    return {
      uName,
      setLastName,
      uAge,
      changeAge,
      fName,
      lName,
      firstName,
      lastName,
      lastNameInput,
    };
  },
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //     age: 21,
  //   };
  // },
  // methods: {
  //   changeAge() {
  //     this.age = 23;
  //   },
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>
