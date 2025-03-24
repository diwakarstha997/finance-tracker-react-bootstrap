import { Col, Container, Row, Stack } from "react-bootstrap";
import Navbar from "../../components/Navbar";
import NavMenu from "../../components/NavMenu";
import Table from "../../components/Table";

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

const DashboardPage = () => {
    return(
        <Container>
            <Navbar user="test"/>
            <NavMenu />

            {/* User Page Layout */}
            <Stack className="mt-1">
                <div style={{width: "100%", height: "200px"}} className="bg-dark"></div>
                <div style={{width: "100%"}} className="pb-5">
                    <Container style={{width: "80%", marginTop: "-100px"}} className="border border-dark bg-color-grenishblue-light">
                        <div style={{marginTop: "-30px"}} className="border border-dark shadow bg-color-grenishblue py-5 px-5 mx-5 rounded-5">Balance</div>

                        {/* Dashboard Overview Section */}
                        <div className="mx-5 my-5">
                            <div className="border-bottom border-dark border-2 heading-6 fw-bold py-1">
                                Overview
                            </div>
                            <Row className="mt-4 mx-3">
                                <Col>
                                    <div className="border border-dark border-2 shadow bg-color-grenishblue py-5 px-5 rounded-3">Income</div>
                                </Col>
                                <Col>
                                    <div className="border border-dark border-2 shadow bg-color-grenishblue py-5 px-5 rounded-3">Expence</div>
                                </Col>
                            </Row>
                        </div>

                        {/* Dashboard Cashflow Graph Section */}
                        <div className="mx-5 my-5">
                            <div className="border-bottom border-dark border-2 heading-6 fw-bold py-1">
                                CashFlow
                            </div>
                            <Row className="mt-4 mx-3">
                                <Col>
                                    <div style={{height: "300px"}} className="border border-dark border-2 shadow bg-color-grenishblue py-5 px-5 rounded-3">Income</div>
                                </Col>
                                <Col>
                                    <div style={{height: "300px"}} className="border border-dark border-2 shadow bg-color-grenishblue py-5 px-5 rounded-3">Expence</div>
                                </Col>
                            </Row>
                        </div>

                        {/* Dashboard Transaction Table Section */}
                        <div className="mx-5 my-5">
                            <div className="border-bottom border-dark border-2 heading-6 fw-bold py-1">
                                Transactions
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

export default DashboardPage;