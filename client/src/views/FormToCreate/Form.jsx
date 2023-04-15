import React, { useState } from "react";
import styles from "./Form.module.css";
import { validate } from "./validate";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    image: "",
    description: "",
    platforms: "",
    released: "",
    rating: "",
    genres: "",
  });

  const [error, setError] = useState({
    name: "",
    image: "",
    description: "",
    platforms: "",
    released: "",
    rating: "",
    genres: "",
  }

  )

  const onChangeHandler = (e) => {
    setError(validate({ ...form, [e.target.name]: e.target.value }));
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className={styles.formContent}>
        <div>
          <label htmlFor="">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChangeHandler}
          />
          {error.name && <span>{error.name}</span>}
        </div>
        <div>
          <label htmlFor="">image</label>
          <input
            type="text"
            name="image"
            value={form.image}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Description</label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Platform</label>
          <input
            type="text"
            name="platforms"
            value={form.platforms}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Released</label>
          <input
            type="text"
            name="released"
            value={form.released}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Rating</label>
          <input
            type="text"
            name="rating"
            value={form.rating}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="">Genres</label>
          <input
            type="text"
            name="genres"
            value={form.Genres}
            onChange={onChangeHandler}
          />
        </div>
        <div>
          <button>Create</button>
        </div>
      </form>
    </div>
  );
}
