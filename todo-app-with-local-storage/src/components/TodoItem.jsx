import React, { useState, useEffect, useRef } from 'react';
import { useTodo } from '../context';

function TodoItem({ todo }) {
    const { toggleComplete, updateTodo, deleteTodo } = useTodo();
    const [isTodoEditable, setIsTodoEditable] = useState(false);
    const [todoMsg, setTodoMsg] = useState(todo.todo);
    const inputRef = useRef(null);

    const toggleCompleted = () => {
        toggleComplete(todo.id);
    };

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg });
        setIsTodoEditable(false);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && isTodoEditable) {
            editTodo();
        }
    };

    useEffect(() => {
        if (isTodoEditable && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isTodoEditable]);

    return (
        <div
            className={` basis-[225px] cursor-pointer  transition-transform ease-in-out hover:-translate-y-1 overflow-hidden   flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${
                todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
            }`}
        >
            <input
                type="checkbox"
                className="cursor-pointer"
                checked={todo.completed}
                onChange={toggleCompleted}
                aria-label={todo.completed ? "Mark todo incomplete" : "Mark todo complete"}
            />
            <input
                ref={inputRef}
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    isTodoEditable ? "border-black/10 px-2" : "border-transparent"
                } ${todo.completed ? "line-through" : ""}`}
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                onKeyDown={handleKeyDown}
                onBlur={isTodoEditable ? editTodo : null}
                readOnly={!isTodoEditable}
                aria-label="Todo item content"
            />
            <button
                className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded-lg border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={() => {
                    if (todo.completed) return;
                    if (isTodoEditable) editTodo();
                    else setIsTodoEditable(true);
                }}
                disabled={todo.completed}
                aria-label={isTodoEditable ? "Save todo" : "Edit todo"}
            >
                {isTodoEditable ? "💾" : "✏️"}
            </button>
            <button
                className="inline-flex items-center justify-center w-8 h-8 text-sm border rounded-lg border-black/10 bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={() => deleteTodo(todo.id)}
                aria-label="Delete todo"
            >
                ❌
            </button>
        </div>
    );
}

export default React.memo(TodoItem);