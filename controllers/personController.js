const { executeQuery } = require('../services/mysql.service');

const obtenerPersonas = async (req, res) => {
    try {
        const response = await executeQuery(`SELECT * FROM persona`);
        res.status(200).json(response);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    obtenerPersonas,
}