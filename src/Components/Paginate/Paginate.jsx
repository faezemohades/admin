import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginate = ({ totalPages, handlePageChange, currentPage }) => {

    return (

        <Pagination className="my-2 justify-content-end">
            <PaginationItem>
                <PaginationLink
                    previous
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                />
            </PaginationItem>
            <PaginationItem active={currentPage === 1}>
                <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
            </PaginationItem>
            {currentPage > 2 && (
                <PaginationItem>
                    <PaginationLink disabled>...</PaginationLink>
                </PaginationItem>
            )}
            {currentPage !== 1 && currentPage !== totalPages && (
                <PaginationItem active>
                    <PaginationLink>{currentPage}</PaginationLink>
                </PaginationItem>
            )}
            {currentPage < totalPages - 1 && (
                <PaginationItem>
                    <PaginationLink onClick={() => handlePageChange(currentPage + 1)}>
                        {currentPage + 1}
                    </PaginationLink>
                </PaginationItem>
            )}
            {currentPage < totalPages - 1 && (
                <PaginationItem>
                    <PaginationLink disabled>...</PaginationLink>
                </PaginationItem>
            )}
            <PaginationItem active={currentPage === totalPages}>
                <PaginationLink onClick={() => handlePageChange(totalPages)}>
                    {totalPages}
                </PaginationLink>
            </PaginationItem>
            <PaginationItem>
                <PaginationLink
                    next
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                />
            </PaginationItem>
        </Pagination>
    )
}

export default Paginate;