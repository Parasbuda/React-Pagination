import React from 'react'

const Pagination = ({postsPerPage,totalPosts,paginate,handleClick,currentPage}) => {
    const pageNumbers=[]
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pageNumbers.push(i)
    }
    return (
       <nav>
           <ul className="pagination">
               <li className="page-item">
                   <a className="page-link" href="!#" onClick={()=>handleClick("previous")}>Previous</a>
               </li>
            {pageNumbers.map((number,i)=>
                <li className={`page-item ${i+1===currentPage?"active":null}`} key={number}>
                    <a onClick={()=>paginate(number)} href="!#" className="page-link">{number}</a>
                </li>
            )}
             <li className="page-item">
                   <a className="page-link" href="!#" onClick={()=>handleClick("next")}>Next</a>
               </li>
           </ul>
       </nav>
    )
}

export default Pagination
