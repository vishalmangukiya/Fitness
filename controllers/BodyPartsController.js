const bodyparts = async (req, res) => {
    try {
        return res.render('bodyparts');
    } catch (error) {
        console.error('Error fetching bodyparts :', error);
    }
}

const viewbodyparts = async (req, res) => {
    try {
        return res.render('viewbodyparts');
    } catch (error) {
        console.error('Error fetching viewbodyparts :', error);
    }
}

module.exports = {
    bodyparts,
    viewbodyparts,
}