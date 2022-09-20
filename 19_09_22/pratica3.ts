class Robo{
    nome: string;
    modelo: string;
    ano: number;
    sexo: string;
        constructor(nome: string, modelo: string,ano: number,sexo: string) {   
    this.nome = nome;
    this.modelo = modelo;
    this.ano =ano;  
    this.sexo = sexo;  
    }
    inforobo(): void {
    console.log("nome: " + this.nome + "\n modelo: " + this.modelo + "\n ano:  "+ this.ano + "\n sexo: "+ this.sexo)

    }        

    } let robo = new Robo("jack","de inverno",1910,"masculino");
    robo.inforobo();


