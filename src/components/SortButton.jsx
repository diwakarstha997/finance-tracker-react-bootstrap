import { Button } from "react-bootstrap";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const SortButton = ({label, className}) => {
    return(
        <Button className={`border border-secondary border-1 rounded-5 bg-transparent text-dark px-4 ${className}`}>
            {label}
            <IoIosArrowDown className="ps-1 fs-5"/>
        </Button>
    )
}

export default SortButton;