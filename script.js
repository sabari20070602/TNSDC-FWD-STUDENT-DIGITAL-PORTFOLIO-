document.getElementById("contactForm").addEventListener("submit", function(event) {

  event.preventDefault();

  let name = document.getElementById("name").value;

  let email = document.getElementById("email").value;

  let message = document.getElementById("message").value;

  document.getElementById("formResponse").innerText =

    "Thank you, " + name + "! Your message has been received.";

    

  // Reset form fields

  document.getElementById("contactForm").reset();

});