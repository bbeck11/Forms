// JavaScript code for form validation
    
let myForm = document.getElementById("myForm");

	// Prevent form from submitting
  myForm.addEventListener('submit', (event) => {
    // Retrieve the input field value
    let inputField = document.getElementById("inputField");
    // Regular expression pattern for alphanumeric input
    let validInput = /^[a-zA-Z0-9]+$/;
    // Check if the input value matches the pattern
    if(validInput.test(inputField.value)){
      // Valid input: display confirmation and submit the form
      window.alert("Sucessfull submission");
    }
    else{
      // Invalid input: display error message
      event.preventDefault();
      window.alert("Text Box must contain only letters and numbers");
    }

  })

     

      

      

        

        