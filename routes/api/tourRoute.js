const express = require("express");
const multer = require("multer");

const router = express.Router();

const Tour = require("../../models/tour");

//CONFIGURE MULTER PACKAGE

const multerStorage = multer.diskStorage({
    destination: (req, res, cb) =>{
        cb(null, "public/img/tour")

    },
    filename: (req, file, cb) =>{
        const extension = file.mimetype.split('/')[1]
        cb(null,`srimangal-${Date.now()}.${extension}` )
    }
})

const upload = multer({storage: multerStorage});

const uploadData = async (req, res) =>{
    try{
        //ONE WAY OF STORE DATA USING MONGOOSE

        // const testTour= new Tour({
        //     name : req.body.name,
        //     description: req.body.description
        // })

        // testTour
        //     .save()
        //     .then(()=>{
        //         console.log(testTour);
        //     }).catch((err)=>{
        //         console.log(err);
        //     })

         //ANOTHER WAY OF STORE DATA USING MONGOOSE
         
        const newTour =  await Tour.create({
            location : req.body.location,
            photo: req.file.filename,
            maxPeople: req.body.maxPeople,
            cost: req.body.cost,
            description : req.body.description,
            lat_coordinate: req.body.lat_coordinate,
            len_coordinate: req.body.len_coordinate,
            difficulty : req.body.difficulty,
            duration : req.body.duration,
            ratingAvarage: req.body.ratingAvarage,
            startDate: req.body.startDate,
            summary: req.body.summary
        })
        // console.log(req.file);
        

        res.status(200).json({
        status : "success",
        message: "data is posted",
        tour: newTour
    })

    }catch(err){
        console.log(err);
        res.status(400).json({
            status: "something wrong"
        })
    }
}

const getData = async (req, res) =>{
    const tour = await Tour.find();
    res.status(200).json({
        status: "Successfully get data",
        tour
    })
}

router
    .route("/")
    .get(getData)
    .post(upload.single("photo"),uploadData)

module.exports = router;    