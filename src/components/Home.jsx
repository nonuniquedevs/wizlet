import React, {useState} from 'react';
import FlashCardList from './FlashcardList'
 


function Home() {
    const [cards, setCards] = useState(samplecards);
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`You entered ${name}`)
    }

    return (
       <div>
          <h1>Home</h1>
          <form onSubmit={handleSubmit}>
              <label>ID:</label>
              <input type="number" value={name} onChange={(e) => setName(e.target.value)}/>
              <label></label>
          </form>
           <p>Home page body content</p>
           <FlashCardList flashcards={cards}/>
       </div>
    );
}
 
const samplecards = [
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