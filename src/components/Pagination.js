import React from 'react';
import ReactPaginate from "react-paginate"
import { useHistory } from 'react-router-dom';

const Pagination = ({pokemonCount,page}) => {
  
  const history = useHistory()

  const changePage = (e) => {
    console.log(e.selected)
    history.push(`/${parseInt(e.selected)+1}`)
  }

  return (  
    <ReactPaginate 
        pageCount={Math.floor(pokemonCount/20)}
        initialPage={page-1}
        pageRangeDisplayed={1}
        marginPagesDisplayed={1}
        previousLabel="<"
        nextLabel=">"
        onPageChange={changePage}
        
        containerClassName="w-100 flex flex-wrap justify-center gap-x-2 gap-y-4 mb-8"

        breakClassName="border border-gray-500 rounded"
        breakLinkClassName="w-8 text-center block p-2 leading-none outline-none font-bold"

        pageClassName="border border-gray-500 rounded hover:bg-red-600"
        pageLinkClassName="w-8 text-center block p-2 leading-none outline-none font-bold"

        activeClassName="bg-red-500"
        activeLinkClassName="w-8 text-center text-back-light block p-2 leading-none outline-none font-bold"

        previousClassName="border border-gray-500 rounded"
        previousLinkClassName="w-8 text-center block p-2 leading-none outline-none font-bold"

        nextClassName="border border-gray-500 rounded"
        nextLinkClassName="w-8 text-center block p-2 leading-none outline-none font-bold"

        disabledClassName="opacity-50"
      />
  );
}
 
export default Pagination;