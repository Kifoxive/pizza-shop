import React from 'react'
import styles from './pagination.module.scss'

import ReactPaginate from 'react-paginate';

type PaginationProps = {
   currentPage: number;
   onChangePage: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onChangePage }) => {
   return (
      <ReactPaginate
         className={styles.root}
         breakLabel="..."
         previousLabel="<"
         nextLabel=">"
         onPageChange={({ selected }) => onChangePage(selected + 1)}
         pageRangeDisplayed={5}
         pageCount={3}
         forcePage={currentPage - 1}
      />
   )
}

export default Pagination