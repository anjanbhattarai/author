const Author= require('../models/author.model');

module.exports = {
    createAuthor: (req,res)=>{
        Author.create(req.body)
        .then((newAuthor)=>{
            console.log(newAuthor);
            res.status(200).json(newAuthor);
        }). catch((err)=>{
            console.log(err);
            res.status(400).json({message:"Something went wrong in createAuthor",err});
        })
    },
    getOneAuthor: (req,res)=>{
        Author.findById({_id:req.params.id})
        .then((getById)=>{
            console.log(getById);
            res.status(200).json(getById)
        }).catch((err)=>{
            console.log(err);
            res.status(400).json({message:"Something went wrong in getOne Author", err})
        })
    },
    getAllAuthors:(req,res)=>{
        Author.find({})
        .then((allAuthor)=>{
            console.log(allAuthor);
            res.status(200).json(allAuthor)
        }).catch((err)=>{
            console.log(err);
            res.status(400).json({message:"Something went wrong in getAllAuthor", err})
        })
    },
    editAuthor: (req,res)=>{
        Author.findByIdAndUpdate({_id:req.params.id},req.body,{new:true, runValidators:true})
        .then((updatedAuthor)=>{
            console.log(updatedAuthor);
            res.status(200).json(updatedAuthor);
        }).catch((err)=>{
            console.log(err);
            res.status(400).json({message:"Something went wrong in editAuthor", err})
        })
    },
    deleteAuthor:(req,res)=>{
        Author.deleteOne({_id: req.params.id})
        .then((deleteAuthor)=>{
            console.log(deleteAuthor);
            res.status(200).json(deleteAuthor)
        }).catch((err)=>{
            console.log(err);
            res.status(400).json({message:"Something went wrong in getAllAuthor", err})
        })
    }
}