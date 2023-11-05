import { NextResponse } from "next/server"
import fs from "fs/promises";

        
    export async function GET(request, {params}) {
        const file = await fs.readFile(process.cwd() + '/src/app/dados/base/db.json', 'utf8');
        const arquivo = JSON.parse(file);
        const usuarios = arquivo.usuarios;         

        const id = params.id

        if(id > 0 && id <= usuarios.length){
            return NextResponse.json(usuarios.find((user=> user.id == id)));
        } else {
            // Se o ID for inválido ou não existir no array, retorna um erro HTTP 404
            return id == 0 ? NextResponse.json(usuarios) : NextResponse.redirect("http://localhost:3000/error") 
        }


}

// export async function POST(){

// }

// export async function DELETE(){

// }
// export async function PUT(){

// }