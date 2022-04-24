import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import ImagesContainer from './ImagesContainer';
import PaginationContainer from './PaginationContainer';
import SearchContainer from './SearchContainer';
import { useEffect, useState } from 'react';
import api from './api';

function App() {
  const [searchPhrase, setSearchPhrase] = useState('mountain');

  const [images, setImages] = useState([]);
  const [imageCount, setImageCount] = useState(0);

  // pagination component
  const [imagesPerPage, setImagesPerPage] = useState(10);
  const [pageNumber, setPageNumber] = useState(0);

  const processFetchedData = ({ total_results, photos }) => {
    setImageCount(total_results);
    setImages(photos);
  };

  useEffect(() => {
    if (searchPhrase.length) {
      const pageNum = pageNumber + 1;
      api
        .get(
          `https://api.pexels.com/v1/search?query=${searchPhrase}&per_page=${imagesPerPage}&page=${pageNum}`
        )
        .then(({ data }) => {
          processFetchedData(data);
        })
        .catch((error) => console.log('Oh noes, error: ', error));
    }
  }, [imagesPerPage, searchPhrase, pageNumber]);

  return (
    <Container>
      <CssBaseline />
      <SearchContainer
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
      />
      {images.length > 0 && <ImagesContainer images={images} />}

      <PaginationContainer
        imageCount={imageCount}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        imagesPerPage={imagesPerPage}
        setImagesPerPage={setImagesPerPage}
      />
    </Container>
  );
}

export default App;
