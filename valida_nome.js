export default function ehUmNome(campo){
    const nome = campo.value;
    const patternNome = /^(?!(.)\1\1)[A-Za-zÀ-ÿ -]{3, 30}$/i.test(nome)
    console.log(patternNome);
    //?! -> negative look ahead, já iniciar negado
    //i -> case sensitive, \1\1 back reference
    //\1\1, se o caractere se repetir 2x ok, 3x negado!
    if(!patternNome){
        campo.setCustomValidity("Não é nome")
        console.log(`"${nome}" não é válido`)
    }
    
    return nome;
}
