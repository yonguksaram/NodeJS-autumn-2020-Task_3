const { CommonHelper } = require('../../../src/helper/commonHelper');
const fs = require('fs');

function getAll() {
  return CommonHelper.getAllItems('users');
}

function getUserById(userId) {
  return CommonHelper.getItem (
    'users',
    userId
  );
}

function createUser(user) {
  return CommonHelper.createItem(
    'users',
    user
  );
}

function updateUser(user) {
  return CommonHelper.updateItem(
    'users',
    user
  );
}

function deleteUser(userId) {
  return CommonHelper.deleteItem(
    'users',
    userId
  );
}

module.exports = {
  getAll,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
