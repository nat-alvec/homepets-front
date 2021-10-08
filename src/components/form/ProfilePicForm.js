function ProfilePicForm(props){
    return(
        <div className="my-4">
        <input
        type='file'
        className='form-control'
        aria-label='text input'
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        />
        </div>
    )
}

export default ProfilePicForm;