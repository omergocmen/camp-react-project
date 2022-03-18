import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pagination } from 'semantic-ui-react'
import { changePage } from '../store/actions/paginationActions';


export default function PaginationCompact() {
  const state=useSelector(state=>state.pagination);
  const dispatch=useDispatch();
  
  const change=(data)=>{
    dispatch(changePage(data.activePage));
  }


  return (
    <div><Pagination
    boundaryRange={0}
    firstItem={1}
    lastItem={state.totelPage?state.totelPage:10}
    siblingRange={1}
    totalPages={state.totelPage?state.totelPage:10}
    onPageChange={(evevt,data)=>change(data)}
    activePage={state.selectedPage}
  /></div>
  )
}

