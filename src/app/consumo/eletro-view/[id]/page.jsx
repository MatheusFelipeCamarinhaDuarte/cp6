import Image from "next/image";


export default async function page({params}) {

    const id = params.id 
    const response = await fetch(`http://localhost:3000/dados/eletronicos/${id}`);
    const items = await response.json();

    return (
        <div>
                <div key={items.id}>
                    <h2>{items.nome}</h2>
                    <figure>
                        <Image
                            src={items.img}
                            alt={items.descricao}
                            width={150}
                            height={200}
                            /> 
                        <figcaption>{items.descricao} - R$ <span>{items.preco}</span></figcaption>
                    </figure>  
                </div>
        </div>
    )
}
