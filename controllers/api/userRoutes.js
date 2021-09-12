const router = require('express').Router();
const User = require('../../models/user');

router.post('/', async (req, res) => {
    try {
        const userData = await User.create(req.body);

        req.session.save(() => {
            req.session.user_id = userData.id;
            req.session.logged_in = true;

            res.status(200).json(userData);
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const userData = await User.findOne({ where: { username: req.body.username }});

        if (!userData) {
            res
                .status(400)
                .json({ message: 'Incorrect username or password, please try again!'});
            return;
        }

        const validPassword = await userData.checkPassword(req.body.password);

        if(!validPassword) {
            res 
                .status(400)
                .json({ message: 'Incorrect username or password'})
            return;
        }

        req.session.save(() => {
            req.session.username = userData.id;
            req.session.logged_in = true;

            res.json({ user: userData, message: 'Logged in successfully'});
        });
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/logout', (req, res) => {
    if (req.session.logged_in) {
      
      req.session.destroy(() => {
        res.redirect('/login');
        res.status(204).end();
      });
    
    } else {
      res.redirect('/');
      res.status(404).end(); 
    }
  });

module.exports = router;