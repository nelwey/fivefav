const indexCtrl = {};
const Post = require('../models/Post');

indexCtrl.renderIndex = (req, res, next) => {
  res.render('index');
}

indexCtrl.renderAbout = (req, res, next) => {
  res.render('about');
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
  let songs = [];
  songs[0] = song1;
  songs[1] = song2;
  songs[2] = song3;
  songs[3] = song4;
  songs[4] = song5;


  const newPost = new Post({
    songs,
    name,
    email,
    picture,
    date
  })

  const fbEmail = await Post.findOne({email});

  if (!fbEmail) {
    const postCreated = await newPost.save();
    if (postCreated) {
      console.log('Post creado');
      req.flash('success_msg', 'Post creado correctamente!');
      res.redirect('/posts');
    } else {
      console.log('No se creo el post');
    }

  }else{
    req.flash('error_msg', 'Este correo ya hizó un post, ve y buscalo en el muro ;)');
    res.redirect('/');
    
    console.log('nel, ya esta ese correo');
  }



  



}


indexCtrl.renderPosts = async (req, res, next) => {

  const posts = await Post.find().sort({createdAt:'desc'});

  res.render('posts', {posts} );


}


module.exports = indexCtrl;