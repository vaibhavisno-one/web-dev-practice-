const asyncHandler =(requestHandler)=>{
    return (req, res, next)=>{
        Promise.resolve(requestHandler).catch((err) => next(err)).
        catch((err)=> next(err))
    }
}


export default asyncHandler;



// const asyncHandler = (fn)=> async(req, res,next) =>{

//     try{
//         await fn (req, res, next)
//     }catch(error){
//         res.status(err.code||500).jason({
//             success : false,
//             message : err.message
//         })
//     }
// }