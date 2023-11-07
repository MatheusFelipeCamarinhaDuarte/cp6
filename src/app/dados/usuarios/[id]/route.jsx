import { NextResponse } from "next/server"
import fs from "fs/promises";

        
    export async function GET(request, {params}) {
        const file = await fs.readFile(process.cwd() + '/src/app/dados/base/db.json', 'utf8');
        const arquivo = JSON.parse(file); // Conversão de arquivo de JS para JSON 
        const usuarios = arquivo.usuarios;         

        const id = params.id

        // Verifica se o ID recebido na requisição está dentro dos limites do array de usuários.
        if(id > 0 && id <= usuarios.length){ 
        
         // Se o ID estiver dentro dos limites, retorna o usuário correspondente ao ID fornecido na requisição.
            return NextResponse.json(usuarios.find((user=> user.id == id)));
        } else {
            // Se o ID for inválido ou não existir no array, retorna um erro HTTP 404
            return id == 0 ? NextResponse.json(usuarios) : NextResponse.redirect("http://localhost:3000/error") 
        }


}
