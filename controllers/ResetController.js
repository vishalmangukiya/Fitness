const resetpassword = async (req, res) => {
    try {
        return res.render('resetpassword');
    } catch (error) {
        console.error('Error fetching resetpassword:', error);
    }
}

module.exports = {
    resetpassword
}