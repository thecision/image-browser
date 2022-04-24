import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImagesContainer = ({ images }) => {
  return (
    <ImageList cols={5}>
      {images.map((image) => (
        <ImageListItem key={image.id}>
          <img src={image.src.portrait} alt={image.alt} loading="lazy" />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImagesContainer;
