function salario(plano, salario){
    switch(plano){
        case "A":
            return (salario*0.10)+salario
        case "B":
            return (salario*0.15)
        case "C":
            return salario*0.20
        default:
            return "inválido";
     }
  
}
console.log(salario("C", 1000))
