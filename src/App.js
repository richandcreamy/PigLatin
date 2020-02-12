import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // 'phrase' is the text entered by the user - right now there are some test words hard coded to make the process of testing your code a bit faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: '',
      // 'phraseTranslated' is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the 'submit' button
      phraseTranslated: 'This is where your translated sentence will appear.'
    }
  }

  // The 'myPigLatinCodeHere' function is where you will put your logic to convert the sentence entered by the user to Pig Latin.

  myPigLatinCodeHere = () => {
    // the variable 'userInput' will contain the text input from the user
    // no need to change this variable
    let userInput = this.state.phrase

    // as you modify and create Pig Latin-ified words, push them into 'translatedWordsArray'
    // no need to change this variable
    let translatedWordsArray = []

    // taking the user input and spliting the text into an array of words
    let splitUserInput = userInput.toLowerCase().split(" ")

    // now that we have an array of words, we can map over the array and access each word


    splitUserInput.map(currentWord => {
      // ACTION ITEM: use 'currentWord' as a starting point for your code

      //split all the words into individual letter arrays
        var firstLetter = currentWord.split("")

        if (firstLetter[0] === 'a' || firstLetter[0] === 'e' || firstLetter[0] === 'i' ||firstLetter[0] === 'o'|| firstLetter[0] === 'u'){
            var joinedLetter = firstLetter.join('')
            var concatVowel = joinedLetter + "yay"
            // console.log(concatVowel)
            return translatedWordsArray.push(concatVowel)

        } else if(firstLetter[0] === 'q' || firstLetter[1] === 'q'){
            for(let i=0; i < firstLetter.length; i++){
                if(firstLetter[i] === 'a' || firstLetter[i] === 'e' || firstLetter[i] === 'i' ||firstLetter[i] === 'o'){
                var firstQWord = firstLetter.join('')
                var qWord = firstQWord.slice(i,firstQWord.length) + firstQWord.slice(0, i) + "ay"
                console.log(qWord)
                return translatedWordsArray.push(qWord)
                }
            }

        } else if(firstLetter[0] === 'y'){
            for(let i=0; i < firstLetter.length; i++){
                if(firstLetter[i] === 'a' || firstLetter[i] === 'e' || firstLetter[i] === 'i' ||firstLetter[i] === 'o'|| firstLetter[i] === 'u'){
                    let yJoined = firstLetter.join('')
                    let yWord = yJoined.slice(i, yJoined.length) + yJoined.slice(0, i) + "ay"
                    return translatedWordsArray.push(yWord)
                }
            }

        } else if(firstLetter[0] !== 'a' || firstLetter[0] !== 'e' || firstLetter[0] !== 'i' ||firstLetter[0] !== 'o'|| firstLetter[0] !== 'u'){
            for(let i=0; i < firstLetter.length; i++){
                if(firstLetter[i] === 'a' || firstLetter[i] === 'e' || firstLetter[i] === 'i' ||firstLetter[i] === 'o'|| firstLetter[i] === 'u'|| firstLetter[i] === 'y'){
                    let pigJoined = firstLetter.join('')
                    let pigWord = pigJoined.slice(i,pigJoined.length) + pigJoined.slice(0,i) + "ay"
                    // let pigJoin = pigWord.join('')
                    // console.log(pigWord)
                    return translatedWordsArray.push(pigWord)
                }
            }
        }

      return translatedWordsArray.push(currentWord)
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")

    // the setState method will take your information from 'translatedWords' and update the state object that is displayed to the user
    // no need to change this method
    this.setState({ phraseTranslated: translatedWords })
    // done!
  }

  setUpPreventDefault = (e) => {
    // this method prevents react from refreshing the page unnecessarily
    // no need to modify this method
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  handleChange = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    // no need to modify this method
    this.setState({ phrase: e.target.value })
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: 'through every squeal queen fry',
      phraseTranslated: 'This is where your translated sentence will appear.'
    })
  }

  render() {
    // the render method is where we put information on the page
    // inside the return is all our JSX tags
    return (
      <div>
        <h1>Pig Latin Translator</h1>
          <div id="pigImage">
            <img
              src="https://live.staticflickr.com/651/21781424559_b458f36966_b.jpg"
              alt="pig with butcher cut names in pig latin"
              id="butcherPig"
            />
          </div>
          <div className="box">
            <h4>Enter phrase to be translated:</h4>
            <div className="info">
            {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
              <input
                id="inputPhrase"
                onChange={ this.handleChange }
                value={ this.state.phrase }
              />
              <br />
              {/* button that called the setUpPreventDefault method */}
              <button onClick={ this.setUpPreventDefault }>Submit</button>
              {/* button that resets the game */}
              <button onClick={ this.restartGame }>Clear</button>
            </div>
            {/* where the translated phrase will display */}
            <p>{ this.state.phraseTranslated }</p>
          </div>
        <footer>
          Coded by ~danny & richie :D~
        </footer>
      </div>
    );
  }
}

export default App;
