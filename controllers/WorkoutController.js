const workout = async (req, res) => {
    try {
        return res.render('workout');
    } catch (error) {
        console.error('Error fetching workout :', error);
    }
}

const viewworkout = async (req, res) => {
    try {
        return res.render('viewworkout');

    } catch (error) {
        console.error('Error fetching viewworkout :', error);
    }
}


module.exports = {
    workout,
    viewworkout,
}