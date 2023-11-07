import Link from 'next/link';
import React from 'react'

export default async function UserView() {
  
      // DEve ter o método de alterar os dados de um usuários e um para excluir os dados do mesmo
  
      // os nomes devem conter links que irão levar o usuário para mais informações daquele usuário
    
    let users;

    try {
        const response = await fetch('http://localhost:3000/dados/usuarios/0');
        users = await response.json();
        

    } catch (error) {
        console.log(error)
        redirect('/error')
    }

  return (

    <div>
        <table className='tabela'>
            <thead>
                <tr>
                    <th className='tabela-titulo' class='text-center'>#</th>
                    <th className='tabela-titulo'>Nome</th>
                    <th className='tabela-titulo'>Email</th>
                    <th className='tabela-titulo'>Telefone</th>
                </tr>
            </thead>
            <tbody className='tabela-corpo'>
                    {
                        users.map((user)=>(
                                <tr key={users.id}className='hover:font-semibold'>
                                    <td className='text-center'>{user.id}</td>
                                    <td><Link href={`/consumo/user-view/${user.id}`}>{user.nome}</Link></td>
                                    <td>{user.email}</td>
                                    <td>{user.telefone}</td>
                                </tr>
                        ))
                    }
                </tbody>

        </table>
    </div>
  )
}
