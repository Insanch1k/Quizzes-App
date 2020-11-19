import React, {Component} from 'react'
import classes from './Quiz.css'
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends Component {
  state = {
    quiz: [
      {
        rightAnswer: 2,
        question: 'When was Kyiv founded?',
        answers: [
          { text: '455', id: 1},
          { text: '482', id: 2},
          { text: '1834', id: 3},
          { text: '1488', id: 4},
        ]
      }
    ]
  }

  onAnswerClickHandler = answerId => {
    console.log('Answer id: ', answerId)
  }

  render() {
    return (
      <div className={classes.Quiz}>


        <div className={classes.QuizWrapper}>
          <h1>Please answer all questions</h1>

          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz