import { Col, Container, Placeholder, Row, Stack } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import NavMenu from "../../components/NavMenu";
import Table from "../../components/Table";
import StackedBar from "../../components/StackedBar";
import InputField from "../../components/InputField";
import SortButton from "../../components/SortButton";

const dummyData = [
    {
        date: "Date",
        description: "Description",
        income: "$1000",
        expense: "",
        balance: "$1000"
    },
    {
        date: "Date",
        description: "Description",
        income: "$1000",
        expense: "",
        balance: "$1000"
    },
    {
        date: "Date",
        description: "Description",
        income: "$1000",
        expense: "",
        balance: "$1000"
    },
    {
        date: "Date",
        description: "Description",
        income: "$1000",
        expense: "",
        balance: "$1000"
    },
    {
        date: "Date",
        description: "Description",
        income: "$1000",
        expense: "",
        balance: "$1000"
    }
]

const TransactionPage = () => {
    return(
        <Container>
            <Navbar user="test"/>
            <NavMenu activeMenuItem="transaction"/>

            {/* User Page Layout */}
            <Stack className="mt-1">
                <div style={{width: "100%", height: "200px"}} className="bg-dark"></div>
                <div style={{width: "100%"}} className="pb-5">
                    <Container style={{width: "80%", marginTop: "-100px"}} className="border border-dark bg-color-grenishblue-light">
                        <div style={{marginTop: "-30px"}} className="border border-dark shadow bg-color-grenishblue py-5 px-5 mx-5 rounded-5">Balance</div>

                        {/* Transaction Last 30 Days Section */}
                        <div className="mx-5 my-5">
                            <div className="border-bottom border-dark border-2 heading-6 fw-bold py-1">
                                Last 30 Days
                            </div>
                            <div>
                                <StackedBar items={[{name:"Income",color:"bg-success", value:"3000"},{name:"Expense",color:"bg-danger", value:"3000"},{name:"Balance",color:"bg-light", value:"2000"}]} totalValue="8000"/>
                            </div>

                        </div>

                        {/* Dashboard Transaction Table Section */}
                        <div className="mx-5 my-5">
                            <div className="border-bottom border-dark border-2 heading-6 fw-bold py-1">
                                Transactions
                            </div>
                            <div className="mt-4 mx-3">
                                <Row>
                                    <Col>
                                        <InputField inputFieldAttribute={{placeholder:"Search transactions"}}/>
                                    </Col>
                                    <Col className="align-content-center">
                                        <SortButton label="Date" className="mx-2"/>
                                        <SortButton label="Amount" className="mx-2"/>
                                    </Col>
                                </Row>
                            </div>
                            <div className="mt-4 mx-3">

                                {/* Table Component table heads -> heading, table data -> data, type -> (income, expense, transaction) */}
                                <Table headings={["Description","Income($)","Expense($)","Balance($)"]} dataObj={dummyData} type="transaction"/>

                            </div>
                        </div>
                    </Container>
                </div>
            </Stack>
        </Container>
    )
}

export default TransactionPage;