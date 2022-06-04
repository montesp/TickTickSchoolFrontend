import React, {useState} from "react";
import { Header } from "./header/Header";
import { ProductIcon } from "./header/ProductIcon";
import { TitleProduct } from "./header/TitleProduct";
import { Main } from "./main/Main";
import { TitleMain } from "./main/TitleMain";
import { InputContainer } from "./main/InputContainer";
import { LoginButton } from "./main/LoginButton";
import { Log } from "./Log";

// Get Data for Inputs components
import LogUpData from './dataLogUp';

const userData =
    {
    email: 'pavelmontes',
    password: 'pass',
    password_confirmation: 'pass',
    first_name: 'Pavel',
    last_name: 'Montes',
    }
;

const URL = 'http://localhost:8000/';
const userSigup= 'users/signup/';

function LogUp(){
    const getLogUpData = LogUpData();
    const [data, setData] = useState('');

    const onUp = () => {
        fetch(`${URL}${userSigup}`, {
            method: 'POST',
            body: JSON.stringify({
                email: 'pavelmontes',
                password: 'pass',
                password_confirmation: 'pass',
                first_name: 'Pavel',
                last_name: 'Montes',
            }),
            headers:{
              'Content-Type': 'application/json'
            },
            mode: 'no-cors',
          })
          .then(response => console.log(response.json()))
          .then(data => console.log(data))
          .catch(error => console.error('Error:', error));
    }


    return(
        <React.Fragment>
        <Log>
            <Header>
                    <TitleProduct/>
                    <ProductIcon/>
            </Header>
            <Main>
                <TitleMain text={"Registrarse"}/>
                {getLogUpData.map(
                    data => (
                        <InputContainer
                        key={data.key}
                        text={data.text}
                        id={data.id}
                        placeholder={data.placeholder}
                        />
                ))}
                <LoginButton
                onUp={()=> onUp()}
                text={"Registrarse"}/>
            </Main>
            <p>a</p>
        </Log>
    </React.Fragment>

    );
}

export { LogUp };