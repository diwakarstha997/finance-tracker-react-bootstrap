import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router";

const activeClassStyle = "bg-dark text-light mt-n-2 mb-n-2 p-3"

const NavMenu = ({activeMenuItem}) => {
    return(
        <div>
            <Stack direction="horizontal" gap={5} className="bg-color-grenishblue-light justify-content-center py-3">
                <Link className={`nav-link ${activeMenuItem == "dashboard" && activeClassStyle}`}>Dashboard</Link>
                <Link className={`nav-link ${activeMenuItem == "transaction" && activeClassStyle}`}>Transactions</Link>
                <Link className={`nav-link ${activeMenuItem == "income" && activeClassStyle}`}>Income</Link>
                <Link className={`nav-link ${activeMenuItem == "expense" && activeClassStyle}`}>Expenses</Link>
            </Stack>
        </div>
    )
}

export default NavMenu;