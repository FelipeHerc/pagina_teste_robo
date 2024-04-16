function enviarDados() {
    var d = new Date(); 
    var e, t = document.getElementById("nome").value,
        n = document.getElementById("idade").value,
        a = {
            nome: t,
            idade: n,
            nascimento: document.getElementById("nascimento").value,
            endereco: document.getElementById("endereco").value,
            h:d.getHours(),
            m:d.getMinutes(),
            s:d.getSeconds()
        },
        s = CryptoJS.SHA256(a.h + a.m + a.s).toString(CryptoJS.enc.Hex);
    a.token = s;
    var o = JSON.stringify(a),
        i = new XMLHttpRequest,
        r = document.getElementById("status");
    r.textContent = "Enviando...",
    i.open("POST", "https://6780-168-196-146-146.ngrok-free.app/client", !0),
    i.setRequestHeader("Content-Type", "application/json"),
    i.onreadystatechange = function() {
        i.readyState === XMLHttpRequest.DONE && (200 === i.status ? (r.textContent = "Requisição enviada com sucesso!", r.className = "status success") : (r.textContent = "Ocorreu um erro ao enviar a requisição.", r.className = "status error"))
    },
    i.send(o)

}
