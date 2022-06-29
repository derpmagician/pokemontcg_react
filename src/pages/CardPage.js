import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import Card from '../components/Card'

const CardPage = () => {
  const params = useParams();
  const [card, setCard] = useState();
  const apiRoot = "https://api.pokemontcg.io/v2/cards/"
  const REACT_APP_XAUTHTOKEN = process.env.REACT_APP_XAUTHTOKEN
  
  const url = `${apiRoot}/${params.id}`
  console.log(params.id);

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
      setCard(data)
      console.log(data);

    } else {
      console.log('ERROR')
    }
  }

  useEffect(() => {
    fetchApi();

  }, []);

  return (
    <div>
      {
        !card ? "Cargando" : <Card card={card} />
      }
    </div>
  )
}

export default CardPage