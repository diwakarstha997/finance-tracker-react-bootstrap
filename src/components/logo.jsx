import { Stack } from "react-bootstrap";
import logo from "../assets/logo.webp"

const Logo = () => {
    return(
        <Stack direction="horizontal" gap={3}>
            <div className="logo-wrapper">
                <img src={logo} alt="logo" width="100%"/>
            </div>
            <div>
                <h4 className="font-weight-bold">
                    FinanceTracker
                </h4>
            </div>
        </Stack>
    )
}

export default Logo;