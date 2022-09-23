$(document).ready(function(){
  $("#signup").validate({
    rules: {
      fname: {
        required: true,
        minlength:3,
        lettersonly: true
      },
      
      lname: {
        required: true,
        minlength:1,
        lettersonly: true
      },
     
      gender: {
        required: true
      },
       
      email: {
        required: true,
        email: true
      },
 
      password: {
        required: true,
        minlength:5
      },
  
      number: {
        required: true,
        numericonly: true,
        minlength: 10,
        maxlength: 12
      },  

      lang: {
        required: true
      },

      agree: {
        required: true
      }
     },

     messages: {
       fname: {
         required: "Please enter your name",
         minlength: "Must contain atleast 3 characters",
         lettersonly: "Invalid name"
       },
    
      lname: {
         required: "Please enter your last name",
         minlength: "Must contain atleast 1 characters",
         lettersonly: "Invalid name"
       },
       gender: {
         required: "Please enter your gender"
       },

       email: {
         required: "Please enter your email",
         email: "Enter a valid email"
       },
  
       password: {
          required: "Please enter your password",
          minlength: "Must be atleast 5 characters"
        },

        number: {
          required: "Please enter Phone no.",
          numericonly: "Phone no. is invalid",
          minlength: "Minimum 10 digits",
          maxlength: "Maximum 12 digits"
        },

        lang: {
          required: "Please select your language"
        },

        agree: {
          required: "Please mark agree"
        }
       },
       
       errorPlacement: function(error, element){
          if(element.is(":radio")){
             error.appendTo(element.parents(".gen"));
          }else{
             error.insertAfter(element);
          }
        }
    });
    
    jQuery.validator.addMethod('lettersonly',function(value,element){
       return /^[^-\s][a-zA-Z_\s-]+$/.test(value);
    });

    jQuery.validator.addMethod('numericonly',function(value,element){
       return /^[0-9]+$/.test(value);
    });
}); 

