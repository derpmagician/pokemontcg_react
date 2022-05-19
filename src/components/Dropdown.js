import classes from './Dropdown.module.css';

const Dropdown = ({ label, value, options, onChange }) => {
  return (
    <div>
      <label className={classes.dropd}>
        {label}
      </label>
      <select className={classes.sel} value={value} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>{option.label}</option>
        ))}
      </select>
    </div>
    
    
  );
};

export default Dropdown;