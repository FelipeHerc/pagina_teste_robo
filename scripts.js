function enviarDados() {
    var e, t = document.getElementById("nome").value,
        n = document.getElementById("idade").value,
        a = {
            nome: t,
            idade: n,
            nascimento: document.getElementById("nascimento").value,
            endereco: document.getElementById("endereco").value
            horario_clicado: new Date().toISOString()
        },
        s = CryptoJS.SHA256(a.horario_clicado).toString(CryptoJS.enc.Hex);
    a.token = s;
    console.log(s)

}
