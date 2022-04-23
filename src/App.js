import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ImagesContainer from './ImagesContainer';
import PaginationContainer from './PaginationContainer';
import SearchContainer from './SearchContainer';

function App() {
  return (
    <Container>
      <CssBaseline />
      <SearchContainer />
      <ImagesContainer />
      <PaginationContainer />
    </Container>
  );
}

export default App;
