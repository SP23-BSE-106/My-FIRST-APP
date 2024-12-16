import React from 'react';

function Students() {
  // Array of student objects
  const books = [
    { id: 1, name: "Muhammad Umar", marks: 99 },
    { id: 2, name: "Adil Khan", marks: 50 },
    { id: 3, name: "Zubair", marks: 83 },
    { id: 4, name: "Ali Akbar", marks: 45 },
    { id: 5, name: "Sara Ahmed", marks: 65 }
  ];

  // Filter students with marks less than 70
  const studentsWithLowMarks = books.filter(student => student.marks < 70);

  return (
    <div>
      <h2>Students with Marks Less Than 70</h2>
      <div className="students-container">
        {studentsWithLowMarks.map(student => (
          <div key={student.id} className="student-card">
            <h3>{student.name}</h3>
            <p>Marks: {student.marks}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Students;
