//VARIAVEIS
var numSecreto = Math.floor(Math.random() * 101);
var resp = document.getElementById("numero");
var i = 10;//TENTATIVAS

//FUNÇÃO
function Chutar(){
  while( i > 0) {
    var chute = parseFloat(document.getElementById("numero").value);
    if (chute < 0 || chute > 100 || isNaN(chute) || Number.isInteger(chute) == false) {//VERIFICAR VALOR DIGITADO
      result.innerHTML = "Digite um número entre 0 e 100";
      return;
    } 
    else {
      i -= 1;
      if (chute == numSecreto) {
        result.innerHTML =
          "Você acertou!";
        return;
      } else if (chute > numSecreto && i > 0) {
        result.innerHTML =
          "Digite um número menor " + "tentativas restantes: " + i;
        return;
      } else if (chute < numSecreto && i > 0) {
        result.innerHTML =
          "Digite um número maior " + "tentativas restantes: " + i;
        return;
      }
    }
  }
  resp.innerHTML = "Suas tentativas acabaram! O número secreto é: " + numSecret;
  return;
}
