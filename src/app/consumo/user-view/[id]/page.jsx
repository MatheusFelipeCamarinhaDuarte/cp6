import React from 'react'

export default async function page({params}) {

    const id = params.id;
    const response = await fetch(`http://localhost:3000/dados/usuarios/${id}`);
    const user = await response.json();

    const parteData = user.nascimento.split('/'); 
    const ano = new Date().getFullYear();
    const idade =(ano - parseInt(parteData[2]));
    // 

    return (
        <div>
                <ul key={user.id} >
                    <li>Nome: {user.nome} |</li>
                    <li>Email: {user.email} |</li>
                    <li>Telefone: {user.telefone} |</li>
                    <li>Região: {user.regiao} |</li>
                    <li>Data de nascimento: {user.nascimento} |</li>
                    <li>idade: {idade} </li>
                </ul>
        </div>
    )
}