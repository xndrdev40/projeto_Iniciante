var imgAtual = "./assets/imagem-preview.png"
var imgAnterior = "./assets/imagem-sofa-girando.gif"

var imgIcone = "./assets/Vector.png"
var imgAoGirar = "./assets/Vector-Stroke.png"

function trocar() {
  document.getElementById("figura").src = imgAtual
  let aux = imgAtual
  imgAtual = imgAnterior
  imgAnterior = aux

  document.getElementById("figura-dois").src = imgIcone
  let auxdois = imgIcone
  imgIcone = imgAoGirar
  imgAoGirar = auxdois
 
}
