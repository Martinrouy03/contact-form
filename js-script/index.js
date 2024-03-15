document.addEventListener("DOMContentLoaded", () => {
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const email = document.getElementById("email").value;
  const suj = document.getElementById("subject").value;
  const message = document.querySelector("textarea").value;

  const submit = document.getElementById("submit");
  console.log(submit);
  submit.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Hello");
  });
});
