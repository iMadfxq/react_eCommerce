import SHOP_DATA from '../../shop-data.json'

const Shop = () => {
  return (
    <div>
      {SHOP_DATA.map(({id, name, price, imageUrl}) => {
        return (
          <div key={id}>
            <h1>{name}</h1>
            <p>Price</p>
          </div>
        )
      })}
    </div>
  )
}

export default Shop