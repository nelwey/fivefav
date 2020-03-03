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

  if(song1 == song2 || song1 == song3 || song1 == song4 || song1 == song5){
    req.flash('error_msg', 'No se puede enviar dos o más canciones con el mismo nombre');
    return res.redirect('/post');
  }
  if(song2 == song1 || song2 == song3 || song2 == song4 || song2 == song5){
    req.flash('error_msg', 'No se puede enviar dos o más canciones con el mismo nombre');
    return res.redirect('/post');
  }
  if(song3 == song1 || song3 == song2 || song3 == song4 || song3 == song5){
    req.flash('error_msg', 'No se puede enviar dos o más canciones con el mismo nombre');
    return res.redirect('/post');
  }
  if(song4 == song1 || song4 == song2 || song4 == song3 || song4 == song5){
    req.flash('error_msg', 'No se puede enviar dos o más canciones con el mismo nombre');
    return res.redirect('/post');
  }
  if(song5 == song1 || song5 == song2 || song5 == song4 || song5 == song4){
    req.flash('error_msg', 'No se puede enviar dos o más canciones con el mismo nombre');
    return res.redirect('/post');
  }

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
      return res.redirect('/posts');
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