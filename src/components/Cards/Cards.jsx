import Card from '../Card/Card.jsx';
import style from './Cards.module.css'

const Cards = ({characters, onClose}) => {
   return (<div className={style.div}>
{     characters.map(({id,name,species,gender,image,origin,status})=>{
         return( 
         <Card
         key={id}
         id={id}
         name={name}
         species={species}
         gender={gender}
         image={image}
         status={status}
         origin={origin.name}
         onClose={onClose}
         />)
})
} </div>);
}
export default Cards;