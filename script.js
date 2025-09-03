// =========================
// Contact Form Handling
// =========================
const contactForm = document.getElementById("contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const msg = document.getElementById("form-message");

    msg.textContent = "✅ Your message has been sent!";
    msg.style.color = "green";

    this.reset();

    setTimeout(() => {
      msg.textContent = "";
    }, 4000);
  });
}
