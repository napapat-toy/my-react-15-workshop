import { Box, Button, Container, IconButton, Paper, TextField, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';
import Navbar from "./navbar"
import { useState } from "react";

const Todolist = ({ todoContent, id, handleDelete, handleEdit }) => {
    return (
        <Paper elevation={4} sx={{ p: 2, m: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography >{todoContent}</Typography>
            <div>
                <Tooltip title="Edit">
                    <IconButton onClick={() => handleEdit(id)}>
                        <EditIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Delete">
                    <IconButton onClick={() => handleDelete(id)}>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            </div>
        </Paper>
    )
}

const Workshop8 = () => {

    const [todoLists, setTodoLists] = useState([]);
    const [todoInput, setTodoInput] = useState('');
    const [todoIsEdit, setTodoIsEdit] = useState(false);
    const [editedId, setEditedId] = useState('');
    const [inputError, setInputError] = useState(false);

    const handleInput = e => setTodoInput(e.target.value);

    const handleTodoList = () => {
        if (todoInput === '') {
            setInputError(true);
            console.log('Input');
        }
        else {
            setInputError(false);
            if (todoIsEdit) {
                const newTodos = [...todoLists];
                newTodos[editedId] = todoInput;
                setTodoLists(newTodos);
                setTodoIsEdit(false);
                setTodoInput('');
            }
            else {
                setTodoLists(prev => [...prev, todoInput]);
                setTodoInput('');
            }
        }
    }

    const handleDelete = (id) => setTodoLists(todoLists.filter((todoList, index) => id !== index));

    const handleEdit = (id) => {
        setTodoIsEdit(true);
        const findTodo = todoLists.find((todoList, index) => id === index);
        setTodoInput(findTodo);
        setEditedId(id);
    }

    return (
        <>
            <Navbar header="Workshop 8 TodoList App" />
            <Container maxWidth="md" >
                <Paper elevation={8} sx={{ p: 4 }}>
                    <Typography variant="h2" sx={{ p: 2, textAlign: 'center' }}>TodoList App</Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', m: 2 }} >
                        {!todoIsEdit ? (
                            <>
                                <TextField
                                    label="Add Todo"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleInput}
                                    value={todoInput}
                                    error={inputError}
                                />
                                <Button variant="contained" sx={{ ml: 1 }} onClick={handleTodoList}>เพิ่มข้อมูล</Button>
                            </>
                        ) : (
                            <>
                                <TextField
                                    label="Edit Todo"
                                    variant="outlined"
                                    fullWidth
                                    onChange={handleInput}
                                    value={todoInput}
                                    error={inputError}
                                />
                                <Button variant="contained" sx={{ ml: 1 }} onClick={handleTodoList}>แก้ไขข้อมูล</Button>
                            </>
                        )}

                    </Box>
                    {todoLists.map((list, index) => (
                        <Todolist key={index} todoContent={list} id={index} handleDelete={handleDelete} handleEdit={handleEdit} />
                    ))}
                </Paper>
            </Container>
        </>
    );
};

export default Workshop8;