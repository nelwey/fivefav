const {Router} = require('express')
const router = Router();

const {renderIndex, renderAbout, renderPost, renderPosts, createPost } = require('../controllers/index.controller');

router.get('/', renderIndex);
router.get('/about', renderAbout);
router.get('/post', renderPost);
router.get('/posts', renderPosts);

router.post('/post/add', createPost);

module.exports = router;