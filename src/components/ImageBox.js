import Grow from '@mui/material/Grow';
import ImageListItem from '@mui/material/ImageListItem';
import { useState } from 'react';

const ImageBox = ({ image }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Grow in={isLoaded}>
      <ImageListItem>
        <img
          src={image.src.portrait}
          alt={image.alt}
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
        />
      </ImageListItem>
    </Grow>
  );
};

export default ImageBox;
