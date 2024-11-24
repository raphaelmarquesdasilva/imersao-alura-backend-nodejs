import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()



export const gettingAllPosts = async () => {
    return await prisma.posts.findMany()
}

export const postingOnePost = async (body) => {
    return await prisma.posts.create({
        data: body
    })
}

