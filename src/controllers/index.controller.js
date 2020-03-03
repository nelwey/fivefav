const indexCtrl = {};
const Post = require('../models/Post');

indexCtrl.renderIndex = (req, res, next) => {
  res.render('index');
}

indexCtrl.renderPost = (req, res, next) => {
  res.render('post');
}


indexCtrl.createPost = async (req, res, next) => {
  const {
    song1,
    song2,
    song3,
    song4,
    song5,
    name,
    email,
    picture,
    date
  } = req.body;
  console.log(req.body);


  const newPost = new Post({
    song1,
    song2,
    song3,
    song4,
    song5,
    name,
    email,
    picture,
    date
  });

  const fbEmail = await Post.findOne({email});

  if (!fbEmail) {
    const postCreated = await newPost.save();
    if (postCreated) {
      console.log('Post creado');
      req.flash('success_msg', 'Publicacion creada correctamente!');
      res.redirect('/posts');
    } else {
      console.log('Error al crear la publicación');
    }

  }else{
    req.flash('error_msg', 'Este correo ya realizó una publicación, ve y búscalo en las publicaciones ;)');
    res.redirect('/');
    console.log('nel, ya esta ese correo');
  }
}





indexCtrl.renderPosts = async (req, res, next) => {

  const posts = await Post.find().sort({createdAt:'desc'});

  res.render('posts', {posts} );

}


module.exports = indexCtrl;