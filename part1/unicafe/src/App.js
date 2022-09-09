import { useState } from 'react'

const Header = ({text}) => {
  return (
    <div>
      <h1> {text} </h1>
    </div>
  )
}

const Button = ({setFunction, text, category}) => {
  return (
    <button onClick={() => setFunction(category + 1)}>
        {text}
      </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <div>
      <p> {text} {value}</p>
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad

  if (all === 0) {
    return (
    <div>
        <p> No feedback given </p>
      </div>
    )
  }

  const positive = good / all * 100
  const average = (good - bad)/all

  return (
    <>
      <StatisticLine text='good' value={good} />
      <StatisticLine text='neutral' value={neutral} />
      <StatisticLine text='bad' value={bad} />
      <StatisticLine text='all' value={all} /> 
      <StatisticLine text='average' value={average} /> 
      <StatisticLine text='positive' value={positive + ' %'} /> 
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
      <Button setFunction={setGood} text='good' category={good}/>
      <Button setFunction={setNeutral} text='neutral' category={neutral}/>
      <Button setFunction={setBad} text='bad' category={bad}/>
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
