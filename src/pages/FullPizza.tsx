import React from 'react'

import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';

const FullPizza: React.FC = () => {
   const { id } = useParams()
   const navigate = useNavigate()
   const [pizza, setPizza] = React.useState<{
      imageUrl: string, title: string, price  : string
   }>()

   React.useEffect(() => {
      const fetchPizza = async () => {
         try {
            const { data } = await axios.get('https://636a867ab10125b78fde1e61.mockapi.io/items/' + id)
            setPizza(data)
         } catch (error) {
            console.log('error: ' + error)
            navigate('/')
         }
      }
      fetchPizza()
   }, [])

   if (!pizza) {
      return <div>loading...</div>
   }

   return (
      <div className='container'>
         <img src={pizza.imageUrl} alt="pizza" />
         <h2>{pizza.title}</h2>
         <h4>{pizza.price} ₽</h4>
         <button className="button button--outline button--add">
              <span>Назад</span>
         </button>
      </div>
   )
}

export default FullPizza
