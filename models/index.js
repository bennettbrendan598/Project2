const User = require('./User');
const Crypto = require('./crypto');
//create associations
User.hasMany(Crypto, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});
Crypto.belongsTo(User, {
    foreignKey: 'user_id',
});
module.exports = { User,Crypto };