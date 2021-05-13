import { useState, useEffect } from 'react';
import { Grid, Row, Col } from "rsuite";
import 'rsuite/dist/styles/rsuite-default.css';

//COMPONTS 
import ChartModal from '../../modals/modal-charts-pokemon/chart-modal';
import Card from '../../card/card';
import Header from '../../header/header';
import Loading from '../../msg-loading/msg-loading';
import Error from '../../msg-error/msg-error';

//STYLE
import './home-style.scss';

const Home = (props) => {

  const {getListPokemons, pokemon } = props;
  const [showModal, setShowModal] = useState(false);
  const [pokemonSelected, setPokemonSelected ] = useState([]);
  const [pokemonData, setPokemonData] = useState([]);

  const openModalChart = (pokemon) => {
    setShowModal(true);
    setPokemonSelected(pokemon);
  };

  const closeModalChart = () => {
    setShowModal(false);
  };

  //if there is not data in the cache 
  useEffect(() => {
    if (!pokemon?.response?.length)
      getListPokemons(); //action 
  }, []);

  //if there is data in the cache 
  useEffect(() => {
    if (pokemon?.response?.length)
      setPokemonData(pokemon.response);
  }, [props]);
  
  return (
    <div>
      <Header/>
      <Grid fluid>
        <Row className="home_content-listing show-grid">
          <Col> 
            {
              pokemon.error ? (
                <Error />
              ) : 
                pokemon.isRequesting ? (
                <Loading />
              ):(
                pokemonData?.map((item, index) => {
                  return (
                    <Card 
                      title={item.name} 
                      number={item.id}
                      urlImage={item.sprites.other['official-artwork'].front_default}
                      key={index} 
                      OpenModalStats={() => openModalChart(item)}
                    />
                  );
                })
              )
            }
          </Col>
        </Row>
      </Grid>
      <ChartModal 
        showModal={showModal} 
        closeModal={closeModalChart} 
        dataPokemon={pokemonSelected}
      />
    </div>
  );
};

export default Home;