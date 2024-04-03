import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Analyse = () => {
    const [exams, setExams] = useState([]);

    const getExams = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/exams');
           const res = response.data.filter((exam)=> exam.niveau === "1" && 
                                                     exam.semestre === 1 && 
                                                     exam.matiere === "Analyse pour l’ingénieur" &&
                                                     exam.examen === 1)
            setExams(res)
          } catch (error) {
            console.error('Error getting exam:', error.message);
          }
      };

    useEffect(() => {
       getExams()
    }, []);
    
    return (
        <div>
            <h1>Welcome </h1>
            <ul>
                {exams.map((exam) => (
                    <li key={exam.id}>
                        {exam.name} - {exam.identifier}
                        </li> 
                ))}
            </ul>
        </div>
    );
}

export default Analyse;