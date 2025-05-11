document.getElementById("confess-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);

  const data = new URLSearchParams();
  formData.forEach((value, key) => {
    data.append(key, value);
  });

  // Zufälliger Code zur Identifikation
  const code = "code-" + Math.floor(Math.random() * 1000000);
  data.append("code", code);

  try {
    const response = await fetch("https://script.google.com/macros/s/AKfycbwUvA-4eHGaZM3Zl8l8ybjC-JNq9IKcoo1AxYBCZtJADbKXisi9HQ6QMHNSBla4Jfw5pw/exec", {
      method: "POST",
      body: data
    });

    const text = await response.text();

    if (text.includes("OK")) {
      alert("Danke! Dein Code ist: " + code);
    } else {
      alert("Es gab ein Problem: " + text);
    }
  } catch (err) {
    console.error(err);
    alert("Die Verbindung zum Server ist fehlgeschlagen.");
  }
});
