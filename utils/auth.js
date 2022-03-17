// Authguard a route (restrict certain routes to authenticated users only)

const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login');
    } else {
        next();
        // calling next() calls the next middleware function 
        // (or final function that will render the template), 
        // passing along the same req and res values
    }
};

module.exports = withAuth;