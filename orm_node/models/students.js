module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define(
    "students",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        set(value) {
          this.setDataValue("name", value + " code ");
        },
        get() {
          return this.getDataValue("name") + "done";
        },
      },
      email: {
        type: DataTypes.STRING,
        defaultValue: "test@gmai.com",
      },
      gender: {
        type: DataTypes.STRING,
      },
    },
    {
      // timestamps:true
      updatedAt: true,
      // engine:'InnoDB'
    }
  );
  return Students;
};
