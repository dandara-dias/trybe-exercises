let bruto, ir, liquido, aliquotaINSS, aliquotaIR, salarioBase;

bruto = 3000;

if(bruto<=1556.94){
    aliquotaINSS = (8/100)*bruto;
} else if(bruto<=2594.92){
    aliquotaINSS = (9/100)*bruto;
} else if(bruto<=5189.82){
    aliquotaINSS = (11/100)*bruto;
} else{
    aliquotaINSS = 570.88;
}

salarioBase = bruto - aliquotaINSS;

if(salarioBase>4664.68){
    aliquotaIR = (27.5/100)*salarioBase;
    ir = aliquotaIR - 869.36; 
} else if(salarioBase>=3751.06){
    aliquotaIR = (22.5/100)*salarioBase;
    ir = aliquotaIR - 636.13;
} else if(salarioBase>=2826.66){
    aliquotaIR = (15/100)*salarioBase;
    ir = aliquotaIR - 354.80;
} else if(salarioBase>=1903.99){
    aliquotaIR = (7.5/100)*salarioBase;
    ir = aliquotaIR - 142.80;
} else{
    ir = 0;
}

liquido = salarioBase - ir;

console.log(liquido);