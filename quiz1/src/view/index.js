function preload(){
    texts = loadStrings("./src/text.txt");
}
function setup(){
    createCanvas(640, 480);
    logica = new Logica(texts);
}

function draw(){
    background(0);

   

    
    logica.pintarPalabras();
    fill(100,100,100);
    rect(0,430,700,60);
    logica.pintarPalabrasAbajo();
    logica.pintarPalabraObjRaton();
    logica.compararPalabrasQueCaen();




    
    fill(255,0,0);
    rect(500,430,80,40);

}

function mousePressed(){
    logica.capturarPalabra();
    logica.crearArregloFinal();
}