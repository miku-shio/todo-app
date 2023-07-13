import { useState } from "react"
import { Container,Box,Stack } from "@mui/material"

import { Item } from "../types/item"

import { Form } from "../ui/Form"
import { TodoList } from "../ui/TodoList"


const initialTodoList = [
  {
    key: 1,
    task: 'ご飯を作る',
    isDone: false
},
  {
    key: 2,
    task: '宿題をする',
    isDone: false
  },
  {
    key: 3,
    task: 'お風呂掃除する',
    isDone: false
},
]


export const Todo = () => {
  const [todos,setTodos] = useState<Item[]>(initialTodoList)

  return (
    <Container sx={{p:'0 20px',m:'40px auto'}}>
      <Box sx={{ background: '#fff', borderRadius: '20px', p: { xs:'40px 24px',md:'40px'}}}>
        <Box sx={{width:{md:'500px'},m:'auto'}}>
          <h1 className="heading">TODOリスト</h1>
          <Stack spacing={2} mt={4} useFlexGap>
            <Form setTodos={setTodos} />
            <TodoList todos={todos} setTodos={setTodos} />
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
