import React, { FC, useState } from "react";
import Pizza from '../models/Pizza';
import SinglePizza from './SinglePizza';
import Pagination from './Pagination';

interface DisplayPizzasProps {
  pizzasList: Array<Pizza>;
  updatePizza: (newPizza: Pizza) => void;
  deletePizza: (id: number) => void;
}

const DisplayPizzas: FC<DisplayPizzasProps> = ({ pizzasList, updatePizza, deletePizza }) => {

  const [curPage, setCurPage] = useState<number>(1);
  const itemsPerPage = 2;
  const skip = curPage * itemsPerPage - itemsPerPage;
  const pizzasPaginated = pizzasList.slice(skip, curPage * itemsPerPage);

  const handleNext = () => {
    setCurPage(curPage + 1);
  }
  const handlePrev = () => {
    setCurPage(curPage - 1);
  }

  return (
    <>
      <div className="container">
        {pizzasPaginated?.map((pizza) => (
          <SinglePizza
            pizza={pizza}
            key={pizza.id}
            updatePizza={updatePizza}
            deletePizza={deletePizza}
          />
        ))}

      {/*-------- БЕЗ ПАГИНАЦИИ --------*/}
      {/* {pizzasList?.map((pizza) => (
        <SinglePizza
          pizza={pizza}
          key={pizza.id}
          updatePizza={updatePizza}
          deletePizza={deletePizza}
        />
      ))} */}

    </div>
      <Pagination 
        curPage={curPage}
        itemsPerPage={itemsPerPage}
        handleNext={handleNext}
        handlePrev={handlePrev}
        pizzasList={pizzasList}
      />
  </>
  );
};

export default DisplayPizzas;