// const key = "db7cc126-3319-4252-afc7-8db88b40c8f8";
const SecureToken = "d4c174b5-3612-4325-a54d-bf60d116aa6f"; //465
const SecureToken2 = "9a07a771-5a21-4f5a-943f-99ac82728e9d"; //587

const submit = document.getElementById("submit");

submit.addEventListener("click", async () => {
  const email = document.querySelector("#email").value;
  const name = document.querySelector("#name").value ?? '';
  const surname = document.querySelector("#surname").value ?? '';
  if(!email || !name || !surname) return;

  
  const res = await fetch(
    `https://mailapi.vercel.app/api/send-mail?email=${email}&name=${name}&surname=${surname}`
  );
  const data = await res.json();
});
