const reacao = document.querySelectorAll(".boxReacao")

function clickRed(){
    if(reacao[0].style.backgroundColor == "red"){
        reacao[0].style.backgroundColor = "white"
    }else{
        reacao[0].style.backgroundColor = "red"
        reacao[0].style.transition = "1s"
    }
}

function clickBlue(){
    if(reacao[1].style.backgroundColor == "rgb(0, 89, 255)"){
        reacao[1].style.backgroundColor = "white"
    }else{
        reacao[1].style.backgroundColor = "rgb(0, 89, 255)"
        reacao[1].style.transition = "1s"
    }
}

function clickGreen(){
    if(reacao[2].style.backgroundColor == "rgb(0, 153, 21)"){
        reacao[2].style.backgroundColor = "white"
    }else{
        reacao[2].style.backgroundColor = "rgb(0, 153, 21)"
        reacao[2].style.transition = "1s"
    }
}

function clickYellow(){
    if(reacao[3].style.backgroundColor == "rgb(255, 187, 0)"){
        reacao[3].style.backgroundColor = "white"
    }else{
        reacao[3].style.backgroundColor = "rgb(255, 187, 0)"
        reacao[3].style.transition = "1s"
    }
}