import { useState } from 'react'

const Header = ({text}) => {
  return (
    <div>
      <h1> {text} </h1>
    </div>
  )
}

const Statistic = ({text, count}) => {
  return (
    <div>
      <p> {text} {count} </p>
    </div>
  )
}

const All = ({good, neutral, bad}) => {
  return (
    <div>
      <p> all {good + neutral + bad} </p>
    </div>
  )
}

const Average = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <div>
        <p> average 0 </p>
      </div>
    )
  }

  return (
    <div>
      <p> average {(good - bad)/all} </p>
    </div>
  )
}

const PositivePercentage = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <div>
        <p> positive 0 % </p>
      </div>
    )
  }
  const positivePercentage = good / all * 100
  return (
    <div>
      <p> positive {positivePercentage} %</p>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  return (
    <>
    <Statistic text='good' count={good} />
      <Statistic text='neutral' count={neutral} />
      <Statistic text='bad' count={bad} />
      <All good={good} neutral={neutral} bad={bad} /> 
      <Average good={good} neutral={neutral} bad={bad} />
      <PositivePercentage good={good} neutral={neutral} bad={bad} /> 
    </>
  )
}

const App = () => {
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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
