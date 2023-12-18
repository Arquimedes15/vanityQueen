//FOTOS
var Fotos = [];
class Foto {
    constructor(direcionURL, descripcion) {
        this.direcion = direcionURL;
        this.descripcion = descripcion;
    }
}
Fotos.push(new Foto("jjs/Fotos/p1.jpg", "Una breve descripcion de la imagen"));
Fotos.push(new Foto("jjs/Fotos/img0.jpeg", "Una breve descripcion de la imagen"));
Fotos.push(new Foto("jjs/Fotos/img1.jpeg", "Una breve descripcion de la imagen"));
Fotos.push(new Foto("jjs/Fotos/img2.jpeg", "Una breve descripcion de la imagen"));
Fotos.push(new Foto("jjs/Fotos/img3.jpeg", "Una breve descripcion de la imagen"));
Fotos.push(new Foto("jjs/Fotos/img4.jpg", "Una breve descripcion de la imagen"));
Fotos.push(new Foto("jjs/Fotos/img5.jpeg", "Una breve descripcion de la imagen"));
console.error("Salga de la consola");
var GaleriaCreada = "";
var galeriaclass = document.querySelector(".galeria-all");
var imgponer = document.querySelector("#img-poner");
function CrearGaleria() {
    for (let x = 0; x < Fotos.length; x++) {
        GaleriaCreada += `<div class="content-img"><img loading="lazy" id="foto" data-value = "${x}" src="${Fotos[x].direcion}"><div class="des"><span>${Fotos[x].descripcion}</span></div></div>`
        //GaleriaCreada = GaleriaCreada + `<img loading="lazy" id="foto" data-value = "${x}" src="${Fotos[x].direcion}">`
    }
}
var VisualFoto = false;
const visualFotosHtml = document.querySelector(".Visualizador-Fotos");
let fotoSelecionada = 0;
function VisualFotoK1() {
    if (VisualFoto) {
        visualFotosHtml.style.display = "none";
        VisualFoto = false;
    } else {
        visualFotosHtml.style.display = "block";
        VisualFoto = true;
    }
}
function cerrarVisual() {
    VisualFotoK1();
    scrollParaHtml();
}
function nextImg() {
    fotoSelecionada++;
    if (fotoSelecionada == Fotos.length) {
        fotoSelecionada = 0;
    }
    imgponer.src = Fotos[fotoSelecionada].direcion;
}
function antiIng() {
    fotoSelecionada--;
    if (fotoSelecionada < 0) {
        fotoSelecionada = Fotos.length - 1;
    }
    imgponer.src = Fotos[fotoSelecionada].direcion;
}