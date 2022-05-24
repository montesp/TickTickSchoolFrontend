import React, {Fragment} from "react";

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

// Icons
import plusIcon from "../../assets/icons/plus.svg";
import subjectIcon from "../../assets/icons/file.svg"




function SubjectView(){
    fetch('https://rickandmortyapi.com/api/character/161')
    .then(response => response.json())
    .then(data => console.log(data));

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
                    />
                    <ButtonSide
                    alt="Subject icon"
                    src={subjectIcon}
                    text={"Materias"}
                    />
                </SideBar>
                <TableContainer>
                    <TableSubject>
                        <RowCeld
                            subject="nombre materia"
                            teacher="profesor"
                            classroom="aula"
                        />
                        <RowCeld
                            subject="nombre materia"
                            teacher="profesor"
                            classroom="aula"
                        />
                        <RowCeld
                            subject="nombre materia"
                            teacher="profesor"
                            classroom="aula"
                        />
                        <RowCeld
                            subject="nombre materia"
                            teacher="profesor"
                            classroom="aula"
                        />
                    </TableSubject>
                </TableContainer>
            </MainTaskContainer>
        </Fragment>

    )
}

export { SubjectView };