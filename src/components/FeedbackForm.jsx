import { useState, useContext, useEffect } from 'react';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from "./shared/Card";
import FeedbackContext from '../context/FeedbackContext';

function FeedbackForm() {
  const [text, setText]  = useState('');
  const [rating, setRating]  = useState(10);
  const [btnDisabled, setBtnDisabled]  = useState(true);
  const [message, setMessage]  = useState('');

  const { addFeedback, feedbackEditState, updateFeedback } = useContext(FeedbackContext);
  
  useEffect(() => {
    if(feedbackEditState.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEditState.item.text);
      setRating(feedbackEditState.item.rating);
    }
  }, [feedbackEditState])

  const handleTextChange = (e) => {
    // Checking against the current input value
    const { value } = e.target;

    if(value === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if(value !== '' && value.trim().length < 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(text.trim().length >= 10) {
      const newFeedback = {
        text,
        rating
      }

      if(feedbackEditState.edit === true) {
        updateFeedback(feedbackEditState.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText('');
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>

        <RatingSelect select={(rating) => setRating(rating)} />

        <div className="input-group">
          <input 
            onChange ={handleTextChange} 
            type="text" 
            placeholder="write a review" 
            value={text}  
          />
          <Button type="submit" version='secondary' isDisabled={btnDisabled}>Send</Button>
        </div>

        {message && <div className='message'>{message}</div>}
      </form>      
    </Card>
  )
}

export default FeedbackForm
