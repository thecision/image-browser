import Grid from '@mui/material/Grid';
const ImagesContainer = () => {
  return (
    <Grid container spacing={2} columns={5}>
      {Array.from({ length: 10 }).map((_, index) => (
        <Grid item xs={1} key={index}>
          img
        </Grid>
      ))}
    </Grid>
  );
};

export default ImagesContainer;
