function DropdownMenu(props) {
  return (
    <div className='mb-3'>
      <label htmlFor={props.id} className='form-label'>
        {props.label}
      </label>
      <select
        id={props.id}
        className='form-select'
        aria-label={props.ariaLabel}
        onChange={props.onChange}
        value={props.value}
        name={props.name}
      >
        <option defaultValue>Selecione uma opção</option>
        {props.options.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default DropdownMenu;
