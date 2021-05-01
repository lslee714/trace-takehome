import { useState, useEffect, useContext } from 'react';
import FormControl from 'react-bootstrap/FormControl';

import useDebounce from "../../utils/useDebounce";

import "./index.scss";


const FarmFiltersComponent = () => {
  const [nameSearch, setNameSearch] = useState('');
  const debouncedNameSearch = useDebounce(500);

  useEffect(
    () => {
      if(debouncedNameSearch.length > 3) {
        //get farms from api
      }
    }, [debouncedNameSearch]
  );

  return (
    <aside className='farm-filters'>
      <section className='header'>
        <label>Narrow down your search</label>
      </section>
      <section className='body'>
        <div className='farm-search-box'>
          <FormControl className='by-name-filter' placeholder='Search for a farm' onChange={
            (e) => setNameSearch(e.target.value)
          }/>
        </div>

      </section>
    </aside>
  );
};

export default FarmFiltersComponent;
