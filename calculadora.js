function Calcular() {
    var operacao = document.getElementById('operacao').value;
    
    var num1 = document.getElementById('num1').value;
    num1 = parseFloat(num1);
    var num2 = document.getElementById('num2').value;
    num2 = parseFloat(num2);
    
    var resultado = null;
    
    if (num1 == "" || num1 == null) {
        alert('numero invalido');
              }
    if (num2 == '' || num2 == null) {
        alert('numero invalido');
    }
    if (operacao == "" || operacao == null) {
        alert('operação invalida');
    }
              
    switch(operacao){
        case '1': //subtração
            resultado = num1 - num2;
            break;
        
        case '2': //adição
            resultado = num1 + num2;
            break;
        
        case '3': //multiplicação
            resultado = num1 * num2;
            break;
        
        case '4': // divisão
            resultado = num1 / num2;
            break;
            
        default:
            alert("Opção invalida");
            return false;
    }
    
    document.getElementById('resultado').value = resultado;
}