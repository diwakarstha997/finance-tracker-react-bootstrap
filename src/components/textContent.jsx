const TextContent = (props) => {
    const { content, fontSize, minimumWidth } = props;

    return(
        <div style={{ fontSize, width: `min(${minimumWidth},100%)`}}>
            {content}
        </div>
    )
}

export default TextContent;