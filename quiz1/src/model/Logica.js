class Logica {
    /**
     * Método constructor
     * @param {*} texts 
     */
    constructor(texts){
        this.palabrasObjCaen = []; 
        this.palabrasObjAleatorias = [];
        this.palabraObjRaton = new Palabra(200,200,"=====================");
        this.palabrasComparadasMayus = [];
        this.palabrasNoRepetidas = [];

        //Palabras que caen
        for (let index = 0; index < texts.length; index++) {
            this.palabrasObjCaen.push(new Palabra(random(0,600),random(0,200),texts[index]));
        }
     
        //Palabras abajo
        //Garantizo que las palabras no se repitan
        while(this.palabrasNoRepetidas.length<4 ){
            this.indexRandom = int(random(0,texts.length-1));
            if(!this.palabrasNoRepetidas.includes(texts[this.indexRandom])){
                this.palabrasNoRepetidas.push(texts[this.indexRandom]);
            }
        }

        //Asigno las palabras no repetidas a objetos
        for (let index = 0; index < this.palabrasNoRepetidas.length; index++) {
            this.palabrasObjAleatorias.push(new Palabra(20+(index*100),450,this.palabrasNoRepetidas[index]));
        }
    }

    pintarPalabras(){
        for (let index = 0; index < this.palabrasObjCaen.length; index++) {
            fill(255);
            this.posX = this.palabrasObjCaen[index].getPosX();
            this.posY = this.palabrasObjCaen[index].getPosY();
            text(this.palabrasObjCaen[index].getTexto(),this.posX,this.posY);
            this.palabrasObjCaen[index].moverY();
        }
    }

    pintarPalabrasAbajo(){
        for (let index = 0; index < this.palabrasObjAleatorias.length; index++) {
            fill(255);
            this.posX = this.palabrasObjAleatorias[index].getPosX();
            this.posY = this.palabrasObjAleatorias[index].getPosY();
            text(this.palabrasObjAleatorias[index].getTexto(),this.posX,this.posY);
        }
    }


    pintarPalabraObjRaton(){
        this.palabraObjRaton.setPosX(mouseX),
        this.palabraObjRaton.setPosY(mouseY)
        fill(255);
        text(this.palabraObjRaton.getTexto(),
        this.palabraObjRaton.getPosX(),
        this.palabraObjRaton.getPosY()
        );
    }

    capturarPalabra(){
        for (let index = 0; index < this.palabrasObjAleatorias.length; index++) {
            if(mouseX > this.palabrasObjAleatorias[index].getPosX() && 
            mouseX < this.palabrasObjAleatorias[index].getPosX()+50 && 
            mouseY>430 
            && mouseY<460){
                this.palabraObjRaton.setTexto(this.palabrasObjAleatorias[index].getTexto());
             }
        }
    }


   compararPalabrasQueCaen(){
        for (let index = 0; index < this.palabrasObjCaen.length; index++) {
            if(dist(this.palabraObjRaton.getPosX(),this.palabrasObjCaen[index].getPosX()+50,
            this.palabraObjRaton.getPosY(),this.palabrasObjCaen[index].getPosY())<150 &&
            this.palabraObjRaton.getTexto()===this.palabrasObjCaen[index].getTexto()
            ){
              if(!this.palabrasComparadasMayus.includes(this.palabrasObjCaen[index].getTexto().toUpperCase()))
                this.palabrasComparadasMayus.push(this.palabrasObjCaen[index].getTexto().toUpperCase());
             }
        }
        
     
        
    }

    crearArregloFinal(){
        this.listaFinalPalabras = [];
        if(this.palabrasComparadasMayus.length>=4){
            if(mouseX>499 && mouseX<580 && mouseY>450 && mouseY<530){
                for (let index = 0; index < this.palabrasObjCaen.length; index++) {
                    if(!this.palabrasComparadasMayus.includes(this.palabrasObjCaen[index].getTexto().toUpperCase())){
                        this.listaFinalPalabras.push(this.palabrasObjCaen[index].getTexto());
                    }
                   
                }
                this.listaFinalPalabras =  this.listaFinalPalabras.concat(this.palabrasComparadasMayus);
                saveStrings(this.listaFinalPalabras,'newList.txt');
            }
            
        }

        console.log(this.palabrasComparadasMayus);
       
    }
}