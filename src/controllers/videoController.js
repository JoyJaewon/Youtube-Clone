export const trending=(req,res)=>res.send("Home Page Videos");
export const see=(req,res)=>{
    console.log(req.params);
    res.send("Watch");
}
export const edit=(req,res)=>res.send("Edit");
export const search=(req,res)=>res.send("Search");
export const upload=(req,routers)=>res.send("Upload");
export const deleteVideo=(req,res)=>res.send("Delete");

