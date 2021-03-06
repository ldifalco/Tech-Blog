const router = require('express').Router();
const { Comment } = require('../../models/');
const auth = require('../../utils/auth');

router.post('/', auth, async (req, res) => {
    try {
        const commentData = await Comment.create({
         ...req.body,
         user_id: req.session.user_id,
        });
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;