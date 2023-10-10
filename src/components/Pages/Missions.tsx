import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {Button, List, ListItem} from "@mui/material";
interface Task {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}
type Params = {
    id: string;
};
export default function Tasks(): JSX.Element {
    const [tasks, setTasks] = useState<Task[]>([]);
    const params = useParams<Params>();
    useEffect(() => {
        const getTasks = async (): Promise<void> => {
            try {
                const getTasks = await fetch(
                    `https://jsonplaceholder.typicode.com/comments?postId=${params.id}`
                );
                if (!getTasks.ok) {
                    throw new Error("server error");
                }
                const tasks: Task[] = await getTasks.json();
                setTasks(tasks);
            } catch (error) {
                if (error instanceof Error) console.log(error);
            }
        };
        getTasks();
    }, []);
    return (
        <>
            <List>
                {tasks.map((task) => (
                    <Link key={task.id} to={`/taskDetails/${task.id}`}>
                        <ListItem>{task.name}</ListItem>
                    </Link>
                ))}
            </List>
            <Link to={'/'}>
                <Button>Home</Button>
            </Link>
        </>
    );
}