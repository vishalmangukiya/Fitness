const intro = async (req, res) => {
    try {
        return res.render('intro');
    } catch (error) {
        console.error('Error fetching intro :', error);
    }
}

const viewintro = async (req, res) => {
    try {
        return res.render('viewintro');
    } catch (error) {
        console.error('Error fetching viewintro :', error);
    }
}

module.exports = {
    intro,
    viewintro,
}