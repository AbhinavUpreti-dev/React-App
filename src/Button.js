function Button(props)
{
    return (
        <button onClick={()=>props.onClickHandle(props.increment)}>+{props.increment}</button>
    );
}

export default Button;