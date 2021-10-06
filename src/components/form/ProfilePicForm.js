function ProfilePicForm(props){
    return(
        <>
        <input
        type='text'
        className='form-control'
        aria-label='text input'
        name='profilePicUrl'
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        />
        </>
    )
}

export default ProfilePicForm;