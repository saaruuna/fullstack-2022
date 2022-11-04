const Course = ({ course }) => {
    return (
        <>
          <Header course={course} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </>
      )
}

const Header = ({ course }) => {
    return (
      <div>
        <h1> {course.name} </h1>
      </div>
    )
}

const Part = ({ part }) => {
    return (
        <li>{part.name} {part.exercises}</li>
    )
}

const Content = ({ parts }) => {
    const total = 0
    parts.map(part => total + part.exercises)
    return (
    <div>
        <ul>
            {parts.map(part => <Part key={part.id} part={part} />)}
        </ul>
    </div>
    )
}


const Total = ({ parts }) => {
    return (
        <div>
            <p> total of {parts.map(part => part.exercises).reduce((a, b) => a + b, 0)} exercises</p>
        </div>
    )
}

const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
      ]
    }
  
    return <Course course={course} />
  }
  

  export default App