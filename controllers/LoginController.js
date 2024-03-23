const login = async (req, res) => {
    return res.render('login', { message: '' });
};

const dashboard = async (req, res) => {
    try {

        return res.render('dashboard');
    } catch (error) {
        console.error('Error fetching dashboard:', error);
    }
}

const logout = async (req, res) => {
    try {
        return res.redirect('/login');
    } catch (error) {
        console.error('Error fetching logout:', error);
    }
}

module.exports = {
    login,
    dashboard,
    logout
}