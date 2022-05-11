import React from "react";
import { Header } from "./Header/Header";
import { ProductIcon } from "./Header/ProductIcon";
import { TitleProduct } from "./Header/TitleProduct";
import { Main } from "./main/Main";
import { TitleMain } from "./main/TitleMain";
import { InputContainer } from "./main/InputContainer";
import { LoginButton } from "./main/LoginButton";
import { RegisterText } from "./main/RegisterText";


const dataS = [
    {key:1, id: "user", type: "email", placeholder: "usuario...", text: "Usuario" },
    {key:2 ,id: "password", type: "password", placeholder: "contraseña...", text: "Contraseña" },
];

function LogIn() {
    return(
        <React.Fragment>
            <Header>
                   <TitleProduct/>
                   <ProductIcon/>
            </Header>
            <Main>
                <TitleMain/>
                {dataS.map(
                    data => (
                        <InputContainer
                        key={data.key}
                        text={data.text}
                        id={data.id}
                        placeholder={data.placeholder}
                        />
                ))}
                <LoginButton/>
                <RegisterText/>
            </Main>
        </React.Fragment>

    );
}

export { LogIn };