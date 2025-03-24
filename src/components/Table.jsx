const Table = ({headings, dataObj, type}) => {
    return(
        <table className="table">
            <thead>
                <tr>
                    {headings.map(
                        (heading, index) => {
                            return(
                                <th key={index}>{heading}</th>
                            )
                        }
                    )}
                </tr>
            </thead>
            <tbody>
                {dataObj.map(
                    (data, index) => {
                        return(
                            <tr key={index}>
                                <td>
                                    <div>
                                        {data.date}
                                    </div>
                                    <div>
                                        {data.description}
                                    </div>
                                </td>
                                {(type == "income" || type == "transaction") && <td>{data.income || "-"}</td>}
                                {(type == "expense" || type == "transaction") && <td>{data.expense || "-"}</td>}
                                {type == "transaction" && <td>{data.balance || "-"}</td>}
                            </tr>
                        )
                    }
                )}
            </tbody>
        </table>
    )
}

export default Table;