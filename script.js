let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrTxt = document.getElementById("qrText");

function GenerateQrCode() {
  if (qrTxt.value == "") {
    alert("Please write something");
  }
  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrTxt.value}`;
  imgBox.classList.add("show-img");
}
