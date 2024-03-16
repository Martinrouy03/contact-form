document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("form").addEventListener("submit", async (e) => {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const suj = document.getElementById("subject").value;
    const message = document.querySelector("textarea").value;

    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      subject: suj,
      message: message,
    };
    console.log(data.subject);
    const resp = await axios.post("http://localhost:3000/form", data);
    console.log(resp);
  });
});
