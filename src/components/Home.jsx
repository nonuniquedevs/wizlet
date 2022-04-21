import React, {useState} from 'react';
import FlashCardList from './FlashcardList'
 


function Home() {
    const [cards, setCards] = useState(samplecards);
    const [id, setid] = useState("");
    const [question, setQuestion] = useState("")
    const [answer, setAnswer] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault();
        var newflashcard = {
            id: id,
            question: question,
            answer: answer
        }
        samplecards.push(newflashcard);
       // alert(`You entered ${id}, ${question}, ${answer}`)
    }

    return (
       <div>
          <h1>Home</h1>
          <form onSubmit={handleSubmit}>
              <label>ID:</label>
              <input type="number" value={id} onChange={(e) => setid(e.target.value)}/>
              <label>Question:</label>
              <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)}/>
              <label>Answer: </label>
              <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)}/>
              <input type="submit"/>
          </form>
           <p>Home page body content</p>
           <FlashCardList flashcards={cards}/>
       </div>
    );
}


var samplecards = [
    {
    id: 1,
    question: '1+1',
    answer: '2',
    },
    { 
    id: 2,
    question: '2+2',
    answer: '4',
    },
    {
    id: 3,
    question: '3+3',
    answer: '6',
    },
]

export default Home;