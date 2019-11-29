class Palabra{
    constructor(posX,posY,texto){
        this.posX = posX;
        this.posY = posY;
        this.texto = texto;
    }

    moverY(){
        this.posY += 1;
        if(this.posY>600){
            this.posY = 0;
        }
    }

    getPosX(){
        return this.posX;
    }

    getPosY(){
        return this.posY;
    }

    setPosX(posX){
        this.posX = posX;
    }

    setPosY(posY){
        this.posY = posY;
    }

    getTexto(){
        return this.texto;
    }

    setTexto(texto){
        this.texto = texto;
    }
}