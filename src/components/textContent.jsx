const TextContent = (props) => {
    const { content, fontWeight="none", fontSize, minimumWidth="100%", addClass } = props;

    return(
        <div style={{ fontSize, fontWeight, width: `min(${minimumWidth},100%)`}} className={addClass}>
            {content}
        </div>
    )
}

export default TextContent;