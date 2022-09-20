class Aviao{
    modelo: string;
    ano:number;
    marca: string;
    assentos: number;

    constructor(modelo: string, ano: number, marca: string, assentos: number) {
        this.modelo = modelo;
        this.ano = ano; 
        this.marca = marca; 
        this.assentos = assentos;
    }
    infoaviao(): void {
        console.log("moedelo: "+ this.modelo+  "\n ano:  "+ this.ano+ " \nmarca:  "+ this.marca+ "\n assentos:  "+ this.assentos)
    }
}

        let aviao = new Aviao("brabo",1200,"nike",2)
        aviao.infoaviao();

   