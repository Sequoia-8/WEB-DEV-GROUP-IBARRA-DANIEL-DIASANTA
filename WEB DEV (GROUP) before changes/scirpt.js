document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenuBtn.addEventListener("click", () => mobileMenu.classList.toggle("active"));

  // Smooth scrolling
  const links = document.querySelectorAll("nav a, #mobileMenu a");
  links.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const sectionId = link.getAttribute("href").substring(1);
      document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
      if(mobileMenu.classList.contains("active")) mobileMenu.classList.remove("active");
    });
  });

  // Ride form toggle
  const findInput = document.getElementById("find");
  const offerInput = document.getElementById("offer");
  const findForm = document.getElementById("findRideForm");
  const offerForm = document.getElementById("offerRideForm");

  findInput.addEventListener("change", () => { findForm.style.display="block"; offerForm.style.display="none"; });
  offerInput.addEventListener("change", () => { findForm.style.display="none"; offerForm.style.display="block"; });

  // Modals
  const signInBtns = [document.getElementById("signInBtn"), document.getElementById("signInBtnMobile")];
  const signUpBtns = [document.getElementById("signUpBtn"), document.getElementById("signUpBtnMobile")];
  const signInModal = document.getElementById("signInModal");
  const signUpModal = document.getElementById("signUpModal");

  signInBtns.forEach(btn => btn.addEventListener("click", () => signInModal.style.display="flex"));
  signUpBtns.forEach(btn => btn.addEventListener("click", () => signUpModal.style.display="flex"));

  document.getElementById("closeSignIn").addEventListener("click", () => signInModal.style.display="none");
  document.getElementById("closeSignUp").addEventListener("click", () => signUpModal.style.display="none");
  window.addEventListener("click", e => {
    if(e.target===signInModal) signInModal.style.display="none";
    if(e.target===signUpModal) signUpModal.style.display="none";
  });
});
