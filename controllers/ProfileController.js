const profile = async (req, res) => {
    try {
        return res.render('profile');
    } catch (error) {
        console.error('Error fetching profile :', error);
    }
}

module.exports = {
    profile
}