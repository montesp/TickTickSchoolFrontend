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
import { TableContainer } from "./main/table-subject/TableContainer";
import { TableSubject } from "./main/table-subject/TableSubject";
import { RowCeld } from "./main/table-subject/RowCeld";
import { ButtonAddTask } from "./main/button-add-task/ButtonAddTask";

// Icons
import plusIcon from "../../assets/icons/plus.svg";
import subjectIcon from "../../assets/icons/file.svg";
import documentIcon from '../../assets/icons/file-plus-2.svg';
import Delete from '../../assets/icons/x.svg';


// Modals 
import { Modal } from "../../modal/Modal";
import { AddSubject } from "../../modal/AddSubject";


// const data = [
//     {
//       key:1,
//       subject: "Gestion de proyectos",
//       teacher: 'Manuel Irigoyen',
//       classroom: 'B3' ,
//     },
//     {
//         key:2,
//         subject: "Gestion de proyectos",
//         teacher: 'Manuel Irigoyen',
//         classroom: 'B3',
//       },
//       {
//         key:3,
//         subject: "Gestion de proyectos",
//         teacher: 'Manuel Irigoyen',
//         classroom: 'C1',
//       },
//       {
//         key:4,
//         subject: "Gestion de proyectos",
//         teacher: 'Manuel Irigoyen',
//         classroom: 'F6',
//       },
// ]

function SubjectView(){
    const localStorageSubject = localStorage.getItem('SUBJECTS_V1');
    let parsedSubject;

    if(!localStorageSubject){
        localStorage.setItem('SUBJECTS_V1', JSON.stringify([]));
        parsedSubject = [];
    } else {
        parsedSubject = JSON.parse(localStorageSubject);
    }


    const [modalAddS, setModalAddS] = useState(false);
    const [subjects, setSubjects] = useState(parsedSubject);

    const deleteSubject = (key) => {
        console.log(key);
        console.log(subjects);
        const subjectIndex = subjects.findIndex(subject => subject.key === key);
        const newSubjects = [...subjects];
        newSubjects.splice(subjectIndex, 1);
        saveSubjects(newSubjects);
    }


    const saveSubjects = (newSubjects) => {
        const stringifiedTaks = JSON.stringify(newSubjects);
        localStorage.setItem('SUBJECTS_V1', stringifiedTaks);
        setSubjects(newSubjects);
    }

    const addSubject = (subject, teacher, classroom) => {
        const newSubjects = [...subjects];
        const newKey = newSubjects.length + 1;

        newSubjects.push({
            key: newKey,
            subject: subject,
            teacher: teacher,
            classroom: classroom,
        })

        saveSubjects(newSubjects);
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
                <TableContainer>
                    <TableSubject>
                        {parsedSubject.map(subject => (
                            <RowCeld
                            key={subject.key}
                            subject={subject.subject}
                            teacher={subject.teacher}
                            classroom={subject.classroom}
                            icon={Delete}
                            onDelete={() => deleteSubject(subject.key)}
                        />

                        ))}
                    </TableSubject>
                </TableContainer>
                <ButtonAddTask
                        icon={documentIcon}
                        modalAdd={modalAddS}
                        setModalAdd={setModalAddS}
                    />
            </MainTaskContainer>


            {!!modalAddS && (
                <Modal>
                    <AddSubject
                        setModalAddS={setModalAddS}
                        addSubject={addSubject}
                    />
                </Modal>
            )}

        </Fragment>

    )
}

export { SubjectView };