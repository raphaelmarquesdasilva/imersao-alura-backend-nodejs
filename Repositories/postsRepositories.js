import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


 

export const gettingAllPosts = async () => {
    return await prisma.posts.findMany()
}

export const gettingPostById = async (id) => {
    return await prisma.posts.findUnique({
        where: { id}
    })
}

export const postingOnePost = async (body) => {
    return await prisma.posts.create({
        data: body
    })
}

export const updatePostImage = async (id, newFileName) => {
    return await prisma.posts.update({
        where: { id: id},
        data: {img_url: `/uploads/${newFileName}`}
    })
}
