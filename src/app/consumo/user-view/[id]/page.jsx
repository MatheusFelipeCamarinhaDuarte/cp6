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
        <div class="flex justify-center">
            <div className='tela-usuario'>
                    <ul key={user.id} className="list-none flex flex-col">
                        <li class="mb-2 block">Nome: <span class="font-semibold">{user.nome}</span></li>
                        <li class="mb-2 block">Email: <span class="font-semibold">{user.email}</span></li>
                        <li class="mb-2 block">Telefone: <span class="font-semibold">{user.telefone}</span></li>
                        <li class="mb-2 block">Região: <span class="font-semibold">{user.regiao}</span></li>
                        <li class="mb-2 block">Data de Nascimento: <span class="font-semibold">{user.nascimento}</span></li>
                        <li class="mb-2 block">Idade: <span class="font-semibold">{idade}</span></li>
                    </ul>
            </div>
        </div>
    )
}