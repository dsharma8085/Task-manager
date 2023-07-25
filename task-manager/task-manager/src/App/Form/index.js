import { useState, useRef } from "react";
import { StyledForm, Input, Button } from "./styled";

const Form = ({ addNewTask }) => {
  const [taskContent, setTaskContent] = useState("");

  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();

    const trimmedTaskContent = taskContent.trim();

    if (trimmedTaskContent !== "") addNewTask(trimmedTaskContent);

    setTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm onSubmit={onFormSubmit}>
      <Input
        placeholder="What is there to do?"
        value={taskContent}
        ref={inputRef}
        onChange={({ target }) => setTaskContent(target.value)}
      />
      <Button>Add a task</Button>
    </StyledForm>
  );
};

export default Form;
