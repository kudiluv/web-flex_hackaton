const models = global.sequelize.models;
const mammoth = require("mammoth");
const EsService = require("../services/EsService")

module.exports = async () => {
    const result = await models.Document.findAll({
        where: {
            ocr: false,
            type: 'word'
        },    
        limit: 100
    });
    result.forEach(async (document) => {
        const response = await mammoth.extractRawText({path: '/app/' + document.path})
        await EsService.addDocument(response.value, document.lectureId)
        await models.Document.update({
            ocr: true
        }, {
            where: {
                id: document.id,
            }
        });
    })
}

