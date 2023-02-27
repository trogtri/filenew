$("#myform").validate({
    rules:{
        fullname:{
            minlength: 2
        }

    },
    messages: {
        required: "Please enter your name  ",
        minlength: "name at least 2 characters"
      },
    
    submitHandler: function(form) {
      form.submit();
    }
   });