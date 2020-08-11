import React, { useState, useEffect} from 'react';
import axios from 'axios'
import Header from './components/Header'
import Characters from './components/Characters';
import Search from './components/Search';
import './App.css'




const App = () => {
  const [actors, setActors] = useState([])
  const [isLoading, setisLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () =>  {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )
      setActors(result.data)
      setisLoading(false)
    }
    fetchItems()
  }, [query])

  return (
    <div className="container">
      <Header/>
      <Search 
        getQuery={(q) => setQuery(q)}
      />
      <Characters 
        actors={actors}
        isLoading={isLoading} 
      />
    </div>
  );
}

export default App;
