function TextInput(props) {
  const method = props.method;
  return (
    <div>
      {method === 'onChange' ? (
        <div className='mb-3'>
          <label htmlFor={props.id} className='form-label'>
            {props.label}
          </label>
          <input
            type={props.type}
            className='form-control'
            id={props.id}
            name={props.name}
            onChange={props.onChange}
            value={props.value}
          />
        </div>
      ) : (
        <div className='mb-3'>
          <label htmlFor={props.id} className='form-label'>
            {props.label}
          </label>
          <input
            type={props.type}
            className='form-control'
            id={props.id}
            name={props.name}
            onBlur={props.onBlur}
            value={props.value}
          />
        </div>
      )}
    </div>
  );
}

export default TextInput;
