
const dataS = [
    {key:1, id: "user", type: "email", placeholder: "usuario...", text: "Usuario" },
    {key:2 ,id: "password", type: "password", placeholder: "contraseña...", text: "Contraseña" },
];

const correct = {
    user: "pavel",
    pass: "contra123"
}

export default function getLogInData(){
    return dataS;
}


export function getCorrectData(){
    return correct;
}