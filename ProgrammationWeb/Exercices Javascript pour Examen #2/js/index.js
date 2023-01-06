function startExercice5(){

    const lettre = document.getElementById("input51").value;
    
    let resultat;

    if(lettre === `a` || lettre === `e` || lettre === `i` || lettre === `o` || lettre === `u` || lettre === `y`){
        resultat = `voyelle`;
    }
    else{
        resultat = `consonne`;
    }

    document.querySelector('#resultatExercice5').innerHTML = resultat;
}

function startExercice4(){

    const nb1 = Number(document.getElementById("input41").value);
    const nb2 = Number(document.getElementById("input42").value);

    let resultat;

    if(nb1 >= 10 && nb2 >= 10){ // somme
        resultat = nb1 + nb2;
    }
    else if(nb1 < 10 && nb2 < 10){ // multi
        resultat = nb1 * nb2;
    }
    else{ // diff
        resultat = nb1 - nb2;
    }

    document.querySelector('#resultatExercice4').innerHTML = resultat;


}

function startExercice3(){

    const largeur = document.getElementById("input31").value;
    const hauteur = document.getElementById("input32").value;

    let resultat;


    if((Number(largeur) * 2) + (Number(hauteur) * 2) < 100){
        resultat = `le perimetre est plus petit que 100`;
    }
    else{
        const aire = Number(largeur) * Number(hauteur);
        resultat = `la surface du rectagle est ${aire}`;
    }

    document.querySelector('#resultatExercice3').innerHTML = resultat;

}


function startExercice2(){

    const nb1 = document.getElementById("input21").value;
    const nb2 = document.getElementById("input22").value;
    const nb3 = document.getElementById("input23").value;
    
    let resultat;
    let grandNb;
    let petitNb;
    
    if(nb1 === nb2 || nb1 === nb3 || nb2 === nb3){
        resultat = `erreur, deux nombres sont identiques`;
    }
    else{
        if(Number(nb1) > Number(nb2) && Number(nb1) > Number(nb3)){
            grandNb = nb1;
            if(Number(nb2) > Number(nb3)){
                petitNb = nb3;
            }
            else{
                petitNb = nb2;
            }            
        }
        else if(Number(nb2) > Number(nb1) && Number(nb2) > Number(nb3)){
            grandNb = nb2;
            if(Number(nb1) > Number(nb3)){
                petitNb = nb3;
            }
            else{
                petitNb = nb1;
            }
        }
        else{
            grandNb = nb3;
            if(Number(nb1) > Number(nb2)){
                petitNb = nb2;
            }
            else{
                petitNb = nb1;
            }
        }
        resultat = `${grandNb} est le plus grand nombre et ${petitNb} est le plus petit nombre`;
    }
    
    document.querySelector('#resultatExercice2').innerHTML = resultat;
}

function startExercice1(){

    const nb1 = document.getElementById("input1").value;
    const nb2 = document.getElementById("input2").value;
    
    let resultat;
    
    if(nb1 === nb2){
        resultat = `erreur, les deux nombres sont identiques`;
    }
    else{
        if(Number(nb1) > Number(nb2)){
            resultat = `${nb1} est le plus grand nombre et ${nb2} est le plus petit nombre`;
        }
        else{
            resultat = `${nb2} est le plus grand nombre et ${nb1} est le plus petit nombre`;
        }
    }

    document.querySelector('#resultatExercice1').innerHTML = resultat;

}