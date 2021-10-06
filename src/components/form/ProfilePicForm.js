function ProfilePicForm(props){
    return(
        <>
        <input
        type='text'
        className='form-control'
        aria-label='text input'
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        />
        </>
    )
}

export default ProfilePicForm;