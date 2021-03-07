const constraints = {
  fname: {
    presence: true,
  },
  lname: {
    presence: true
  },
  age: {
    presence: true,
    numericality: {
      lessThan: 150,
      greaterThan: 0,
      message: "age must be less in 1-150"
    }
  },
  gender: {
    presence: true
  },
  email: {
    presence: true,
    email: true
  },
  tel: {
    presence: true,
    length: {
      minimum: 10,
      maximum: 12,
      message: "Number must be 10-12 digits"
    }
  }
}
const app = Vue.createApp({
    data() {
        return {
          fname: "Noppawit",
          lname: "Chowarun",
          position: "Full Stack Developer",
          historyWork: {
            repository: 34,
            follower: 7,
            rating: 8.2,
          },
          picSrc: "images/125862633_1094343974357474_5941258831660389040_o.jpg",
          form:{
            fname:null,
            lname:null,
            email:null,
            gender: null,
            tel: null,
            age: null,
            errors: null
          }
        };
      },
      methods: {
        checkForm(){
          this.form.errors = validate({
            fname: this.form.fname,
            lname: this.form.lname,
            age: this.form.age,
            gender: this.form.gender,
            email: this.form.email,
            tel: this.form.tel
          },constraints)

          if(!this.form.errors){
            alert('register success')
          }
        }
        
      },
});
app.mount("#app");
