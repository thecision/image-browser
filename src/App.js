import ImagesContainer from './ImagesContainer';
import PaginationContainer from './PaginationContainer';
import SearchContainer from './SearchContainer';

function App() {
  return (
    <div className="App">
      <SearchContainer />
      <ImagesContainer />
      <PaginationContainer />
    </div>
  );
}

export default App;
