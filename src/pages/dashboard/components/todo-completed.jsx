import { Input, Button, Typography, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useAppContext } from "../../../contexts/app-context";

function TodoCompleted() {
  const { todos, handleRemoveCompletedTodo } = useAppContext();
  const todosCompleted = todos.filter((todo) => todo.completed);

  console.log("todosCompleted", todosCompleted);
  return (
    <>
      <div className="flex">
        <Input type="text" placeholder="Please input text" className="mr-2" />
        <Button type="primary">Search</Button>
      </div>
      <div className="my4">
        {todosCompleted.map((todo) => (
          <div key={todo.id} className="flex items-center justify-between mb-4">
            <Typography>{todo.title}</Typography>
            <Tooltip title="Delete">
              <Button
                danger
                shape="circle"
                icon={<DeleteOutlined />}
                onClick={() => handleRemoveCompletedTodo(todo.id)}
              />
            </Tooltip>
          </div>
        ))}
      </div>
    </>
  );
}

export default TodoCompleted;
