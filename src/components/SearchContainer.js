import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { useDebouncedCallback } from 'use-debounce';

const SearchContainer = ({ searchPhrase, setSearchPhrase }) => {
  const debounced = useDebouncedCallback((value) => {
    setSearchPhrase(value);
  }, 1000);

  return (
    <Box py={8}>
      <Container maxWidth="md">
        <TextField
          fullWidth
          defaultValue={searchPhrase}
          onChange={(e) => debounced(e.target.value)}
        />
      </Container>
    </Box>
  );
};

export default SearchContainer;
