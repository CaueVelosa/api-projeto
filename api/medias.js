const medias = [
    {id: 1, type: "movie", title: "Harry Potter e a Ordem da Fênix"},
    {id: 2, type: "tv", title: "Stranger Things"},
    {id: 3, type: "movie", title: "Clube da Luta"},
    {id: 4, type: "movie", title: "Homem aranha no aranha verso"},
    {id: 5, type: "movie", title: "Vingadores: Ultimato"}
]
 
 
module.exports = (req, res) => {
    if (req.method === "GET"){
        return res.status(200).json({medias});
    }else if (req.method === "POST"){
        const newMedia = req.body;
        return res.status(201).json({
            message: "Media Created",
            media: newMedia,
            totalMedias: [...medias, newMedia].length,
            allMedias:[...medias, newMedia]
        }
        );
    }
}