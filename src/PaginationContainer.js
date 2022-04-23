import TablePagination from '@mui/material/TablePagination';
const PaginationContainer = () => {
  const onPageChange = () => {
    console.log('Page changed');
  };
  return (
    <TablePagination
      component="div"
      count={20}
      page={0}
      onPageChange={onPageChange}
      rowsPerPage={10}
      rowsPerPageOptions={[10, 25, 50]}
    />
  );
};

export default PaginationContainer;
