<template>
  <div class="container">
        <div class="card" style="width: 40rem;">
            <div class="card-header">
                <h4>Candidate Registraion Form</h4>
            </div>
            <div class="card-body">
                        <form-wizard @on-complete="addCandidate" shape="tab" class="form" color="#9b59b6"
                            back-button="Back"
                            next-button="Next"
                            finish-button="Submit"
                            error-color="#dc3545">
                            <tab-content title="Personal information" :before-change="validateFirstTab" >
                                <vue-form-generator :model="candidate" 
                                    :schema="firstTabSchema"
                                    :options="formOptions"
                                    ref="firstTabForm"
                                    color="errorColor"
                                    >        
                                </vue-form-generator>
                                
                            </tab-content>
                            <tab-content title="Salary and Mobile Information" :before-change="validateSecondTab">
                                <vue-form-generator :model="candidate" 
                                    :schema="secondTabSchema"
                                    :options="formOptions"
                                    ref="secondTabForm"
                                    >        
                                </vue-form-generator>
                            </tab-content>
                            <tab-content title="Experience and Skils" :before-change="validateThirdTab">
                                <vue-form-generator :model="candidate" 
                                    :schema="thirdTabSchema"
                                    :options="formOptions"
                                    ref="thirdTabForm"
                                    >        
                                </vue-form-generator>
                            </tab-content>
                        </form-wizard>
            </div>
        </div>
    </div>
</template>

<script>
import VueFormGenerator from 'vue-form-generator';
export default {
  
  data() {
      
    return {
        candidate:{
            firstName:'',
            lastName:'',
            email:'',
            mobileNumber:'',
            currentCTC:'',
            expectedCTC:'',
            experience:'',
            skills:'',
            address:'',
        },
        formOptions:{
            validationErrorClass: "has-error",
            validationSuccessClass: "has-success",
            validateAfterChanged: true,
            
        },
        firstTabSchema:{
            fields:[
                {
                    type: "input",
                    inputType: "text",
                    label: "First name",
                    model: "firstName",
                    placeholder:"First Name",
                    id:"firstName",
                    required:true,
                    validator:VueFormGenerator.validators.string,
                    styleClasses:'col-xs-6',
                },
                {
                    type: "input",
                    inputType: "text",
                    label: "Last name",
                    model: "lastName",
                    placeholder:"Last Name",
                    required:true,
                    validator:VueFormGenerator.validators.string,
                    styleClasses:'col-xs-6'
                },
                {
                    type: "input",
                    inputType: "email",
                    label: "Email",
                    model: "email",
                    placeholder:"Email",
                    required:true,
                    validator:VueFormGenerator.validators.email,
                    styleClasses:'col-xs-12'
                }
            ]
        },
        secondTabSchema:{
            fields:[
                {
                    type:"input",
                    inputType:"number",
                    label:"Mobile Number",
                    model:"mobileNumber",
                    placeholder:"Mobile Number",
                    required:true,
                    validator:VueFormGenerator.validators.number,
                    styleClasses:'col-xs-12'
                },
                {
                    type:"input",
                    inputType:"number",
                    label:"Current CTC",
                    model:"currentCTC",
                    placeholder:"Current CTC",
                    required:true,
                    validator:VueFormGenerator.validators.number,
                    styleClasses:'col-xs-12'
                },
                {
                    type:"input",
                    inputType:"number",
                    label:"Expected CTC",
                    model:"expectedCTC",
                    placeholder:"Expected CTC",
                    required:true,
                    validator:VueFormGenerator.validators.number,
                    styleClasses:'col-xs-12'
                }
            ]
        },
        thirdTabSchema:{
            fields:[
                {
                    type:"input",
                    inputType:"number",
                    label:"Experience",
                    model:"experience",
                    placeholder:"Experience",
                    required:true,
                    validator:VueFormGenerator.validators.number,
                    styleClasses:'col-xs-12'
                },
                {
                    type:"input",
                    inputType:"text",
                    label:"Skills",
                    model:"skills",
                    placeholder:"Skills",
                    required:true,
                    validator:VueFormGenerator.validators.string,
                    styleClasses:'col-xs-12'
                },
                {
                    type:"input",
                    inputType:"text",
                    label:"Address",
                    model:"address",
                    placeholder:"Address",
                    required:true,
                    validator:VueFormGenerator.validators.string,
                    styleClasses:'col-xs-12'
                },
            ]
        },
    }
  },
 
  methods: { 
       
        addCandidate:function() {
           let apiUrl = 'http://localhost:4000/api/candidates';
            this.axios.post(apiUrl, this.candidate)
            .then(response => console.log(response.data))
            .catch(error=>console.log(`something is happend please check bellow code`,error));
        },
         validateFirstTab: function(){
            return this.$refs.firstTabForm.validate();
         },
         validateSecondTab: function(){
            return this.$refs.secondTabForm.validate();
         },
         validateThirdTab: function(){
            return this.$refs.thirdTabForm.validate();
         },
         
        
    }
}
</script>

<style>
.wizard-header {
        display: none;
}

.container {
    display: flex;
    justify-content: center;
    flex-direction: row; 
}



</style>