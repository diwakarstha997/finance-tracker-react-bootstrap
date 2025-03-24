import { Button, Stack } from "react-bootstrap";
import { Link } from "react-router";

const NavMenu = () => {
    return(
        <div>
            <Stack direction="horizontal" gap={5} className="bg-color-grenishblue-light justify-content-center py-3">
                <Link className="nav-link bg-dark text-light mt-n-2 mb-n-2 p-3">Dashboard</Link>
                <Link className="nav-link">Transactions</Link>
                <Link className="nav-link">Income</Link>
                <Link className="nav-link">Expences</Link>
            </Stack>
        </div>
    )
}

export default NavMenu;