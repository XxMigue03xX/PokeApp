import "./PagesComponent.css"

const PagesComponent = ({ totalPages, onChangePage, currentPage, onNextPage, onBackPage }) => {
    const pagesArray = Array(totalPages)
    .fill()
    .map((_, i) => i+1);

    return (
        <div className="pagination-container">
            <button className="btn" onClick={() => onBackPage()}>Back</button>

            {pagesArray.map(page => (
                <button
                    className="buttons"
                    style={{
                        color: currentPage === page ? "white" : "black",
                        background: currentPage === page ? "#DD1A1A" : "white"
                    }}
                    key={page}
                    onClick={() => onChangePage(page)}>
                        {page}
                </button>
            ))}
            
            <button className="btn" onClick={() => onNextPage()}>Next</button>
        </div>
    )
}

export default PagesComponent