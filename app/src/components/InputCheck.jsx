const InputCheck = ({ ident, eventHandler }) => {
  return (
    <input
      type="checkbox"
      id={ident}
      className="mr-4"
      onClick={(e) => eventHandler(e)}
    />
  )
}
export default InputCheck
