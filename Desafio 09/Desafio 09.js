function iniciar(){
    let nome=window.prompt('Qual o seu nome?')
    let salario=Number(window.prompt(`Qual o sálario de ${nome}`))
    let reajuste=Number(window.prompt(`O sálario de ${nome} vai ser reajustado em qual porcentagem?`))
    let reajusteReal=reajuste/100
    let sal_final=(salario*reajusteReal)+salario
    let write=document.getElementById('txth2')
    let res=document.getElementById('res')
    write.innerHTML=`${nome} recebeu um aumento salarial`
    res.innerHTML=`<br> o salário atual era de ${salario} reais`
    res.innerHTML+=`<br> com um aumento de ${reajuste}% o salário vai aumentar ${salario*reajusteReal} reais`
    res.innerHTML+=`<br> ${nome} vai passar a receber ${sal_final} reais`
    
    }