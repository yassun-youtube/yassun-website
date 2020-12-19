import Link from "next/link";
import classNames from 'classnames';

export default function Pagination({ pageNumber, totalPages}) {
  return (
    <div className="container">
      <div className="wrapper">
        {pageList(pageNumber, totalPages).map((page, key) => {
          const linkClass = classNames('link', { currentLink: pageNumber == page })

          return (
            <Link href={`/video-lists/${page}`} key={key}>
              <a className={linkClass}>
                { page }
              </a>
            </Link>
          )
        })}
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
        }
        .wrapper {
          display: flex;
        }
        .link {
          padding: 12px;
        }
        .currentLink {
          border-bottom: 2px solid #FF9800; 
        }
      `}</style>
    </div>
  )
}

function pageList(currentPage, totalPages) {
  const firstPage = (currentPage - 2) <= 0 ? 1 : (currentPage - 2)
  const lastPage = (currentPage + 2) > totalPages ? totalPages : (currentPage + 2)

  return [...new Array(lastPage - firstPage + 1)].map((_, i) => i + firstPage)
}
