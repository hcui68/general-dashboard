const {
  DataTypes
} = require('sequelize');

module.exports = sequelize => {
  const attributes = {
    emp_no: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "emp_no",
      references: {
        key: "emp_no",
        model: "employees_model"
      }
    },
    dept_no: {
      type: DataTypes.CHAR(4),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: false,
      comment: null,
      field: "dept_no",
      references: {
        key: "dept_no",
        model: "departments_model"
      }
    },
    from_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "from_date"
    },
    to_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "to_date"
    }
  };
  const options = {
    tableName: "dept_emp",
    comment: "",
    timestamps: false,
    indexes: [{
      name: "dept_no",
      unique: false,
      type: "BTREE",
      fields: ["dept_no"]
    }]
  };
  const DeptEmpModel = sequelize.define("dept_emp_model", attributes, options);
  return DeptEmpModel;
};