import { useState } from "react"
import { Container, Row, Col, Form, ListGroup } from "react-bootstrap"
export default function Todo() {

    var [tasks, setTasks] = useState([])
    var [newTask, setNewTask] = useState("")

    let handleNewTask = (ev) => {
        setNewTask(ev.target.value)
    }

    let handleTasks = (ev) => {
        ev.preventDefault()
        setTasks([...tasks, newTask])
        setNewTask('')
    }

    let handleDelete = (index) => {
        console.log(index)
    }

    return (
        <Container>
            <h1 className="m-4 text-center text-bg-secondary ">Todo list</h1>
            <h2>{tasks.length}</h2>
            <Form onSubmit={handleTasks}>
                <Row>
                    <Col md={9}>
                        <Form.Control
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
                                    <ListGroup.Item key={index}>{task} <button onClick={() => handleDelete(index)}>Delete</button></ListGroup.Item>
                                )
                                : <h2 className="text-center">No tasks here</h2>
                        }
                    </ListGroup >
                </Col>
            </Row>

        </Container >
    )
}
