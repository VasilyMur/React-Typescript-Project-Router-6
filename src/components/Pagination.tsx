import React, { FC } from 'react';
import Pizza from "../models/Pizza";

interface PaginationProps {
    curPage: number;
    itemsPerPage: number;
    pizzasList: Pizza[];
    handlePrev: () => void;
    handleNext: () => void;
}

const Pagination: FC<PaginationProps> = ({ curPage, pizzasList, itemsPerPage, handlePrev, handleNext}) => {
    const totalPages = Math.ceil(pizzasList.length / itemsPerPage);

    return (
        <div className="pagination">
        <div onClick={handlePrev} className={`${curPage <= 1 ? 'disabled' : ''}`}>← Назад</div>
        <div>Страница {curPage} из {totalPages}</div>
        <div onClick={handleNext} className={`${curPage >= totalPages ? 'disabled' : ''}`}>Вперед →</div>
      </div>
    )
}

export default Pagination;