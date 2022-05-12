const Button = (props) => {
  return (
    <button onClick={props.onHandlePage}>{props.name}</button>
  )
}

export default Button