import { useState } from 'react'

const Header = ({text}) => {
  return (
      <h1> {text} </h1>
  )
}

const Button = ({handleFunction, text}) => {
  return (
    <button onClick={() => handleFunction()}>
        {text}
    </button>
  )
}

const Anecdote = ({text, voteCount}) => {
  return (
    <div>
      <p>{text}</p>
      <p>has {voteCount} votes</p>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]

  const [selected, setSelected] = useState(0)
  const [highestVote, setHighestVote] = useState(0)
  const [votes, setVotes] = useState({
    'If it hurts, do it more often.': 0,
    'Adding manpower to a late software project makes it later!': 0,
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.':0,
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.':0,
    'Premature optimization is the root of all evil.':0,
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.':0,
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.':0
  })

  const handleSelected = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const handleVotes = () => {
    const newVotes = {...votes, [anecdotes[selected]]: votes[anecdotes[selected]] + 1}
    setVotes(newVotes)

    if (newVotes[anecdotes[selected]] > newVotes[anecdotes[highestVote]]) {
      setHighestVote(selected)
    }
  }

  return (
    <div>
      <Header text='Anecdote of the day'/>
      <Anecdote text={anecdotes[selected]} voteCount={votes[anecdotes[selected]]} />
      <Button handleFunction={handleVotes} text='vote' />
      <Button handleFunction={handleSelected} text='next anecdote' />
      <Header text='Anecdote with most votes'/>
      <Anecdote text={anecdotes[highestVote]} voteCount={votes[anecdotes[highestVote]]}/>
    </div>
  )
}

export default App
