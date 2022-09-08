import { useState } from 'react'

const Header = (props) => {
  return (
    <div>
      <h1> {props.text} </h1>
    </div>
  )
}

const Statistic = (props) => {
  return (
    <div>
      <p> {props.text} {props.count} </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <button onClick={() => setGood(good + 1)}>
        good
      </button>
      <button onClick={() => setNeutral(neutral + 1)}>
        neutral
      </button>
      <button onClick={() => setBad(bad + 1)}>
        bad
      </button>
      <Header text='statistics' />
      <Statistic text='good' count={good} />
      <Statistic text='neutral' count={neutral} />
      <Statistic text='bad' count={bad} />
    </div>
  )
}

export default App
