import { useMediaQuery } from "react-responsive";
import { TodosSmall } from "../components/TodosSmall";
import { TodosLarge } from "../components/TodosLarge";

export const Todos = () => {
    const isDesktop = useMediaQuery({minWidth: 768});

    return (
        isDesktop ? <TodosLarge/> : <TodosSmall/>
    );
}