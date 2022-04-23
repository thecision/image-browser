import TablePagination from '@mui/material/TablePagination';
const PaginationContainer = () => {
  const onPageChange = () => {
    console.log('Page changed');
  };
  return (
    <TablePagination
      rowsPerPageOptions={[10, 25, 50]}
      rowsPerPage={10}
      page={0}
      count={20}
      onPageChange={onPageChange}
    />
  );
};

export default PaginationContainer;
