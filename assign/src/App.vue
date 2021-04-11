<template>
  <div>
    <the-form v-if="!isShow" @save-data="saveData"></the-form>
    <div v-if="isShow">
      <show-details
        v-for="detail in details"
        :key="detail.id"
        :detail="detail"
      ></show-details>
    </div>
    <button v-if="isShow" @click="gotoForm()">GoTo Form</button>
  </div>
</template>

<script>
import TheForm from "./components/TheForm.vue";
import ShowDetails from "./components/ShowDetails.vue";
export default {
  data() {
    return {
      details: [],
      isShow: false,
    };
  },
  components: {
    TheForm,
    ShowDetails,
  },
  methods: {
    saveData(details, isShow) {
      this.isShow = isShow;
      const detail = {
        id: new Date().toISOString(),
        name: details.name,
        address: details.address,
        gender: details.gender,
        state: details.state,
        bankName: details.bName,
        branchName: details.brName,
        accountNum: details.accNum,
        phoneNum: details.phNum,
        birthDate: details.bod,
        hobbies: details.hobbies,
      };
      this.details.push(detail);
    },
    gotoForm() {
      this.isShow = false;
    },
  },
};
</script>

<style>
* {
  font-family: Georgia, "Times New Roman", Times, serif;
}
body {
  box-sizing: border-box;
}

button {
  background: rgb(85, 14, 136);
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 47%;
}
</style>
