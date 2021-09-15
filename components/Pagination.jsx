import Link from "next/link";

const Pagination = ({total, page, perPage}) => {
    const lastPage = Math.ceil(total / perPage);

    return (
        <div>
            {page > 1 && <Link href={`/rooms?page=${page-1}`}>
                <a className={"button"}>Prev</a>
            </Link>}

            {page < lastPage && <Link href={`/rooms?page=${page+1}`}>
                <a className={"button"}>Next</a>
            </Link>}
        </div>
    );
};

export default Pagination;