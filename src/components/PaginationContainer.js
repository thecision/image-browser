import TablePagination from '@mui/material/TablePagination';
const PaginationContainer = ({
  imageCount,
  pageNumber,
  setPageNumber,
  imagesPerPage,
  setImagesPerPage,
}) => {
  const onPageChange = (_, page) => {
    setPageNumber(page);
  };
  const onRowsPerPageChange = (event) => {
    setImagesPerPage(event.target.value);
  };
  return (
    <TablePagination
      component="div"
      count={imageCount}
      page={pageNumber}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      rowsPerPage={imagesPerPage}
      rowsPerPageOptions={[10, 25, 50]}
    />
  );
};

export default PaginationContainer;
