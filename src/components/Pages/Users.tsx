import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {Button, List, ListItem} from "@mui/material";


export interface User {
    id: string;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}

export default function UsersFromServer(): JSX.Element {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const usersData = await fetch('https://jsonplaceholder.typicode.com/users');
                const users: User[] = await usersData.json();
                setUsers(users);
                console.log(users);
            }catch (error) {
                if (error instanceof Error)
                    console.log(error);
            }
        }
        fetchItems()
    },[])

    return (<>
        <List>
            {users.map(user => <Link key={user.id} to={`/${user.id}`}><ListItem>{user.name}</ListItem></Link>)}
        </List>
        <Link to={'/'}>
            <Button>Home</Button>
        </Link>
    </>)
}
