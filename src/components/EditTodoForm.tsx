import { useForm } from "react-hook-form";
import styles from '../css/CreateTodoForm.module.scss';
import { toast } from "react-toastify";
import { useUpdateTodo } from "../hooks/useTodos";
import type { UpdateTodoRequest } from "../types/api";
import type { Todo } from "../types/todo";

interface EditTodoFormProps {
    onCancel: () => void;
    todo: Todo;
}

export const EditTodoForm = ({onCancel, todo}:EditTodoFormProps) => {
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm<UpdateTodoRequest>();
    const updateTodo = useUpdateTodo();

    const onSubmit = async (data: UpdateTodoRequest) => {
        try {
            await updateTodo.mutateAsync({id: todo.id, data: data});
            toast.success("Todo updated.")
            onCancel();
        } catch (err) {
            console.warn("Update todo failed.", err);
            toast.error("Update todo failed.")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.mainContainer}>
            <h1>Edit todo</h1>

            <div className={styles.block}>
                <label>Title</label>
                <input defaultValue={todo.title} type="text" {...register("title", {maxLength:{value:100, message:"Maximum 100 characters allowed"}})} placeholder="Title..."/>
                {errors.title && <p>{errors.title.message}</p>}
            </div>

            <div className={styles.block}>
                <label>Description</label>
                <input defaultValue={todo.description} type="text" {...register("description", {maxLength:{value:200, message:"Maximum 200 characters allowed"}})} placeholder="Description..."/>
                {errors.description && <p>{errors.description.message}</p>}
            </div>

            <div className={styles.block}>
                <label>Due</label>
                <input defaultValue={todo.due} type="date" {...register("due", {pattern:{value:/^\d{4}-\d{2}-\d{2}$/, message:"Date must be in YYYY-MM-DD format"}})}/>
                {errors.due && <p>{errors.due.message}</p>}
            </div>

            <button type="submit" disabled={isSubmitting} className={styles.add}>Update</button>
            <button disabled={isSubmitting} className={styles.cancel} onClick={() => onCancel()}>Cancel</button>
        </form>
    );
}