import { ButtonsContainer, Button } from "./styled";

const Buttons = ({
  tasks,
  hideCompleted,
  toggleHideCompleted,
  setAllCompleted,
}) => (
  <ButtonsContainer>
    {tasks.length > 0 && (
      <>
        <Button onClick={() => toggleHideCompleted()}>
          {hideCompleted ? "Show" : "Hide"} finished
        </Button>

        <Button
          onClick={() => setAllCompleted()}
          disabled={tasks.every(({ completed }) => completed)}
        >
         Complete all
        </Button>
      </>
    )}
  </ButtonsContainer>
);

export default Buttons;
