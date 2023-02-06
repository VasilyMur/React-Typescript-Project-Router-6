import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Pizza from '../models/Pizza';
import "./styles.css";

interface AddPizzaFormProps {
  addPizza: (newPizza: Pizza) => void;
}

const initState = {
  title: '',
  price: '',
  img: '',
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ addPizza }) => {
  const [newPizza, setNewPizza] = useState<{title: string, price: string, img: string}>(initState);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = newPizza;

    if (title && price && img) {
      addPizza({
        title, 
        img, 
        price: Number(price), 
        id: Date.now()});
    }
    setNewPizza(initState);
 
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setNewPizza({
      ...newPizza,
      [name]: value
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <input
        name="title"
        type="text"
        placeholder="Название"
        value={newPizza.title}
        onChange={handleChange}
      />
      <input
        name='price'
        type='text'
        placeholder='Стоимость'
        value={newPizza.price}
        onChange={handleChange}
      />
      <input
        name='img'
        type='text'
        placeholder='Изображение'
        value={newPizza.img}
        onChange={handleChange}
      />
      <button type="submit">
        + Добавить в Меню
      </button>
    </form>
  );
};

export default AddPizzaForm;