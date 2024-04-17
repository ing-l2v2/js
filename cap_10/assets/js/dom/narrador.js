const d = document,
  w = window;
export default function speechReader(params) {
  const $speechSelect = d.getElementById("speech-select"),
    $speechText = d.getElementById("speech-text"),
    $speechBtn = d.getElementById("speech-btn"),
    speechMessage = new SpeechSynthesisUtterance();

  let voces = [];
  //w.speechSynthesis.getVoices();
  d.addEventListener("DOMContentLoaded", (e) => {
    w.speechSynthesis.addEventListener("voiceschanged", (e) => {
      voces = w.speechSynthesis.getVoices();
      voces.forEach((voz) => {
        const opcion = d.createElement("option");
        opcion.value = voz.name;
        opcion.textContent = `${voz.name} *** ${voz.lang}`;
        $speechSelect.insertAdjacentElement("beforeend", opcion);
      });
    });
  });

  d.addEventListener("change", (e) => {
    if (e.target === $speechSelect) {
      speechMessage.voice = voces.find((voz) => voz.name === e.target.value);
    }
  });

  d.addEventListener("click", (e) => {
    if (e.target === $speechBtn) {
      speechMessage.text = $speechText.value;
      w.speechSynthesis.speak(speechMessage);
    }
  });
}
