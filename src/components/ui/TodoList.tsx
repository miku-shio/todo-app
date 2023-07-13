import { Button, Stack, FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import styles from './TodoList.module.scss'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';

export const TodoList = ({ todos, setTodos }:any) => {

  const doneTodo = (index: number) => {
    const newTodos = todos.map((todo:any, todoIndex:number) => {
      if (todoIndex === index) {
        todo.isDone = !todo.isDone
      }
      return todo;
    });
    setTodos(newTodos);
    }


  const removeTodo = () => {
    setTodos(todos.filter((item: any) => !(item.isDone)))
  }

  const removeAllTodo = () => {
    setTodos([])
  }


  return (
    <>
      <FormGroup sx={{ minHeight: "200px" }}>
        {todos.length > 0 && (
          todos.map((todo: any, index: number) => (
            <FormControlLabel key={todo.key} className={todo.isDone ? styles.hide : ''} control={<Checkbox icon={<RadioButtonUncheckedRoundedIcon />} checkedIcon={<CheckCircleRoundedIcon />} />} label={todo.task} onChange={() => doneTodo(index)} />
          ))
        )}
      </FormGroup>
      <Stack direction="column" mt={4} sx={{gap:'10px 16px', flexDirection:{md:'row'}}}>
        <Button variant="contained" sx={{width:'100%',p:'8px', textTransform:'unset'}} startIcon={<DeleteIcon />} onClick={removeTodo} >チェックしたTodoを削除</Button>
        <Button variant="outlined" sx={{width:'100%',p:'8px', textTransform:'unset'}} startIcon={<DeleteIcon />} onClick={removeAllTodo} >全てのTodoを削除</Button>
      </Stack>
    </>
  )
}
