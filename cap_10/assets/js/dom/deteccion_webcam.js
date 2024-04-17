const d = document,
  n = navigator;
export default function webCam(idVideo) {
  const $video = d.getElementById(idVideo);
  if (n.mediaDevices.getUserMedia) {
    n.mediaDevices
      .getUserMedia({ video: { width: 800, height: 600 }, audio: false })
      .then((stream) => {
        console.log(stream);
        $video.srcObject = stream;
        $video.play();
        //$video.src = window.URL.createObjectURL(stream);
        //$video.onloadedmetadata = function (e) {          $video.play();        };
      })
      .catch((error) => {
        $video.insertAdjacentHTML(
          "beforebegin",
          `<p><mark>Sucedio el error! ${error}</mark></p>`
        );
      });
  }
}
