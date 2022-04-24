import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

const SearchContainer = ({ searchPhrase }) => {
  return (
    <Box py={8}>
      <TextField fullWidth defaultValue={searchPhrase} />
    </Box>
  );
};

export default SearchContainer;
