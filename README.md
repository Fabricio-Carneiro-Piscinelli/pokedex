**Pokédex**

Projeto ReactJs para a listagem de pokémons utilizando a API: <http://pokeapi.co>

Neste projeto foi utilizado algumas bibliotecas de gerenciamento de rotas, estados, animações, cacheamento tais como.:

- react-router-dom
- node-sass
- react-redux
- axios
- redux-persist
- rsuite UI
- typescript
- lottie-react 

**Estrutura:** 
A estrutura do Pokédex é baseada em um estado global utilizando o redux e introduzindo uma forma de cacheamento para poupar requisições HTTP. Desta forma os dados são mantidos dentro da aplicação. 

A estrutura do projeto é construída baseada na imagem abaixo: 

![](https://uc6132b675cf2237691d35142ce9.previews.dropboxusercontent.com/p/thumb/ABJYQZ98pral11XDRBu328mSKEvhhrxQ_l8A4DlBUDIzQYRcWoERcne61iHljCCEVCei6qApqecS9eFvrn-beoiMWK8YWBKpJ9ct4AOzdEwbnvCdN1aFs1UoihDd13UlJaijbfCIocuNtRVHWW7VBKv55bSO9eCFd1DdgI_TxOfO8tuxzUIlq9E2jpdynJ5JIspWlvfTaoFTZtYJ--uf9eHjRy3oyawv7Uk0D-RBeijmgpxClSVJJwNmA8o2l8Oe7r4K2GJlG0VCaLVBNzpbJRV0vnocn2SBDzeRuBXlZJTV7V7_GAKhT51fKsRZf1DlC21HUU4tjHVsPt4RJ_7oPJOsEsvhc37ClSdf1WnbfbMCecw8OAkrhh-BVZdXv_J5XEDcuxYLKzs1qSSSGkG0Z-f4/p.png?fv_content=true&size_mode=5)


**1.1 Client**
Aqui ficam todos os nossos itens "públicos" de acesso estático pelo app, tais como:

    1.1.1 sass

    1.1.2 font

    1.1.3 image

    1.1.4 icons

  **1.1.1 sass:** `Concentrado todos os nossos arquivos scss`

  **1.1.2 font:** `Concentra as fontes integradas a aplicação`

  **1.1.3 image:** `Concentra todas as imagens estáticas da aplicação`

  **1.1.4 icons:** `Concentra todos os icons estáticos da aplicação`

**1.2 Common**
    Nesta pasta ficam os arquivos funcionais do projeto, tais como:

    1.2.1 actions

    1.2.2 components

    1.2.3 constants

    1.2.4 containers

    1.2.5 reducers

    1.2.6 route

    1.2.7 selectors

    1.2.8 service-shared

    1.2.9 store


  **1.2.1 actions:** `Concentra todas as actions pertencentes ao redux` 

  **1.2.2 components:** `Concentra todos os **componets** da aplicação, tais como Page, header, Cards`

  **1.2.3 constants:** `Concentra todos as constantes do repositório Common` 

  **1.2.4 containers:** `Concentra os containers de conexão com o redux`

  **1.2.5 reducers:** `Concentra todas os reducers pertencentes ao redux` 

  **1.2.6 route:** `Contra todas as rotas da aplicação`

  **1.2.7 selectors:** `Concentra todos os arquivos de seleção de conteúdo do redux`

  **1.2.8 service-shared:** `Concentra os arquivos de acesso a requisições http`

  **1.2.9 store:** `create store de inicialização do redux`

**Problemas:**

O projeto é baseado em uma estrutura de armazenamentos em cache muito extensa, porque ele é **construído assim?**  A api <http://pokeapi.co/> não possui uma rota para listar uma estrutura de dados com titulo, id, imagem, ex.:



``` 
{
  id,
  name,
  url_image
} 
```

Então para evitar um loop constante de requisição a toda vez que for carregada a página, foi construída uma estrutura de cache, para que não seja feita mais requisições se já estiver armazenada a lista de pokemons. ex.:

```
  let res = await PokemonRequest.getPokemonsGeneral();
  let arrPokemon = [];

  for (let item of res.results){
    let pokemon = await PokemonRequest.getPokemonSingle(item.name);
    arrPokemon.push(pokemon);
  };

dispatch(success(arrPokemon));
```


**Inicialização:** 

1. `npm install`
1. `npm start`  


**Figma: [https://www.figma.com/file/JfntdhmVjuVADDZXaJtXtq/Untitled?node-id=0%3A1**](https://www.figma.com/file/JfntdhmVjuVADDZXaJtXtq/Untitled?node-id=0%3A1)**
