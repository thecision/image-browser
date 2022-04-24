import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImagesContainer = ({ images }) => {
  return (
    <>
      {images.length > 0 ? (
        <ImageList cols={5}>
          {images.map((image) => (
            <ImageListItem key={image.id}>
              <img src={image.src.portrait} alt={image.alt} loading="lazy" />
            </ImageListItem>
          ))}
        </ImageList>
      ) : (
        <Box py={10}>No results. :-/</Box>
      )}
    </>
  );
};

export default ImagesContainer;
