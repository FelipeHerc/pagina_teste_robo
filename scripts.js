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
            s:s.getSeconds()
        },
        s = CryptoJS.SHA256(a.h + a.m + a.s).toString(CryptoJS.enc.Hex);
    a.token = s;
    console.log(a.h + a.m + a.s);
    console.log("h",a.h);
    console.log("m",a.m);
    console.log("s",a.s);
    console.log(s);

}
