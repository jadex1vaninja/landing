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
