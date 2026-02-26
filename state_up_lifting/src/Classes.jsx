import React from 'react'

const Classes = () => {

  const classesData = [
    {
      id: 1,
      className: "Class 1",
      topic: "HTML Basics",
      duration: "1.5 Hours",
      trainer: "Vamsi",
      description: "Introduction to HTML, tags, elements and structure."
    },
    {
      id: 2,
      className: "Class 2",
      topic: "CSS Fundamentals",
      duration: "2 Hours",
      trainer: "Vamsi",
      description: "Styling web pages using CSS, selectors and box model."
    },
    {
      id: 3,
      className: "Class 3",
      topic: "JavaScript Basics",
      duration: "2.5 Hours",
      trainer: "Vamsi",
      description: "Variables, functions, conditions and loops."
    },
    {
      id: 4,
      className: "Class 4",
      topic: "React Introduction",
      duration: "2 Hours",
      trainer: "Vamsi",
      description: "What is React, components, JSX and props."
    },
    {
      id: 5,
      className: "Class 5",
      topic: "State & Events",
      duration: "2 Hours",
      trainer: "Vamsi",
      description: "useState hook and handling events in React."
    }
  ]

  const containerStyle = {
    display: "flex",
    gap: "20px",
    padding: "20px",
    flexWrap: "wrap",
    justifyContent: "center"
  }

  const cardStyle = {
    width: "260px",
    padding: "16px",
    borderRadius: "10px",
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
  }

  const titleStyle = {
    color: "#2c3e50",
    marginBottom: "8px"
  }

  const textStyle = {
    margin: "4px 0",
    color: "#555"
  }

  return (
    <div style={containerStyle}>
      {classesData.map((item) => (
        <div key={item.id} style={cardStyle}>
          <h3 style={titleStyle}>{item.className}</h3>
          <p style={textStyle}><b>Topic:</b> {item.topic}</p>
          <p style={textStyle}><b>Duration:</b> {item.duration}</p>
          <p style={textStyle}><b>Trainer:</b> {item.trainer}</p>
          <p style={textStyle}>{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Classes