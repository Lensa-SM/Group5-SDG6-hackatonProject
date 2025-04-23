document.addEventListener("DOMContentLoaded", () => {
    const logButton = document.querySelector("button");
    if (logButton) {
      logButton.addEventListener("click", logSample);
    }
  });
  
  function logSample() {
    const date = document.getElementById("date").value;
    const source = document.getElementById("source").value;
    const location = document.getElementById("location").value;
    const ph = parseFloat(document.getElementById("ph").value);
    const turbidity = parseFloat(document.getElementById("turbidity").value);
    const resultBox = document.getElementById("resultBox");
  
    if (!date || !source || !location || isNaN(ph) || isNaN(turbidity)) {
      resultBox.innerText = "⚠️ Please fill in all fields.";
      resultBox.style.display = "block";
      return;
    }
  
    const status = (ph >= 6.5 && ph <= 8.5 && turbidity <= 5) ? "✅ Good" : "⚠️ Poor";
    resultBox.innerText = status.includes("Good")
      ? "✅ Water is Good"
      : "⚠️ Water may be unsafe. Contact mentioned NGOs";
    resultBox.style.display = "block";
  
    const row = `<tr>
      <td>${date}</td>
      <td>${source}</td>
      <td>${location}</td>
      <td>${ph}</td>
      <td>${turbidity}</td>
      <td>${status}</td>
    </tr>`;
    document.querySelector("#samplesTable tbody").innerHTML += row;
  
    clearFormFields();
  }
  
  function clearFormFields() {
    document.getElementById("date").value = "";
    document.getElementById("source").value = "";
    document.getElementById("location").value = "";
    document.getElementById("ph").value = "";
    document.getElementById("turbidity").value = "";
  }
  