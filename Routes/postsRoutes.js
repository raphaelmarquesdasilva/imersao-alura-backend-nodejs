import express from "express"
import * as postsControllers from "../Controllers/postsControllers.js"
import { upload } from "../Middlewares/uploadingOneImage.js"



const route = express.Router()



route.get('/', postsControllers.gettingAllPosts)
route.post('/', postsControllers.postingOnePost)
route.post('/upload', upload.single("image"), postsControllers.uploadingOneImage)


export default route