import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const ImagesContainer = () => {
  return (
    <ImageList cols={5}>
      {Array.from({ length: 10 }).map((_, index) => (
        <ImageListItem key={index}>
          <img
            src="https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800"
            alt="Alt text"
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default ImagesContainer;
