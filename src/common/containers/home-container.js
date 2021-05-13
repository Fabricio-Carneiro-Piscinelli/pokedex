import { connect } from 'react-redux'
import { fetchPokemons } from '../actions/list-pokemons/list-pokemons.action';

//COMPONENT
import Home from '../components/pages/home/home';

//SELECTORS
import selectorList from '../selectors';

const mapStateToProps = (state) => ({
    pokemon : selectorList(state)
});

const mapDispatchToProps = dispatch => {
    return {
        getListPokemons : () => {
            dispatch( fetchPokemons())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)