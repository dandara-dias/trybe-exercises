let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  };

let info2 = {
    personagem: "Tio Patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: "Sim"
};

  console.log(`Bem vinda, ${info.personagem}`);
  console.table(info);

  for(let chave in info){
      console.log(chave);
  }

  for(let key in info){
      console.log(info[key]);
  }

  for(let chaves in info, info2){
      if(info[chaves] === info2[chaves]){
          console.log("Ambos recorrentes");
      } else{
          console.log(`${info[chaves]} e ${info2[chaves]}`);
      }
  }