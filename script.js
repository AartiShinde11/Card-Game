const cards= document.querySelectorAll(".card");

let cardOne,cardTwo;
let disableDeck = false;
let matchcard=0;

function flipCard(e){
    let clickedCard = e.target;
    if(clickedCard !== cardOne && !disableDeck){
        clickedCard.classList.add("flip");
        if(!cardOne){
            return cardOne = clickedCard;
        }
        cardTwo = clickedCard;
        disableDeck = true;
        let cardOneImg =cardOne.querySelector("img").src,
        cardTwoImg = cardTwo.querySelector("img").src;
        matchCards(cardOneImg,cardTwoImg);
    }
 
}

function matchCards(img1,img2){
    if(img1==img2){
        matchcard++;
        if(matchcard == 8){
            return shuffleCard();
        }
        cardOne.removeEventListener("click",flipCard);
        cardTwo.removeEventListener("click",flipCard);
        cardOne = cardTwo = "";
        return disableDeck=false;
    }
    setTimeout(()=>{
        cardOne.classList.add("shake");
        cardTwo.classList.add("shake");
    },400);

    setTimeout(()=>{
        cardOne.classList.remove("shake","flip");
        cardTwo.classList.remove("shake","flip");
        cardOne = cardTwo = "";
        disableDeck = false;
    },1200);

}

function shuffleCard(){
    matchcard=0;
    cardOne=cardTwo="";
    cards.forEach(card => {
        card.classList.remove("flip");
        card.addEventListener("click",flipCard);
    })
}

cards.forEach(card => {
    card.addEventListener("click",flipCard);
});