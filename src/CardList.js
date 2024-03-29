import { useState, useEffect } from 'react';
import OptionsBar from './components/OptionsBar';
import CardList from './components/CardList';
import './App.css';


function App() {
  const [page, setPage] = useState(1);
  const [pageSize, setpageSize] = useState(25);
  const [query, setQuery] = useState('')
  const apiRoot = "https://api.pokemontcg.io/v2/cards/"
  const url = `${apiRoot}?pageSize=${pageSize}&page=${page}&q=${query}&orderBy=number`
  const [cards, setCards] = useState();
  const REACT_APP_XAUTHTOKEN = process.env.REACT_APP_XAUTHTOKEN

  const handlepageSizeChange = (event) => {
    setpageSize(event.target.value)
  };

  const fetchApi = async () => {
    const response = await fetch(url, {
      method: "GET",
      withCredentials: true,
      headers: {
        "X-Auth-Token": REACT_APP_XAUTHTOKEN,
        "Content-Type": "application/json"
      },
    });
    if (response.ok) {
      const responseJSON = await response.json();
      const data = responseJSON.data
      setCards(data)
      // console.log(data);

    } else {
      console.log('ERROR')
    }
  }

  const handleTextChange = (e) => {
    const name= e.target.value;
    // console.log(e.target.value);
    setQuery(`name:*${name}*`);
    setPage(1);
    // setQuery('name:charizard')
  }

  const handlePrevPage = () => {
    if (page >= 2) setPage(page - 1);
  };

  const handleNextPage = () => {
    if (cards.length !== 0) 
    setPage(page + 1);
  };

  useEffect(() => {
    fetchApi();

  }, [page, pageSize, query]);
  
  return (

    <div className="App">

      <nav>
        <h1 className="title">Pokemon TCG</h1>
      </nav>
      <OptionsBar
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        handleTextChange={handleTextChange}
        handlepageSizeChange={handlepageSizeChange}
        page={page}
        pageSize={pageSize}
      />

      <CardList
        cards={cards}
      />

    </div>
  );
}

export default App;
