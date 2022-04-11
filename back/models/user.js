module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users',{
        email:{
            type: DataTypes.STRING(320),
            allowNull:false,
            unique: true
        },
    },{
        charset:"utf8",
        collate:"utf8_general_ci"
    });
    return User
}
