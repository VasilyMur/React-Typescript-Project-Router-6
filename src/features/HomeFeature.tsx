import React, { FC, useState, useEffect } from 'react';
import '../App.css';
import AddPizzaForm from '../components/AddPizzaForm';
import DisplayPizzas from '../components/DisplayPizzas';
import Pizza from '../models/Pizza';
import demoPizzas from '../demoPizzas';

const HomeFeature: FC = () => {
  const [pizzasList, setPizzasList] = useState<Array<Pizza>>([]);
  // const [pizzasList, setPizzasList] = useState<Array<Pizza>>(demoPizzas);

  useEffect(() => {
    const pizzasState = localStorage.getItem('pizzasState');
    if (pizzasState) {
      setPizzasList(JSON.parse(pizzasState));
    }
  }, []);

  const addPizza = (newPizza: Pizza) => {
    setPizzasList([...pizzasList, newPizza]);

    localStorage.setItem('pizzasState', JSON.stringify([...pizzasList, newPizza]));
  };

  const updatePizza = (newPizza: Pizza) => {
    setPizzasList(pizzasList.map((pizza) => 
    (pizza.id === newPizza.id ? newPizza : pizza)));

    localStorage.setItem('pizzasState', JSON.stringify(pizzasList.map((pizza) => 
    (pizza.id === newPizza.id ? newPizza : pizza))));
  };

  const deletePizza = (id: number) => {
    setPizzasList(pizzasList.filter(pizza => pizza.id !== id));

    localStorage.setItem('pizzasState', JSON.stringify(pizzasList.filter(pizza => pizza.id !== id)));
  };
  

  return (
    <>
      <span className="heading">Наша Пиццерия</span>
      <AddPizzaForm 
        addPizza={addPizza}
        />
      <DisplayPizzas
          pizzasList={pizzasList}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
    </>
  );
}

export default HomeFeature;