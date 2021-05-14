import React, { useState } from "react";

function Teachers() {
  const [teachers, setTeachers] = useState<string[]>([
    "Teacher1",
    "Teacher2",
    "Teacher3",
    "Teacher4",
  ]);

  return (
    <div>
      <h2>Teachers</h2>
      <ul>
        {teachers.map((teacher, i) => (
          <li key={i}>{teacher}</li>
        ))}
      </ul>
    </div>
  );
}

export default Teachers;
