import TablePagination from '@mui/material/TablePagination';
const PaginationContainer = ({ imageCount, pageNumber }) => {
  const onPageChange = () => {
    console.log('Page changed');
  };
  return (
    <TablePagination
      component="div"
      count={imageCount}
      page={pageNumber}
      onPageChange={onPageChange}
      rowsPerPage={10}
      rowsPerPageOptions={[10, 25, 50]}
    />
  );
};

export default PaginationContainer;
