import React, { useState } from 'react';
import styles from './form.module.scss'
const ImageForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [intro, setIntro] = useState('');
  const [image, setImage] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleIntroChange = (e) => {
    setIntro(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const placeSubmitHandler = async event => {
    event.preventDefault();
    try {
      const formData = {
        title,
        image,
        description,
        intro,
      };

      const response = await fetch('https://master-gym-backend-production.up.railway.app/api/edit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if(response.ok){
        setDescription('')
        setImage('')
        setIntro('')
        setTitle('')
      }
    }catch(err){
        console.log(err)
    }
  }

  return (
    <section className={styles["contact-us"]}>
    <div className={styles["contact-us__box"]}>
    <form onSubmit={placeSubmitHandler} className={styles["contact-us__form"]}>
    
    <div className={styles["contact-us__form-box"]}>
    <label>Tytul</label>
        <input type="text" name='title' id='title' value={title} onChange={handleTitleChange} required />
        
      
      </div>
      <div className={styles["contact-us__form-box"]}>   
      <label>Wstęp</label>
        <textarea name='intro' id='intro' type="text" value={intro} onChange={handleIntroChange} required />  
      </div>
      <div className={styles["contact-us__form-box"]}>
      <label>Opis</label>
        <textarea value={description} onChange={handleDescriptionChange} required/>
        
  
      </div>
      <div className={styles["contact-us__form-box"]}>
        <label>Zdjecie</label>
        <input type="text" value={image} onChange={handleImageChange} required />
      </div>
      <button className={styles["contact-us__form-btn"]} type="submit">Wyslij</button>
    </form>
    </div>
    </section>
  );
};

export default ImageForm;