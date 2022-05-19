import Button from './Button';
import Dropdown from './Dropdown';
import classes from './OptionsBar.module.css';

const OptionsBar = (props) => {
  const {
    handlePrevPage,
    handleNextPage,
    handleTextChange,
    handlepageSizeChange,
    page,
    pageSize,
  } = props

  return (
    <div className={classes.bar}>
      <label htmlFor="name" className={classes.name_label}>Ingresa Nombre del Pokemon</label>
      <input className={classes.input} id="name" type="text" onChange={handleTextChange} />
      <Button onHandlePage={handlePrevPage} name='Previous' />
      {page}
      <Button onHandlePage={handleNextPage} name='Next'  />
      {/* {pageSize} */}
      <Dropdown
        label="Cards per page"
        options={[
          { label: '5', value: '5' },
          { label: '10', value: '10' },
          { label: '25', value: '25' },
          { label: '50', value: '50' },
        ]}
        value={pageSize}
        onChange={handlepageSizeChange}
      />
    </div>
  )
}

export default OptionsBar