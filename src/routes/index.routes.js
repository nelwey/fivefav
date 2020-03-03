const {Router} = require('express')
const router = Router();

const {renderIndex, renderPost, renderPosts, createPost } = require('../controllers/index.controller');

router.get('/', renderIndex);
router.get('/post', renderPost);
router.get('/posts', renderPosts);

router.post('/post/add', createPost);

module.exports = router;