document.addEventListener('DOMContentLoaded' , () =>{
    const CardArray =[
     
        {
            name:'fish',
            img:"img/fish.png"
        },
        {
            name:'fish',
            img:"img/fish.png"
        },
        {
            name:'Robot',
            img:"img/Robot.png"
        },
        {
            name:'Robot',
            img:"img/Robot.png"
        },
        {
            name:'menky',
            img:"img/menky.jpg"
        },
        {
            name:'menky',
            img:"img/menky.jpg"
        },
        {
            name:'pikatchou',
            img:"img/pikatchou.jpg"
        },
        {
            name:'pikatchou',
            img:"img/pikatchou.jpg"
        },
        {
            name:'sponjbob',
            img:"img/sponjbob.jpg"
        },
        {
            name:'sponjbob',
            img:"img/sponjbob.jpg"
        },
        {
            name:'emote',
            img:"img/emote.png"
        },
        {
            name:'emote',
            img:"img/emote.png"
        },
    
    ]
    CardArray.sort(()=> 0.5 -Math.random())

    const grid= document.querySelector('.grid')
    const resultDisplay= document.querySelector("#result")
    var cardChosen=[]
    var cardChosenId=[]
    var cardsWon=[]
    function createBoard(){
        for (let i=0 ; i<CardArray.length;i++){
            var card = document.createElement('img')
            card.setAttribute('src','img/border.png')
            card.setAttribute("data-id",i)
           card.addEventListener("click", flipCard)
            grid.appendChild(card)
    }
}

function checkForMatch(){
    var cards= document.querySelectorAll('img')
    const optionOneId=cardChosenId[0]
    const optionTwoId = cardChosenId[1]
    if (cardChosen[0] === cardChosen[1]){
        alert("You Found The Match")
        cards[optionOneId].setAttribute('src', 'img/blanck.png')
        cards[optionTwoId].setAttribute('src' , 'img/blanck.png')
        cardsWon.push(cardChosen)

    }else{
        cards[optionOneId].setAttribute('src' , 'img/border.png')
        cards[optionTwoId].setAttribute('src' , 'img/border.png')
        alert("Sorry , Try again")


    }
    cardChosen=[]
    cardChosenId=[]
    resultDisplay.textContent=cardsWon.length
    if (cardsWon.length === CardArray.length/2){
        resultDisplay.textContent = 'Congratulation You them ALL'
    }
}

function flipCard(){
    var cardId= this.getAttribute("data-id")
    cardChosen.push(CardArray[cardId].name)
    cardChosenId.push(cardId)
    this.setAttribute('src',CardArray[cardId].img)
    if (cardChosen.length === 2){
        setTimeout(checkForMatch , 500)
    }
}


createBoard()

    
})