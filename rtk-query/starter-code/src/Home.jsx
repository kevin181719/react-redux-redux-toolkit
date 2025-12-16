import { useState } from "react";
import Task from "./TaskItem";
import { Link } from "react-router-dom";
import {
  useGetTasksQuery,
  useAddTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation,
} from "./redux/apiSlice";

export default function Home() {
  const [newTask, setNewTask] = useState("");

  const { data: tasksList = [], isLoading, isError } = useGetTasksQuery();

  const [addTask] = useAddTaskMutation();
  const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();

  return (
    <div className="flex h-auto justify-center bg-gray-900 p-4">
      <div className="w-full max-w-md rounded-lg bg-gray-800 p-6 text-gray-200">
        <h4 className="mb-4 text-lg font-semibold">My Tasks</h4>

        {/* ADD TASK */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask({ value: newTask, completed: false });
            setNewTask("");
          }}
          className="flex gap-2 mb-4"
        >
          <input
            className="flex-grow bg-transparent border px-2"
            placeholder="Add task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            required
          />
          <button className="text-indigo-400">Add</button>
        </form>

        {/* TASK LIST */}
        {isLoading && <p>Loading...</p>}
        {isError && <p>Something went wrong</p>}
        {tasksList.map((task) => (
          <Task
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
          />
        ))}

        <Link to="/contact" className="block mt-4 text-sm text-gray-400">
          Contact
        </Link>
      </div>
    </div>
  );
}