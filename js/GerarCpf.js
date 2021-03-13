class GerarCpf {
    constructor(){
    }
    get gerar(){
        return (
            this.RandCPF()
            .then(resp => this.ValidarCpf(resp))
        )
    }
    RandCPF(cpf) {
        return  new Promise(resolve=>{
            cpf = []
            while(cpf.length < 11){
                cpf.push(Math.floor(Math.random()*(9-0)))
            }
            resolve(cpf)
        });
    }
    ValidarCpf(cpf){
        return new Promise(resolve=>{
            let cpfFormatado = `${cpf[0]}${cpf[1]}${cpf[2]}.${cpf[3]}${cpf[4]}${cpf[5]}.${cpf[6]}${cpf[7]}${cpf[8]}-${cpf[9]}${cpf[10]}`
            resolve(cpfFormatado)
        })
        
    }
}

export default GerarCpf;