import { promises as fs } from 'fs';
import { NextResponse } from 'next/server';


export async function POST(request){
    const {nome, email, telefone, regiao, nascimento} = await request.json; // Extração de nomes e fornece os dados ao Json
    const file = await fs.readFile(process.cwd() + '/src/app/dados/db.json','utf8'); // Lê o conteúdo JSON 
    const dados = JSON.parse(file); // Conversão de conteúdo 

    const novoUser = {
        id:dados.usuarios[dados.usuarios.length-1].id+1,
        nome,
        email,
        telefone,
        regiao,
        nascimento
    };

    dados.usuarios.push(novoUser);

    await fs.writeFile(process.cwd() + '/src/app/dados/db.json', JSON.stringify(dados));
    return NextResponse.json({ message: ` ${novoUser.nome} adicionado com sucesso!`}) // Retorna um HTTP 

    
}