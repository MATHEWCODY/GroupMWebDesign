document.addEventListener('DOMContentLoaded', () => {
//different card images -Mathew
  const cardArray = [
    {
      name: '747',
      img: 'images/747.png'
    },
    {
      name: 'cessna',
      img: 'images/cessna.png'
    },
    {
      name: 'spitfire',
      img: 'images/spitfire.png'
    },
    {
      name: 'A10',
      img: 'images/A10.png'
    },
    {
      name: 'concorde',
      img: 'images/concorde.png'
    },
    {
      name: 'piper',
      img: 'images/piper.png'
    },
	{
      name: 'vulcan',
      img: 'images/vulcan.png'
    },
	{
      name: 'b2',
      img: 'images/b2.png'
    },
	
    {
      name: '747',
      img: 'images/747.png'
    },
    {
      name: 'cessna',
      img: 'images/cessna.png'
    },
    {
      name: 'spitfire',
      img: 'images/spitfire.png'
    },
    {
      name: 'A10',
      img: 'images/A10.png'
    },
    {
      name: 'concorde',
      img: 'images/concorde.png'
    },
    {
      name: 'piper',
      img: 'images/piper.png'
    },
	{
      name: 'b2',
      img: 'images/b2.png'
    },
	{
      name: 'vulcan',
      img: 'images/vulcan.png'
    }
  ]

  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#result')
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/blank.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('You have clicked the same image!')
    }
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('You found a match')
      cards[optionOneId].setAttribute('src', 'images/match.png')
      cards[optionTwoId].setAttribute('src', 'images/match.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/blank.png')
      cards[optionTwoId].setAttribute('src', 'images/blank.png')
      alert('Sorry, try again')
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = cardsWon.length
    if  (cardsWon.length === cardArray.length/2) {
      resultDisplay.textContent = 'Congratulations! Winner!'
    }
  }

  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
