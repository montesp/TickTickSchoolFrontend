import React, { useState } from "react";

// Components
import { Header } from "./header/Header";
import { ProductIcon } from "./header/ProductIcon";
import { TitleProduct } from "./header/TitleProduct";
import { Main } from "./main/Main";
import { TitleMain } from "./main/TitleMain";
import { InputContainer } from "./main/InputContainer";
import { LoginButton } from "./main/LoginButton";
import { RegisterText } from "./main/RegisterText";
import { Log } from "./Log";
import { ErrorLogin } from "./main/ErrorLogin";


// Get Data for Inputs components
import LogInData , {getCorrectData} from './dataLogIn';


function LogIn() {
    const getLogInData = LogInData();
    const datosCorrectos = getCorrectData();
    const [acceptLogin, setAcceptLogin] = useState(false);
    const [showIncorrectData, setShowIncorrectData] = useState(false);

    const check = () => {
        const user = String(document.getElementById('user').value);
        console.log(user)
        const pass = String(document.getElementById('password').value);
        console.log(pass)

        if(user === datosCorrectos.user && pass === datosCorrectos.pass ){
            setAcceptLogin(true);
        } else {
            setShowIncorrectData(true);
        }
    }

    return(
        <React.Fragment>
            <Log>
                <Header>
                       <TitleProduct/>
                       <ProductIcon/>
                </Header>
                <Main>
                    <TitleMain text={"Iniciar sesion"}/>
                        <InputContainer
                            key={getLogInData[0].key}
                            text={getLogInData[0].text}
                            id={getLogInData[0].id}
                            placeholder={getLogInData[0].placeholder}
                            type='email'
                        />
                        <InputContainer
                            key={getLogInData[1].key}
                            text={getLogInData[1].text}
                            id={getLogInData[1].id}
                            placeholder={getLogInData[1].placeholder}
                            type='password'
                        />

                    {!!showIncorrectData && (
                        <ErrorLogin/>
                    )}

                    <LoginButton
                    text={"Iniciar sesion"}
                    rute='/tareas'
                    check={()=> check()}
                    setAcceptLogin={setAcceptLogin}
                    acceptLogin={acceptLogin}
                    showIncorrectData={showIncorrectData}
                    setShowIncorrectData={setShowIncorrectData}
                    />
                    <RegisterText/>
                    
                   
                </Main>

              
            </Log>
        </React.Fragment>

    );
}

export { LogIn };