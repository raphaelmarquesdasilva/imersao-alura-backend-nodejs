import * as postsRepositories from "../Repositories/postsRepositories.js"



export const gettingAllPosts = async (req,res) => {
    try {
        const posts = await postsRepositories.gettingAllPosts()
        res.status(200).send(posts)
    } catch (error) {
        res.status(500).json({
            message: `Erro gerado pelo postsControllers função(gettingAllPosts).`, 
            error: error.message
        })
    }
}

export const postingOnePost = async (req,res) => {
    try {
        let body = req.body
        await postsRepositories.postingPost(body)
        res.status(200).send(`Mensagem criado pelo postsControllers. Post criado com sucesso!`)
    } catch (error) {
        res.status(500).json({message: `Mensagem criado pelo postsControllers função(postingPost)`, error: error.message})
    }
}


export const uploadingOneImage = async (req,res) => {
    try {
        if (!req.file) {
            res.status(400).send(`Nenhum arquivo foi enviado.`)
        }

        const { buffer, originalname, mimetype } = req.file
        const imgBase64 = buffer.toString("base64")
        const imgUrl = `data:${mimetype};base64;${imgBase64}`

        const postData = {
            descricao: req.body.descricao || "Sem descrição",
            img_url: imgUrl,
            alt: originalname
        }

        await postsRepositories.postingOnePost(postData)
        res.status(201).json({
            message: "Imagem enviada com sucesso",
            postData
        })

    } catch (error) {
            res.status(500).json({
                message: "Erro ao carregar a imagem: uploadingOneImage",
                erroe: error.message
            })
    }
}

