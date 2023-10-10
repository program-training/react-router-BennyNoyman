import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ContactsParams} from "./Userdetails.tsx";
import {Button, Typography} from "@mui/material";

interface Task {
    postId: number;
    id: number;
    title: string;
    body: string;
}

export default function TaskDetails() {
    const params = useParams<ContactsParams>()
    const [task, setTasks] = useState<Task>();
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const taskData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
                const task: Task = await taskData.json();
                setTasks(task);
            }catch (error) {
                if (error instanceof Error)
                    console.log(error);
            }
        }
        fetchItems()
    },[])
    return(
        <>
            <Typography>{task?.id}</Typography>
            <Typography>{task?.title}</Typography>
            <Typography>{task?.body}</Typography>
            <Link to={'/'}>
                <Button>Home</Button>
            </Link>
        </>
    )
}