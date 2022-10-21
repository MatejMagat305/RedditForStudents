function Hyperlink({href, linkText}){

    return (
        <a
            href={href}
            className={"text-base font-light text-blue-400"}
        >
            {linkText}
        </a>
    )
}

export default Hyperlink;
