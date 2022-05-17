import React from "react";
import { Header } from "./header/Header";
import { ProductIcon } from "./header/ProductIcon";
import { TitleProduct } from "./header/TitleProduct";
import { Main } from "./main/Main";
import { TitleMain } from "./main/TitleMain";
import { InputContainer } from "./main/InputContainer";
import { LoginButton } from "./main/LoginButton";
import { RegisterText } from "./main/RegisterText";


// Get Data for Inputs components
import LogInData from './dataLogIn';


function LogIn() {
    const getLogInData = LogInData();
    return(
        <React.Fragment>
            <Header>
                   <TitleProduct/>
                   <ProductIcon/>
            </Header>
            <Main>
                <TitleMain text={"Iniciar sesion"}/>
                {getLogInData.map(
                    data => (
                        <InputContainer
                        key={data.key}
                        text={data.text}
                        id={data.id}
                        placeholder={data.placeholder}
                        />
                ))}
                <LoginButton text={"Iniciar sesion"}/>
                <RegisterText/>
            </Main>
        </React.Fragment>

    );
}

export { LogIn };