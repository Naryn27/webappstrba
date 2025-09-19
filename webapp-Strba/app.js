document.getElementById("kontaktForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const meno = document.getElementById("meno").value.trim();
    const email = document.getElementById("email").value.trim();
    const sprava = document.getElementById("sprava").value.trim();
    const errorMsg = document.getElementById("errorMsg");
  
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (meno === "" || email === "" || sprava === "") {
      errorMsg.textContent = "Prosím, vyplň všetky polia.";
    } else if (!emailRegex.test(email)) {
      errorMsg.textContent = "Zadaj platný email.";
    } else {
      errorMsg.textContent = "";
      alert(`Ďakujem za správu, ${meno}! Ozvem sa ti na ${email}.`);
      this.reset(); 
    }
  });
  