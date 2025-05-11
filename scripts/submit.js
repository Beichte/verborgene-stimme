document.getElementById("confess-form").addEventListener("submit", async function (e) {
  e.preventDefault();

  const data = new FormData(this);
  const body = {
    code: "xyz-" + Math.floor(Math.random() * 1000),
    typ: data.get("type"),
    religion: data.get("religion"),
    religion_freitext: data.get("religion_freitext"),
    nachricht: data.get("nachricht"),
    bezahlt: data.get("bezahlt") === "on"
  };

  const response = await fetch("https://script.google.com/macros/s/AKfycbwUvA-4eHGaZM3Zl8l8ybjC-JNq9IKcoo1AxYBCZtJADbKXisi9HQ6QMHNSBla4Jfw5pw/exec", {
    method: "POST",
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json"
    }
  });

  const result = await response.json();
  alert("Danke – dein Code ist: " + result.code);
});
