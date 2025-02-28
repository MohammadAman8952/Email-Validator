const email = document.getElementById("email");
const para = document.getElementById("message");

function validateEmail(){  
  let emailValue = email.value.trim(); 

  if (emailValue === "") {
    para.innerText = "✖ Please enter an email"
    para.className="invalid"
    return;
  }
  
  if (emailValue.includes(" ")) {
    para.innerText = "✖ Spaces are not allowed in an email";
    para.className="invalid"
    return;
  }
  let emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    
  if (!emailPattern.test(emailValue)) {
      para.innerText = "✖ Invalid Email, must be a Gmail address (example@gmail.com)";
      para.className = "invalid";
      return;
  }
  para.innerText = " ✔ Valid Gmail";
  para.className="valid"
 
  
};
email.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
      validateEmail();
      email.value="";
          
  }
  });



 
