function PictureForm(props) {
  const keys = Object.keys(props.iterations);
  return (
    <div className='row'>
      <h6 className="my-3">Selecione as fotos do seu imóvel e do seu bichinho</h6>
      {keys.map((elem) => {
        return (
          <div key={elem} className='my-2 col-6'>
            <input
              type='text'
              className='form-control'
              aria-label='Text input with checkbox'
              name={elem}
              value={props.value[elem]}
              onChange={props.onChange}
              placeholder={props.placeholder}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PictureForm;
