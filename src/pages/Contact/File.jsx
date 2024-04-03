import axios from 'axios';
import React, { useState } from 'react';

function File() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [niveau, setNiveau] = useState(null);
  const [matiere, setMatiere] = useState(null);
  const [specialite, setSpecialite] = useState(null);
  const [semestre, setSemestre] = useState(null);
  const [examen, setExamen] = useState(null);
  const [cours, setCours] = useState(null);



  


  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    
  };

  const handleNiveauChange = (event) => {
    setNiveau(event.target.value);
  }
  const handleMatiereChange = (event) => {
    setMatiere(event.target.value)
  };
  const handlespecialiteChange = (event) => {
    setSpecialite(event.target.value)
  };
  const handlesemestreChange = (event) => {
    setSemestre(event.target.value)
  };
  const handleexamenChange = (event) => {
    setExamen(event.target.value)
  };
  const handlecoursChange = (event) => {
    setCours(event.target.value)
  };
  




  const handleUpload = async () => {
    try {
        // Create a FormData object to send the file
        const formData = new FormData();
        formData.append('exam', selectedFile);
        formData.append('niveau', niveau);
        formData.append('matiere', matiere);
        formData.append('specialite', specialite);
        formData.append('semestre', semestre);
        formData.append('examen', examen);
        formData.append('cours', cours);
        // Make the POST request to your Spring Boot endpoint
        const response = await axios.post('http://localhost:8080/api/exams', formData);
  
        // Handle the response as needed
        console.log(response.data);
      } catch (error) {
        // Handle errors
        console.error('Error uploading exam:', error.message);
      }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <input type="text" placeholder='Niveau' onChange={handleNiveauChange} />

      <label for="matières">Choisir matière:</label>
      <select name="matières" id="matières" onChange={handleMatiereChange}>
        <option value="Analyse pour l’ingénieur">Analyse pour l’ingénieur</option>
        <option value="Probabilités	">Probabilités	</option>
        <option value="Outils numériques pour l'ingénieur 1 :Matlab">Outils numériques pour l'ingénieur 1 :Matlab</option>
        <option value="Algorithmique et Programmation">Algorithmique et Programmation</option>
        <option value="Physique pour l'ingénieur	">Physique pour l'ingénieur	</option>
        <option value="Mécanique des fluides	">Mécanique des fluides	</option>
        <option value="Circuits et systèmes électriques	">Circuits et systèmes électriques	</option>
        <option value="Métrologie pour l'ingénieur	">Métrologie pour l'ingénieur	</option>
        <option value="Semi-conducteurs	">Semi-conducteurs	</option>
        <option value="Systèmes mécaniques pour la Robotique		">Systèmes mécaniques pour la Robotique		</option>
        <option value="Anglais 1		">Anglais 1		</option>
        <option value="Comptabilité et Gestion d’entreprise	">Comptabilité et Gestion d’entreprise	</option>
        <option value="Techniques de communication		">Techniques de communication		</option>


      </select>
      <label for="spécialités">Choisir spécialité:</label>
      <select name="spécialités" id="spécialités" onChange={handlespecialiteChange}>
        <option value="SIC">SIC</option>
        <option value="EAN">EAN</option>
        <option value="SETP">SETP</option>
    </select>
    <input type="text" placeholder='Semestre' onChange={handlesemestreChange} />
    <input type="text" placeholder='examen' onChange={handleexamenChange} />
    <input type="number" placeholder='cours' onChange={handlecoursChange} />



      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default File;
