import {createGlobalStyle} from 'styled-components';
import Header from './components/Header';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle `
  *{
    @import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap');
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Sora', sans-serif;
  }

  body{
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar{
      width: px;
    }

    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }

    ::-webkit-scrollbar-thumb {
      background: #B5BBCF; 
    }

    ::-webkit-scrollbar-thumb:hover {
      background: #6B769E; 
    }
  }

`

function App() {
  return (
   <>
   <GlobalStyle /> 
   <Header />
   <Main />
   </>
  );
}

export default App;
