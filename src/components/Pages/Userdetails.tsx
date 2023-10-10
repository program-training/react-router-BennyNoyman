import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {User} from "./Users.tsx";
import {Button, Typography} from "@mui/material";
export type ContactsParams= {
    id: string;
}

export default function UserDetails() {
    const params = useParams<ContactsParams>()
    const [user, setUsers] = useState<User>();
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
                const user: User = await userData.json();
                setUsers(user);
            }catch (error) {
                if (error instanceof Error)
                    console.log(error);
            }
        }
        fetchItems()
    },[])
    return (
        <>
            <Typography>{user?.email}</Typography>
            <Typography>{user?.address?.city}{user?.address.street}</Typography>
            <Typography>{user?.phone}</Typography>
            <Link to={`/mission/${params.id}`}>
                <Button>Missions</Button>
            </Link>
            <Link to={'/'}>
                <Button>Home</Button>
            </Link>
        </>
    )
}