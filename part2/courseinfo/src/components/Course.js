const Header = ({ course }) => {
    return (
      <div>
        <h2> {course.name} </h2>
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
const Course = ({ course }) => {
    return (
        <li>
          <Header course={course} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </li>
      )
}

export default Course