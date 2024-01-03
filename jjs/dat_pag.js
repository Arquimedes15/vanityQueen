const manicura = ``;

const pagURL = ["manicura","pedicura","otrs-serv","descuentos", "cat-user-what"];

let galCr = false

function cargarPag(url){
    let pag = -1;
    for(let x = 0; x < pagURL.length; x++){
        if(url == pagURL[x]){
            pag = x;
        }
    }

    if(url == "galeria"){
        if(galCr){
            return GaleriaCreada;
        }else{
            CrearGaleria()
            return GaleriaCreada;
        }
    }

    if(pag == -1){
        return `<h3>Oh.. Parece que el sitio no existe</h3>`;
    }else{
        return html_render[pag];
    }
}

const html_render = [`

    <div class="sector1-m">
        <h3>Manicura</h3>
        <div class="content-ma">

        <div class="card-ma">
            <img src="https://www.parlors.es/wp-content/uploads/2020/12/manicura-normal2-300x300.jpg">
            <span>Manicura con esmalte normal</span>
        </div>

        <div class="card-ma">
            <img src="https://www.parlors.es/wp-content/uploads/2020/12/manicura-normal2-300x300.jpg">
            <span>Manicura con esmalte normal</span>
        </div>

        <div class="card-ma">
            <img src="https://www.parlors.es/wp-content/uploads/2020/12/manicura-normal2-300x300.jpg">
            <span>Manicura con esmalte normal</span>
        </div>

        <div class="card-ma">
            <img src="https://www.parlors.es/wp-content/uploads/2020/12/manicura-normal2-300x300.jpg">
            <span>Manicura con esmalte normal</span>
        </div>

        <div class="card-ma">
            <img src="https://www.parlors.es/wp-content/uploads/2020/12/manicura-normal2-300x300.jpg">
            <span>Manicura con esmalte normal</span>
        </div>

        <div class="card-ma">
            <img src="https://www.parlors.es/wp-content/uploads/2020/12/manicura-normal2-300x300.jpg">
            <span>Manicura con esmalte normal</span>
        </div>




        </div>
    </div>

`,

`
    <div class="sector1-p">
    <h3>Pedicura</h3>
        <div class="content-pe">
        <div class="card-p">
        <img src="https://www.parlors.es/wp-content/uploads/2020/12/pedura.con-esmailte-sempermanente-300x300.jpg">
        <span>Pedicura SPA con esmalte semipermanente</span>
    </div>
    <div class="card-p">
            <img src="https://www.parlors.es/wp-content/uploads/2020/12/pedura.con-esmailte-sempermanente-300x300.jpg">
            <span>Pedicura SPA con esmalte semipermanente</span>
        </div>
        <div class="card-p">
            <img src="https://www.parlors.es/wp-content/uploads/2020/12/pedura.con-esmailte-sempermanente-300x300.jpg">
            <span>Pedicura SPA con esmalte semipermanente</span>
        </div>
        <div class="card-p">
            <img src="https://www.parlors.es/wp-content/uploads/2020/12/pedura.con-esmailte-sempermanente-300x300.jpg">
            <span>Pedicura SPA con esmalte semipermanente</span>
        </div>
        <div class="card-p">
            <img src="https://www.parlors.es/wp-content/uploads/2020/12/pedura.con-esmailte-sempermanente-300x300.jpg">
            <span>Pedicura SPA con esmalte semipermanente</span>
        </div>
        </div>
    </div>

`,
`
    <div class="sector1-p"><h3>NADA AUN</h3></div>
`,
`
    <div class="sector1-p"><h3>Descuentos especial</h3>
        <div class="cards-descuento">
            <img class="card-img" src="img/card_1.jpeg">
            <img class="card-img" src="img/card_2.jpeg">
        </div>
    </div>
`
]



const redict_wahp = document.querySelectorAll("#redict_wahp");
if(window.innerWidth < 1000){
    recorerEa("https://wa.me/51937396049", redict_wahp)
    console.log("android")
}else{
    recorerEa("https://web.whatsapp.com/send?phone=51937396049", redict_wahp)
    console.log("windows")
}

function recorerEa(url, arrays){
    arrays.forEach(elem => {
        elem.href = url
    });
}


//Podra no tener la mejor sangria pero es compatible con cualquier otro proyectos esta hecho por sectores y modulos