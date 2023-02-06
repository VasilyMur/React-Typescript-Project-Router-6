import React, { FC, ChangeEvent, FormEvent, useState } from "react";
import Pizza from '../models/Pizza';
import "./styles.css";

interface AddPizzaFormProps {
  data: Pizza;
  updatePizza: (newPizza: Pizza) => void;
  handleToggleEdit: () => void;
}

const AddPizzaForm: FC<AddPizzaFormProps> = ({ data, updatePizza, handleToggleEdit }) => {
  const [editPizza, setEditPizza] = useState<Pizza>(data);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { title, price, img } = editPizza;

    if (title && price && img) {
      updatePizza(editPizza);
    }
    handleToggleEdit();
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    setEditPizza({
      ...editPizza,
      [name]: value
    });
  }

  return (
    <form
      className="edit-form"
      onSubmit={handleSubmit}
    >
      <input
        name="title"
        type="text"
        placeholder="Название"
        value={editPizza.title}
        onChange={handleChange}
      />
      <input
        name='price'
        type='text'
        placeholder='Стоимость'
        value={editPizza.price}
        onChange={handleChange}
      />
      <input
        name='img'
        type='text'
        placeholder='Изображение'
        value={editPizza.img}
        onChange={handleChange}
      />
      <button type="submit">
        Подтвердить
      </button>
    </form>
  );
};

export default AddPizzaForm;