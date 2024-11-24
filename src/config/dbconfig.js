import { MongoClient } from "mongodb"

export default async function conectarAoBanco(stringconexao) {
    let mongoClient

    try {
        mongoClient = new MongoClient(stringconexao)
        console.log(`Conectando ao cluster do banco de dados...`)
        await mongoClient.connect()
        console.log(`Conectado ao banco de dados com sucesso!`)

        return mongoClient
    } catch (error) {
        console.log(`Erro ao conectar no banco de dados. O erro retornado foi: ${error}`)
        process.exit
    }
}


