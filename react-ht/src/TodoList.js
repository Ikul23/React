import React, { useState } from 'react';
import { TextField, Button, List, ListItem, ListItemText, IconButton, Card, Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Добавление задачи
  const handleAddTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { id: Date.now(), text: task }]);
      setTask('');
    }
  };

  // Удаление задачи
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto', mt: 4 }}>
      <Typography variant="h5" align="center" gutterBottom>
        Список дел
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
        <TextField
          label="Новая задача"
          variant="outlined"
          fullWidth
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <Button variant="contained" onClick={handleAddTask}>
          Добавить
        </Button>
      </Box>
      <Card>
        <List>
          {tasks.map((task) => (
            <ListItem
              key={task.id}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleDeleteTask(task.id)}>
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText primary={task.text} />
            </ListItem>
          ))}
        </List>
      </Card>
    </Box>
  );
};

export default TodoList;