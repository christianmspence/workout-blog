const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

const withAdminAuth = (req, res, next) => {
    if (!req.session.admin) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth, withAdminAuth;