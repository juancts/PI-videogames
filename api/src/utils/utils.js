const cleanData = (arr) =>
  arr.map((res) => {
    return {
      id: res.id,
      name: res.name,
      image: res.background_image,
      plataforms: res.parent_platforms.map((e) => e.platform.name),
      description: res.description,
      released: res.released,
      rating: res.rating,
      genres: res.genres.map((e) => e.name),
      created: false,
    };
  });

const validate = ( name, image, platforms, description, released, rating, genre, req, res, next)=>{
if(!name) return res.status(400).json({error: "Missing name"});
if(!image) return res.status(400).json({error: "Missing image"});
if(!platforms) return res.status(400).json({error: "Missing platforms"});
if(!description) return res.status(400).json({error: "Missing description"});
if(!released) return res.status(400).json({error: "Missing released"});
if(!rating) return res.status(400).json({error: "Missing rating"});
if(!genre) return res.status(400).json({error: "Missing genre"});

next();
}

  module.exports ={cleanData, validate}