import { useState, useEffect } from 'react';

function Searchbar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  function handleChange(event) {
    setSearchTerm(event.target.value);
  }

  useEffect(() => {
    async function search() {
      props.onChange(searchTerm)
    }
    search()
  }, [searchTerm])

  return (
    <div className='container mt-0 mb-4 d-flex flex-column justify-content-center align-items-center'>
      <div
        className='card border-light mt-1 mb-1'
        style={{ width: '85vw', maxWidth: '85vw' }}
      >
        <div className='input-group d-flex align-items-center'>
          <div className='input-group-prepend'>
            <span className='form-control border-end-0 text-secondary'>
              <i className='fas fa-search fa-2x'></i>
            </span>
          </div>
          <input
            type='search'
            className='form-control border-start-0'
            placeholder='Aonde você gostaria de ir?'
            value={searchTerm}
            onChange={handleChange}
            style={{ height: '48.7px' }}
          />
        </div>
      </div>
    </div>
  );
}

export default Searchbar;
