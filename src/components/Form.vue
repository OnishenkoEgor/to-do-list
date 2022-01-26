<template>
  <form @submit.prevent>
    <div class="row">
      <div class="input-field col s5">
        <input
          placeholder="Deal title"
          name="deal_title"
          type="text"
          class="validate"
          v-model="title"
          ref="title"
          :class="title == '' && !formValidate ? 'invalid' : ''"
        />
      </div>
      <div class="input-field col s3">
        <input
          id="deal_deadline"
          type="date"
          class="validate"
          v-model="deadline"
          ref="date"
          :class="deadline == '' && !formValidate ? 'invalid' : ''"
        />
      </div>
      <div class="input-field col s4">
        <select
          id="deal-form-select"
          name="deal_important"
          class="browser-default"
          v-model="important"
          ref="important"
          :class="important == '' && !formValidate ? 'invalid' : ''"
        >
          <option value="" disabled selected>Choose importance of deal</option>
          <option value="Not urgent">Not urgent</option>
          <option value="Normal">Normal</option>
          <option value="Immediately">Immediately</option>
        </select>
      </div>
      <div class="input-field col s12">
        <input
          placeholder="Short description"
          name="short_description"
          type="text"
          class="validate"
          v-model="shortDesc"
          ref="short_desc"
          :class="shortDesc == '' && !formValidate ? 'invalid' : ''"
        />
      </div>
      <div class="input-field col s12">
        <textarea
          class="materialize-textarea"
          placeholder="Description"
          v-model="fullDesc"
          ref="desc"
          :class="fullDesc == '' && !formValidate ? 'invalid' : ''"
        ></textarea>
      </div>
      <button
        class="btn waves-effect col s3"
        type="submit"
        name="action"
        @click="submitHandler"
      >
        Add deal
      </button>
    </div>
    <div v-show="!formValidate" class="message">
      <div class="card-panel teal lighten-2">Not all fields are filled</div>
    </div>
  </form>
</template>

<script>
import { ref } from "@vue/reactivity";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      formValidate: true,
      title: "",
      shortDesc: "",
      deadline: "",
      important: "",
      fullDesc: "",
    };
  },
  methods: {
    ...mapMutations({
      addDeal: "dealsStore/addDeal",
    }),
    submitHandler() {
      this.validateForm();
      if (this.formValidate) {
        let { title, shortDesc, deadline, important, fullDesc } = this;
        this.addDeal({ title, shortDesc, deadline, important, fullDesc });
        this.title = "";
        this.shortDesc = "";
        this.deadline = "";
        this.fullDesc = "";
      }
    },
    validateForm() {
      let refsArray = Object.entries(this.$refs);
      let values = refsArray.filter((ref) => {
        return ref[1].value !== "";
      });
      this.formValidate = values.length === refsArray.length ? true : false;
    },
  },
};
</script>

<style lang="scss" scoped>
textarea {
  height: 100px;
}
.invalid {
  border-bottom-color: red;
}
.message {
  color: #fff;
}
</style>