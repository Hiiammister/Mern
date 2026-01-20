export function getAllNotes  (req,res) {
    res.status(200).send("You just fetched the notes");
};
export function createNote  (req,res) {
    res.status(201).json({message:"post created successfully!"})
};
export function updateNote (res, req){
    res.status(200).json({message:"post updated successfully!"})
}
export function deleteNote (res, req){
    res.status(200).json({message:"post updated successfully!"})
}
