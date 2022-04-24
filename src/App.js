import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import LinearProgress from '@mui/material/LinearProgress';
import ImagesContainer from './components/ImagesContainer';
import PaginationContainer from './components/PaginationContainer';
import SearchContainer from './components/SearchContainer';
import { useEffect, useState } from 'react';
import api from './api/api';

function App() {
  const [searchPhrase, setSearchPhrase] = useState('mountain');

  const [images, setImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);

  // pagination component
  const [imagesPerPage, setImagesPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);

  const [isLoading, setIsLoading] = useState(false);

  const processFetchedData = ({ total_results, photos }) => {
    setImageCount(total_results);
    setImages(photos);
  };

  useEffect(() => {
    if (searchPhrase.length) {
      const pageNum = pageNumber + 1;
      setIsLoading(true);
      api
        .get(
          `https://api.pexels.com/v1/search?query=${searchPhrase}&per_page=${imagesPerPage}&page=${pageNum}`
        )
        .then(({ data }) => {
          processFetchedData(data);
        })
        .catch((error) => console.error(error))
        .finally(() => setIsLoading(false));
    }
  }, [imagesPerPage, searchPhrase, pageNumber]);

  return (
    <>
      <CssBaseline />
      <SearchContainer
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      {!isLoading ? (
        <Container>
          <ImagesContainer images={images} />
          <PaginationContainer
            imageCount={imageCount}
            pageNumber={pageNumber}
            setPageNumber={setPageNumber}
            imagesPerPage={imagesPerPage}
            setImagesPerPage={setImagesPerPage}
          />
        </Container>
      ) : (
        <LinearProgress />
      )}
    </>
  );
}

export default App;
