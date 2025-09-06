document.querySelector(".signup-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const res = await fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const msg = await res.text();
  alert(msg);
});

document.querySelector(".login-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = e.target.email.value;
  const password = e.target.password.value;

  const res = await fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  });

  const msg = await res.text();
  alert(msg);
  if (res.ok) {
    window.location.href = "dashboard.html";
  }
});
