const { CommonHelper } = require('../../../src/helper/commonHelper');
const fs = require('fs');

const db = require('../../../src/helper/database');
const { v4: uuidv4 } = require('uuid');

function getAll() {
  return CommonHelper.getAllItems('tasks');
}

function getTaskById(taskId) {
  return CommonHelper.getItem (
    'tasks',
    taskId
  );
}

function createTask(task, boardId) {
  return CommonHelper.createItem(
    'tasks',
    { ...task, boardId }
  );
}

function updateTask(task) {
  return CommonHelper.updateItem(
    'tasks',
    task
  );
}

function deleteTask(taskId) {
  return CommonHelper.deleteItem(
    'tasks',
    taskId
  );
}

module.exports = { getAll, getTaskById, createTask, updateTask, deleteTask };
