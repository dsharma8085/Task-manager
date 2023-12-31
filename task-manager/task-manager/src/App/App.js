import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Container from "./Container";
import Section from "./Section";
import { useTasks } from "./useTasks";

function App() {
  const {
    tasks,
    hideCompleted,
    toggleHideCompleted,
    removeTask,
    toggleTaskCompleted,
    setAllCompleted,
    addNewTask,
  } = useTasks();

  return (
    <Container>
      <header>
        <h1>Task Manager</h1>
      </header>

      <Section
        title="Add a new task"
        content={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="To-do list"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideCompleted={hideCompleted}
            toggleHideCompleted={toggleHideCompleted}
            setAllCompleted={setAllCompleted}
          />
        }
        content={
          <Tasks
            tasks={tasks}
            hideCompleted={hideCompleted}
            removeTask={removeTask}
            toggleTaskCompleted={toggleTaskCompleted}
          />
        }
      />
    </Container>
  );
}

export default App;
