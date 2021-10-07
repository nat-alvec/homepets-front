function CheckForm(props) {
  const options = props.options;
  return (
    <div className='mb-3'>
      <p>{props.label}</p>
      {options.map((elem, index) => {
        return (
          <div className='form-check form-check-inline' key={index}>
            <input
              className='form-check-input'
              type='checkbox'
              id='inlineCheckbox'
              value={elem}
              onChange={props.handle}
              checked={props.marked ? props.marked.includes(elem) : null}
            />
            <label className='form-check-label' htmlFor='inlineCheckbox'>
              {elem}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default CheckForm;
