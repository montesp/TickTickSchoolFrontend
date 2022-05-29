import React, {Fragment, useState} from "react";

import { LogoTitle } from "./header/logo-title/LogoTItle";
import { HeaderTask } from "./header/HeaderTask";
import { Username } from "./header/username/Username";
import { LogOut } from "./header/log-out/LogOut";
import { InfoContainer } from "./header/info-container/InfoContainer";
import { HeaderT } from "./header/header-info/HeaderInfo";
import { MainTaskContainer } from "./main/MainTaskContainer";
import { SideBar } from "./main/side-bar/SideBar";
import { ButtonSide } from "./main/button-side/ButtonSide";
import { MainTask } from "./main/main-task/MainTask";
import { Task } from "./main/task/Task";
import { ButtonAddTask } from "./main/button-add-task/ButtonAddTask";

// Modals
import { Modal } from "../../modal/Modal";
import { AddTask } from "../../modal/AddTask";

// Icons
import plusIcon from "../../assets/icons/plus.svg";
import subjectIcon from "../../assets/icons/file.svg"
import documentIcon from '../../assets/icons/file-plus-2.svg';

function TaskView(){
    const localStorageTask = localStorage.getItem('TASKS_V1');
    let parsedTasks;

    if(!localStorageTask){
        localStorage.setItem('TASKS_V1', JSON.stringify([]));
        parsedTasks = [];
    } else {
        parsedTasks = JSON.parse(localStorageTask);
    }

    console.log(parsedTasks);

    const [modalAdd, setModalAdd] = useState(false);
    const [tasks, setTasks] = useState(parsedTasks);

    const deleteTask = (key) => {
        const taskIndex = tasks.findIndex(task => task.key === key);
        const newTasks = [...tasks];
        newTasks.splice(taskIndex, 1);
        saveTasks(newTasks)
    }

    const completeTask = (key) => {
        const taskIndex = tasks.findIndex(task => task.key === key);
        const newTasks = [...tasks];
        newTasks[taskIndex].completed =  !newTasks[taskIndex].completed;
        saveTasks(newTasks)
      };

    const saveTasks = (newTasks) => {
        const stringifiedTaks = JSON.stringify(newTasks);
        localStorage.setItem('TASKS_V1', stringifiedTaks);
        setTasks(newTasks);
    }

    const addTask = (title, subject, state , description) => {
        const newTasks = [...tasks];
        const valueTest = false;
        const newKey = newTasks.length + 1;

        for(let i = 0; i < newTasks.length; i++ ){
            
        }

        newTasks.push({
            key: newKey,
            name: title,
            subject: subject,
            description: description,
            status: state,
            completed: false,
        })

        saveTasks(newTasks);
    }

    return(
        <Fragment>
            <HeaderT>
                <LogoTitle/>
                <HeaderTask>
                    <InfoContainer>
                        <Username
                            user="Paco"
                        />
                        <LogOut
                            text="Cerrar sesion"
                        />
                    </InfoContainer>
                </HeaderTask>
            </HeaderT>
            <MainTaskContainer>
                <SideBar>
                    <ButtonSide
                    alt="Plus icon"
                    src={plusIcon}
                    text={"Tareas"}
                    route='../tareas'
                    />
                    <ButtonSide
                    alt="Subject icon"
                    src={subjectIcon}
                    text={"Materias"}
                    route='../materias'
                    />
                </SideBar>
                <MainTask>
                    {tasks.map(task => (
                        <Task
                        key={task.key}
                        title={task.name}
                        subject={task.subject}
                        state={task.status}
                        description={task.description}
                        onDelete={()=> deleteTask(task.key)}
                        onComplete={()=> completeTask(task.key)}
                        completed={task.completed}
                        />
                    ))}

                    <ButtonAddTask
                        icon={documentIcon}
                        modalAdd={modalAdd}
                        setModalAdd={setModalAdd}
                    />
                </MainTask>
            </MainTaskContainer>

            {!!modalAdd && (
                <Modal>
                    <AddTask
                        modalAdd={modalAdd}
                        setModalAdd={setModalAdd}
                        addTask={addTask}
                    />
                </Modal>
            )}

        </Fragment>

    )
}

export {TaskView};