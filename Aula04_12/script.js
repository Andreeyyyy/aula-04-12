let votos = [0, 0];
let finalizar = false;

function votar(candidato) {
  if (!finalizar) {
    if (votos[candidato] < 1) {
      votos[candidato]++;
      atualizarResultado();
      finalizar = true;
    }
  } else {
    alert("Você só pode votar uma vez.");
  }
}

function atualizarResultado() {
  const votosCandidatoA = document.getElementById("votos-candidato-a");
  const votosCandidatoB = document.getElementById("votos-candidato-b");
  votosCandidatoA.textContent = `Candidato A: ${votos[0]} voto(s)`;
  votosCandidatoB.textContent = `Candidato B: ${votos[1]} voto(s)`;
}
