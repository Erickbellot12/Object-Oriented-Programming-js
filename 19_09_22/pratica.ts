class cliente {

    nome: string;
    idade: number;
    sexo: string;   
    

    constructor(nome: string, idade: number, sexo: string) {
        this.nome = nome;
        this.idade = idade; 
        this.sexo = sexo;

}
mostrarClient(): void {
    console.log("Nome do cliente: " + this.nome+ "\nidade do cliente: " + this.idade+ "\nsexo do cliente: " + this.sexo);
}
}
let func: cliente = new cliente("Erick", 22, "masculino")
func.mostrarClient();