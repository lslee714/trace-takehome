import { useState,  useContext } from 'react';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import FarmStateContext from "../../state/FarmStateContext";

import "./index.scss";


const FarmFiltersComponent = () => {
  const farmContext = useContext(FarmStateContext);
  const emptyFilterSet = {name:'', minRevenue: '', maxRevenue: ''};
  const [filters, setFilters] = useState({...emptyFilterSet});

  const searchByFilters = () => {
    farmContext.getFarms(filters.name, filters.minRevenue, filters.maxRevenue);
  };

  const onFiltersKeyDown = (e) => {
    if(e.key === 'Enter') {
      searchByFilters();
    }
  };

  const onResetClicked = () => {
    setFilters({...emptyFilterSet});
    farmContext.getFarms('', '', '');
  };

  return (
    <aside className='farm-filters'>
      <section className='header'>
        <label>Narrow down your search</label>
      </section>
      <section className='body' onKeyDown={onFiltersKeyDown}>
        {/*separate filters could be their own components, but keep it all in here for now for simplicity sake*/}
        <article className='farm-filter'>
          {/*This filter getting a little black magicky*/}
          {/*Might be better to have separate filters for the three, with dropdowns for maybe soil type*/}
          <label htmlFor='name-search'>Find by Farm/Field Name or Soil Type</label>
          <FormControl id='name-search' value={filters.name} className='by-name-filter' placeholder='Search by name' onChange={
            (e) => setFilters({
              ...filters,
              name: e.target.value
            })
          }/>
        </article>
        <article className='or-text'>OR</article>
        <article className='farm-filter'>
            <label htmlFor='min-revenue'>Min Revenue</label>
            <FormControl id='min-revenue' value={filters.minRevenue} className='by-name-filter' type='number' min={0} placeholder='Enter $USD amount ' onChange={
              (e) => setFilters({
                ...filters,
                minRevenue: e.target.value
              })
            }/>
        </article>
        <article className='or-text'>OR</article>
        <article className='farm-filter'>
            <label htmlFor='max-revene'>Max Revenue</label>
            <FormControl id='max-revene' value={filters.maxRevenue} className='by-name-filter' type='number' min={0} placeholder='Enter $USD amount' onChange={
              (e) => setFilters({
                ...filters,
                maxRevenue: e.target.value
              })
            }/>
        </article>
        <Button className='search-btn' variant='primary' onClick={searchByFilters}>Search</Button>
        <Button className='search-btn' variant='warning' onClick={onResetClicked}>Reset</Button>
      </section>
    </aside>
  );
};

export default FarmFiltersComponent;
