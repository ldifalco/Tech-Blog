const router = require('express').Router();
const Post = require('../../models/post');

router.post('/', async (req, res) => {
    try {
        const postData = await Post.create({
            title: req.body.title,
            content: req.body.content,
            user_id: req.body.user_id,
        });

        res.status(200).json(postData);
    } catch (err) {
        console.log(err);
        res.status(500);
    }
});

router.put('/:id', async (req, res) => {
    try {
        const postData = await Post.update(
            {
                title: req.body.title,
                content: req.body.content
            },
            {
                where: {
                    id: req.params.id
                }
            }
        )

        res.status(200).json(postData);
    } catch {
        console.log(err);
        res.status(500);
    }
});

router.delete(':/id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        await postData.destroy();
        res.status(200).json({ message: 'Post has been deleted' });
    } catch {
        console.log (err);
        res.status(500);
    }
});

module.exports = router;