import { useRouter } from "next/router";
import { useEffect, useState } from 'react';
import styles from '../../../styles/form.module.css';

import Button from "../../../components/ui/Button";
import { API_BASE_URL } from "../../../utils/config";

function Edit() {
  const router = useRouter();

  const eventId = router.query.id;

  console.log(eventId);


  const [formData, setFormData] = useState({
    title: '',
    description: '',
    address: '',
    date: '',
    image: '',
    isFeatured: false,
  });
  useEffect(() => {
    console.log(eventId);
    if (eventId) {

      fetch(`/api/events/${eventId}`).then((res) => {
        return res.json()
      }).then((res) => {
        setFormData(res)
      })
    }

  }, [router.query.eventId])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your logic to submit the form data (e.g., send it to an API)
    console.log('Form Data:', formData);

    fetch(`/api/events/${eventId}`, {
      method: 'PUT',
      body: JSON.stringify(formData),
    }).then((res) => {
      return res.json()
    }).then((res) => {
      console.log(res);

      router.push('/events')
    })
  };

  return (
    <div className={styles.container}>
      <h1>Create Event</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <label className={styles.label}>Title:</label>
          <input type="text" name="title" className={styles.input} value={formData.title} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Description:</label>
          <textarea name="description" className={styles.textarea} value={formData.description} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Address:</label>
          <input type="text" name="address" className={styles.input} value={formData.address} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Date:</label>
          <input type="date" name="date" className={styles.input} value={formData.date} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>Image URL:</label>
          <input type="text" name="image" className={styles.input} value={formData.image} onChange={handleChange} required />
        </div>
        <div className={styles.field}>
          <label className={styles.label}>
            Is Featured:
            <input type="checkbox" name="isFeatured" checked={formData.isFeatured} onChange={handleChange} />
          </label>
        </div>
        <div className={styles.field}>
          <Button >Submit</Button>
        </div>
      </form>
    </div>
  );
};


export default Edit;
