const { CommonHelper } = require('../../../src/helper/commonHelper');
const fs = require('fs');

const db = require('../../../src/helper/database');
const { v4: uuidv4 } = require('uuid');

function getAll() {
  return CommonHelper.getAllItems('boards');
}

function getBoardById(boardId) {
  return CommonHelper.getItem (
    'boards',
    boardId
  );
}

function createBoard(board) {
  return CommonHelper.createItem(
    'boards',
    board
  );
}

function updateBoard(board) {
  return CommonHelper.updateItem(
    'boards',
    board
  );
}

function deleteBoard(boardId) {
  return CommonHelper.deleteItem(
    'boards',
    boardId
  );
}

// function deleteBoardTasks(boardId) {
//   return new Promise((resolve, reject) => {
//     try {
//       fs.readFile('src/resources/tasks/tasks.json', 'utf8', (error, data) => {
//         if (error) {
//           reject(error);
//         }
//         data = data.replace(/}{/g, '},{');
//         data = JSON.parse(`[${data}]`);
//         let doesItemExist = false;
//         for (const index in data) {
//           if (data[index].boardId && boardId === data[index].boardId) {
//             data[index] = {};
//             doesItemExist = true;
//           }
//         }
//         if (doesItemExist) {
//           data = data.filter(item => item.id);
//           data = JSON.stringify(data);
//           data = data.slice(1, data.length - 1);
//           fs.writeFileSync('src/resources/tasks/tasks.json', data);
//           resolve('There tasks were deleted');
//         } else {
//           resolve('There is no tasks fot this board');
//         }
//       });
//     } catch (error) {
//       reject('an error occured');
//     }
//   });
// }

module.exports = {
  getAll,
  getBoardById,
  createBoard,
  updateBoard,
  deleteBoard
};
