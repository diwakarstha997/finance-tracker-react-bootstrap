const TextContent = (props) => {
    const { content, minimumWidth="100%", className } = props;

    return(
        <div style={{ width: `min(${minimumWidth},100%)`}} className={className}>
            {content}
        </div>
    )
}

export default TextContent;