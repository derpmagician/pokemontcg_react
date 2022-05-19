import classes from './Button.module.css'

const Button = (props) => {
  return (
    <button className={classes.btn} onClick={props.onHandlePage}>
      {props.name}
    </button>
  )
}

export default Button