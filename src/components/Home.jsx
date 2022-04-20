import React, {useState} from 'react';
import FlashCardList from './FlashcardList'
 
const Home = () => {
    const [cards, setCards] = useState(samplecards)

    handleSubmit(event) {
        samplecards.push({id, question, answer})
    }


    return (
       <div>
          <h1>Home</h1>
           <form onSubmit={this.handleSubmit}>
               <label>
                   id:
                   <input type="number" name="id"/>
               </label>
               <label>
                   question:
                   <input type="text" name="question"/>
               </label>
               <label>
                   answer:
                   <input type="text" name="question"/>
               </label>
               <input type="submit" value="Submit" />
           </form>
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