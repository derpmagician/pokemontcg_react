import Button from './Button';
import Dropdown from './Dropdown';

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
    <div>
      Ingresa Nombre del Pokemon<input type="text" onChange={handleTextChange} />
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
        ]}
        value={pageSize}
        onChange={handlepageSizeChange}
      />
    </div>
  )
}

export default OptionsBar