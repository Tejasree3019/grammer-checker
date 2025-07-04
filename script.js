function redirectToLanguageTool() {
  const text = document.getElementById("essayInput").value.trim();
  if (!text) {
    alert("Please enter some text before checking.");
    return;
  }

  const encodedText = encodeURIComponent(text);
  const language = "en-US"; // or other supported codes
  const url = https://languagetool.org/?text=${encodedText}&language=${language};

  window.open(url, "_blank");
}