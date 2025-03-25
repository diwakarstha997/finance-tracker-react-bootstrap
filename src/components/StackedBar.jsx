import { Col, Row, Stack } from "react-bootstrap";

const StackedBar = (props) => {
    const { items, totalValue } = props;

    return(
        <>
            {/* Display Bar */}
            <Stack direction="horizontal" className="border border-dark border-3 mt-4 mx-3">
            {items.map(
                        (item, index) => {
                            const width = item.value/totalValue*100;
                            return(
                                <div style={{width:`${width}%`}}key={index} className={`text-center ${item.color}`}>
                                    {item.value}
                                </div>
                            )
                        }
                    )}
            </Stack>

            {/* Label indexing */}
            <Stack className="mt-4 mx-3">
            {items.map(
                        (item, index) => {
                            return(
                                <Row key={index} className="my-1" >
                                    <Col xs={2}>
                                        {item.name}:
                                    </Col> 
                                    <Col style={{width:"20px", height: "20px"}} xs={1} className={`border border-dark border-3 px-2 ${item.color}`}>
                                    </Col>

                                </Row>
                            )
                        }
                    )}
            </Stack>
        </>
    )
}

export default StackedBar;