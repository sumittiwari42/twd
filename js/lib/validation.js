// Wait for the DOM to be ready
$(function() {


            // Get A Quote Form Start
            $("#register").validate({
                ignore: ".ignore",
                // Specify validation rules
                rules: {
                    // The key name on the left side is the name attribute
                    // of an input field. Validation rules are defined
                    // on the right side
                    'name[0]': {
                        required: true,
                        //lettersonly: true
                    },
                    'phone[0]': {
                        required: true,
                        digits: true,
                        maxlength:15,
                        minlength: 6,
                    },
                    email: {
                        required: true,
                        email: true
                    }

                },

                // Specify validation error messages
                messages: {
                    'name[0]':{
                        required: "Please Enter Your Name",
                        
                    },
                    
                    'phone[0]': {
                       required: "Please Enter Contact No.",
                        digits: "Please enter only digits"
                    },
                    email: "Please Enter a Valid Email Address"
                    
                },
                // Make sure the form is submitted to the destination defined
                // in the "action" attribute of the form when valid
                submitHandler: function(form) {
                    form.submit();
                }
            });
            
            // Contact Form End

});