import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PaginationLinks extends Component {

  addFirstThree = (paginationLinks, pageSize, pageNumber, command) => {
    for(let paginationNumber=1; paginationNumber<=pageSize; paginationNumber++){

      if(paginationNumber > 5) break;

      paginationLinks.push(
        <Link 
          to={`/blogs/page/${paginationNumber}`} 
          key={paginationNumber} 
          className={paginationNumber===pageNumber ? "active link" : "link"}
        >
          {paginationNumber}
        </Link>
      ) 
    }
  }

  addLastThree = (paginationLinks, pageSize, pageNumber, command) => { 
    for(let paginationNumber=(pageSize-2); paginationNumber<=pageSize; paginationNumber++){
      paginationLinks.push(
        <Link 
          to={`/blogs/${command}/page/${paginationNumber}`} 
          key={paginationNumber} 
          className={paginationNumber===pageNumber ? "active link" : "link"}
        >
          {paginationNumber}
        </Link>
      )
    }
  }

  addBasedOnPageNumber = (paginationLinks, pageNumber) => {
    for(let paginationNumber=(pageNumber-2); paginationNumber<=(pageNumber+2); paginationNumber++){
      paginationLinks.push(
        <Link 
          to={`/blogs/page/${paginationNumber}`} 
          key={paginationNumber} 
          className={paginationNumber===pageNumber ? "active link" : "link"}
        >
          {paginationNumber}
        </Link>
      )
    }
  }

  addPaginationLinks = (paginationLinks, pageSize, pageNumber) => {
    if(pageSize<=3){ 
      this.addFirstThree(paginationLinks, pageSize, pageNumber);
    } else if (pageNumber > pageSize-2) { 
      this.addLastThree(paginationLinks, pageSize, pageNumber);
    } else if (pageNumber>=3) { 
      this.addBasedOnPageNumber(paginationLinks, pageNumber);
    } else{
      this.addFirstThree(paginationLinks, pageSize, pageNumber);
    }
  }

  render(){
    const paginationLinks = [];
    const pageSize = this.props.pageSize;
    const pageNumber = this.props.pageNumber;
    
    this.addPaginationLinks(paginationLinks, pageSize, pageNumber); 
    return (
      <div id="pagination">
        {pageNumber !== 1 
          ? <Link 
              to={`/blogs/page/${pageNumber-1}`}
              className="link" 
            >
              &laquo;
            </Link>
          : null
        }

        {pageSize > 1 
          ? paginationLinks.map(PaginationLink => PaginationLink)
          : null
        }

        {pageNumber !== pageSize && pageSize > 0
          ? <Link 
              to={`/blogs/page/${pageNumber+1}`}
              className="link" 
            >
              &raquo;
            </Link>
          : null
        }
      </div>
    );
  }
}

PaginationLinks.propTypes = {
  pageSize: PropTypes.number.isRequired,
  pageNumber: PropTypes.number.isRequired
};

export default PaginationLinks;