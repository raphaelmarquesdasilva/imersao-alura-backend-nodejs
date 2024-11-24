import multer from "multer";
import path from "path"

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`)
    },
})


export const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  /*   fileFilter: (req, file, cb) => {
        console.log("File mimetype:", file.mimetype)
        if (file.mimetype.startsWith("imagem/")) {
            cb(null, true)
        }
            else {
        cb(new Error("Apenas arquivos de imagens são permitidos"), false)
        }
    } */
});
