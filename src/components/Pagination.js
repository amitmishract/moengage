import "./pagination.css";

function Pagination(props) {
  const { page, totalPage, onChange } = props;
  let pageArray = totalPage ? Array.from({ length: totalPage }) : [];

  return pageArray.length ? (
    <div className="pagination-wrapper">
      <button disabled={page <= 1} onClick={() => onChange(page - 1)}>
        &#8249;
      </button>
      {pageArray.map((val, index) => {
        return (
          <button
            key={index}
            onClick={() => onChange(index + 1)}
            className={`${page === index + 1 && "active-page"}`}
          >
            {index + 1}
          </button>
        );
      })}
      <button disabled={page === totalPage} onClick={() => onChange(page + 1)}>
        &#8250;
      </button>
    </div>
  ) : null;
}

export default Pagination;
