import GerarCpf from './GerarCpf.js'

let h1CPF = document.querySelector(".gerador > div > h1");
let btnCPF = document.querySelector(".gerador > div > button");

btnCPF.addEventListener('click', ()=>{
    const gerador = new GerarCpf()
    gerador.gerar.then(resp => {
        h1CPF.innerHTML = resp;
    })
})