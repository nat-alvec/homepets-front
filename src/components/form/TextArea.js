function TextAreaInput(props) {
    return (
        <div className="mb-3">
            <label htmlFor={props.id} className="form-label">
                {props.label}
            </label>
            <textarea
                className="form-control"
                id={props.id}
                rows="3"
                placeholder={props.placeholder}
                name={props.name}
                value={props.value}
                onChange={props.onChange}
            ></textarea>
        </div>
    );
}

export default TextAreaInput;