'use strict'
const Sequelize = require('sequelize')
const path = require('path')

module.exports = function({ database }) {
    const { database: databaseName, username, password, host, schema } = database
    const models = {}
    const modelNames = [
        'users',
        'subjects',
        'mentorships',
        'menteeships'
    ]

    let logging

    if (process.env.NODE_ENV) {
        logging = false
    } else {
        logging = true
    }

    const sequelize = new Sequelize(databaseName, username, password, {
        host,
        dialect: 'postgresql',
        schema,
        logging
    })

    const dbDir = path.join(__dirname, '..', 'database')
    modelNames.reduce((models, modelName) => {
        models[modelName] = sequelize.import(path.join(dbDir, 'models', `${modelName}.js`))
        return models
    }, models)

    models.message.belongsTo(models.chat, { foreignKey: 'chat_id' })

    return { sequelize, models }
}
