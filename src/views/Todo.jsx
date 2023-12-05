import { useRef, useState } from "react"
import { Container, Row, Col, Form, ListGroup, Button } from "react-bootstrap"
export default function Todo() {

    var [editedTask, setEditedTask] = useState({})
    var [newTask, setNewTask] = useState("")
    var [tasks, setTasks] = useState([])
    const inputRef = useRef()

    let handleNewTask = (ev) => {
        setNewTask(ev.target.value)
    }

    let handleTasks = (ev) => {
        ev.preventDefault()
        setTasks([...tasks, { text: newTask, done: false }])
        setNewTask('')
        inputRef.current.focus()
    }

    let handleFinish = (index) => {
        let editedCopy = tasks[index]
        let copyTasks = tasks;


        editedCopy.done = !editedCopy.done;
        setEditedTask(editedCopy)


        copyTasks.splice(index, 1, editedCopy)
        setTasks(copyTasks);
    }

    let handleDelete = (e, index) => {
        e.stopPropagation()
        let tasksCopy = tasks;

        tasksCopy.splice(index, 1)
        console.log(tasksCopy)
        // setTasks(tasksCopy)
    }

    return (
        <Container>
            <h1 className="m-4 text-center text-bg-secondary ">Todo list</h1>
            <h2>{tasks.length}</h2>
            <Form onSubmit={handleTasks}>
                <Row>
                    <Col md={9}>
                        <Form.Control
                            ref={inputRef}
                            type="text"
                            placeholder="Add new task"
                            value={newTask}
                            onChange={handleNewTask} />
                    </Col>
                    <Col md={3}>
                        <Form.Control
                            type="submit"
                            className="btn btn-primary"
                            value="Add New" />
                    </Col>
                </Row>
            </Form>
            <Row>
                <Col md={12}>
                    <ListGroup className="mt-4">
                        {
                            tasks.length > 0
                                ?
                                tasks.map((task, index) =>
                                    <ListGroup.Item
                                        className={`d-flex justify-content-between task ${task.done && 'bg-success'}`}
                                        key={index}
                                        onClick={() => handleFinish(index)}
                                    >
                                        {task.text}
                                        <Button variant="danger" onClick={(e) => handleDelete(e, index)}>Delete</Button>
                                    </ListGroup.Item>
                                )
                                : <h2 className="text-center">No tasks here</h2>
                        }
                    </ListGroup >
                </Col>
            </Row>

        </Container >
    )
}
