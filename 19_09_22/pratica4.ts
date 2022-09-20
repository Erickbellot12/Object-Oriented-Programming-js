class Funcionario {
 nome: string;
 idade: number;
 turno: string;
 salario: number;
 cargo: string;
        constructor (nome:string, idade:number, turno:string, salario:number, cargo:string){
            this.nome = nome;
            this.idade = idade;
            this.turno = turno;
            this.salario = salario;
            this.cargo = cargo;

        }
        cadastrofuncionario(): void {
            console.log("nome: "+ this.nome+ "\nidade: "+ this.idade+ "\nturno: "+ this.turno+ "\nsalario: "+ this.salario+ "\ncargo: "+ this.cargo)

}
}
        let funcionario = new Funcionario ("bylli",97,"todos",20,"todos")
        funcionario.cadastrofuncionario();





