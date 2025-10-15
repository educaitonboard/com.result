document.getElementById("resultForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const roll = document.getElementById("roll").value.trim();
  const reg = document.getElementById("reg").value.trim();
  const captcha = document.getElementById("captcha").value.trim();

  if (roll === "102639" && reg === "2068289396" && captcha === "6") {
    window.location.href = "result.html";
  } else {
    alert("❌ Result Not Found! Please check your Roll or Reg No.");
  }
});
