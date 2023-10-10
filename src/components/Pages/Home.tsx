import {Link} from "react-router-dom";
import {Button} from "@mui/material";

export default function Home() {
    return(
        <>
            <Link to={'/users'}>
                <Button>Users</Button>
            </Link>
            <Link to={'/products'}>
                <Button>Products</Button>
            </Link>
        </>
    )
}