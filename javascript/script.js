
function calcular(){
var emprestado = document.querySelector('#emprestimo').value;
var parcelas = document.querySelector('#parcelas').value;
var taxa = document.querySelector('#juros').value;
    
    var calcPorcentagem = (taxa / 100);
    var valorFixo = (emprestado / parcelas);
    
    
    var cont1 = 0;
    var cont2 = 0;
    var cont3 = 0;
    var cont4 = 1;
    var contjuros = 0; 

    while(cont1 < parcelas){
        let valorInicial = (emprestado - cont2);
        let juros = (valorInicial * calcPorcentagem);
        var cont3 = juros;
        var contjuros = contjuros + juros;
        var cont2 = cont2 + valorFixo;
        let valorParcelas= (valorFixo + cont3);
        let contparcelas =  cont4;
        cont1++;
        cont4++;
        
        document.write("["+contparcelas+"] " + 'parcela ' + 'R$ ' + valorParcelas + '<br>')
    }
}