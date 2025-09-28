const CardInfo = ({ data}) => {
  const recycle = data.map((item)=>item.quantity);
  

  function reducer(prevVal, currentVal){
    return Number(prevVal) + Number(currentVal)
  }
  const totalRecycle = recycle.reduce(reducer, 0);
  const categories = new Set(data.map((item) => item.category)).size;
  return (
    <>
      <p>Total Items Recycled: <strong>{totalRecycle}</strong></p>
      <p>Categories Recycled: <strong>{categories}</strong></p>
      <div className="p-3 text-white text-center rounded" style={{background:"linear-gradient(to right, #147B3B, #658d74ff)"}}>
        Great progress! 🚀
      </div>
    </>
        
  )
}

export default CardInfo