function PictureFormEdit(props) {
  return (
    <div className='row'>
      <h6 className="my-3">Selecione as fotos do seu imóvel e do seu bichinho</h6>
      {props.pictures.map((elem, index) => {
        return (
          <div key={index} className='my-2 col-6'>
            <input
              type='text'
              className='form-control'
              aria-label='Text input with checkbox'
              value={elem}
              name={index}
              onChange={props.onChange}
              placeholder={props.placeholder}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PictureFormEdit;
