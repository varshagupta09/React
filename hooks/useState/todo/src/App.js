import './App.css';
import styled, {ThemeProvider} from 'styled-components';

function App(props) {


  const theme = {
    color : {
      textColor: "red",
      bg: "green"
    }
  }
  const Button = styled.button`
  background-image: ${({theme}) => theme.color.bg};

  padding: 20px;
  border-radius: 5px;
  border: none;
  &:hover {
    background-color: rgb(114, 122, 43);
  }
  `

  const Para = styled.p`
  background-color: blue;
  color:white;

  `
  return (
    <ThemeProvider theme={theme} >
      <Button className='btn'  bg="red">Styled components</Button>
      <Para>nknduhffuewknjdsfgfhuijecnbdfhkm</Para>
    </ThemeProvider>
  );
}

export default App;
