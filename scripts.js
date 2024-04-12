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
}
