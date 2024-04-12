console.log("conectou");

function enviarDados() {
      var nome = document.getElementById("nome").value;
      var idade = document.getElementById("idade").value;
      var nascimento = document.getElementById("nascimento").value;
      var endereco = document.getElementById("endereco").value;

      var dados = {
        nome: nome,
        idade: idade,
        nascimento: nascimento,
        endereco: endereco
      };

      var token = CryptoJS.SHA256(dados.nascimento).toString(CryptoJS.enc.Hex);
      
      dados.token = token;
      console.log(dados.nascimento);
      console.log(dados.token);
      
      var dadosAtualizadosJSON = JSON.stringify(dados);
      var xhr = new XMLHttpRequest();
      var statusElement = document.getElementById("status");
      statusElement.textContent = "Enviando...";
      xhr.open("POST", "https://eo17ntwnezhvaf.m.pipedream.net", true);
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
          if (xhr.status === 200) {
            statusElement.textContent = "Requisição enviada com sucesso!";
            statusElement.className = "status success";
          } else {
            statusElement.textContent = "Ocorreu um erro ao enviar a requisição.";
            statusElement.className = "status error";
          }
        }
      };
      xhr.send(dadosAtualizadosJSON);
}
