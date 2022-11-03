const Image = ({ img, descrip, eventHandler, ident }) => {
  return (
    <img
      className=" h-6"
      src={img}
      alt={descrip}
      onClick={() => {
        console.log(ident)
        eventHandler && eventHandler(ident)
      }}
    />
  )
}
export default Image
