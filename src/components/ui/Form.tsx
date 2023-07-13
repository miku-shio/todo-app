import { useState, FormEvent } from "react";
import { Button,TextField,Stack } from "@mui/material";

export const Form = ({setTodos}:any) => {
  const [value, setValue] = useState<string>('');
  const [buttonState, setButtonState] = useState<boolean>(true);

  const getKey = () => Math.floor(Math.random() * 1e5);

  const addTodo = (e: FormEvent) => {
    e.preventDefault();
    if (value) {
      setTodos((todos: any) => [...todos, {key:getKey(), task: value, isDone: false }]);
      setValue('');
      setButtonState(true);
    }
  }

  return (
    <form onSubmit={addTodo}>
      <Stack direction="column" sx={{gap:'10px 16px', flexDirection:{md:'row'}}} >
        <TextField sx={{ flex: 1 }} size="small" placeholder="TODOを入力してください" value={value}
          onChange={(e) => {
            setValue(e.target.value);
            const isFlag = e.target.value.trim() === '';
            setButtonState(isFlag);
          }}
        />
        <Button disabled={buttonState} type="submit" variant="contained" sx={{p:{xs:'8px',md:'4px 16px'}}}>TODOリストを追加</Button>
      </Stack>
    </form>
  )
}
