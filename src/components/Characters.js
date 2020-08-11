import React from 'react'
import CharacterItem from './../CharacterItem';
import Spinner from './Spinner';

const Characters = ( {actors, isLoading} ) => {
  return isLoading 
  ? (<Spinner/>) 
  : (
    <section className="cards">
     {actors.map((item) => (
       <CharacterItem 
        key={item.char_id}
        item ={item}
      />
     ))}  
    </section>
  )
}

export default Characters
