function PictureForm(props) {
  return (
    <div className='row'>
      <div className='col-6'>
        <p>Coloque a Url da foto</p>
        <div className='input-group mb-3'>
          <div className='input-group-text'>
            <input
              className='form-check-input mt-0'
              type='checkbox'
              value={props.value}
              onChange={props.handlePictures}
              aria-label='Checkbox for following text input'
            />
          </div>
          <input
            type='text'
            className='form-control'
            aria-label='Text input with checkbox'
          />
        </div>
      </div>
    </div>
  );
}

export default PictureForm;
