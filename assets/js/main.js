
let leftBTN = document.getElementById('leftBTN'),
    rightBTN = document.getElementById('rightBTN')
let re_card = document.getElementsByClassName('re_card');
let coord = 0


leftBTN.addEventListener('click', function(){
    if(coord>-1){
        for(let i = 0; i<re_card.length; i++){
            re_card[i].style.transform = `translate(${coord}px)`
            console.log(coord)
        }
        coord = coord + 100
    }
    
})
rightBTN.addEventListener('click', function(){
    if(coord<1000){
        for(let i = 0; i<re_card.length; i++){
            re_card[i].style.transform = `translate(${coord}px)`
            console.log(coord)
        }
        coord = coord - 100
    }
})

