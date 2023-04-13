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


  module.exports ={cleanData}