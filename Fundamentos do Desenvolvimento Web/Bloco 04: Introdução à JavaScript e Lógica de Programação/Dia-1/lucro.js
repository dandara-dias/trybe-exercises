let valorCusto, valorVenda, lucro, impostoSobreOCusto, valorCustoTotal, lucroMil;

valorCusto = 100;
valorVenda = 150;
impostoSobreOCusto = (20/100) * valorCusto;
valorCustoTotal = valorCusto + impostoSobreOCusto;
lucro = valorVenda - valorCustoTotal; //para um produto;

if(valorCusto < 0 || valorVenda < 0){
    console.log("Erro");
} else{
    console.log(lucro*1000);
}