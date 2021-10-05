function TextInput(props) {
  return (
    <div className='mb-3'>
      <label htmlFor={props.id} className='form-label'>
        {props.label}
      </label>
      <input
        type={props.type}
        className="form-control"
        id={props.id}
        name={props.name}
        onChange={props.onChange}
        value={props.value}
      />
    </div>
  );
}

export default TextInput;
