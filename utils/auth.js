const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

const withAdminAuth = (req, res, next) => {
    if (req.session.admin = false) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth, withAdminAuth;