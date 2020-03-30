class GameCpu {
  getNextStep(gameMatrix) {
    //Get Array 0-8 where 0 = free; 1 = x; 2 = o;
    throw new Error("getNextStep may be implemented!");
    //return Math.floor( (Math.random()*(9)));//Must return value from 0 to 8
  }
}
export default class User extends GameCpu {
  constructor() {
    super();
  }

  getNextStep(gameMatrix, userNumber = 1) {
    //Get Array 0-8 where 0 = free; 1 = x; 2 = o;
    let line = [];

    line.push([gameMatrix[0], gameMatrix[1], gameMatrix[2]]);
    line.push([gameMatrix[3], gameMatrix[4], gameMatrix[5]]);
    line.push([gameMatrix[6], gameMatrix[7], gameMatrix[8]]);
    line.push([gameMatrix[0], gameMatrix[3], gameMatrix[6]]);
    line.push([gameMatrix[1], gameMatrix[4], gameMatrix[7]]);
    line.push([gameMatrix[2], gameMatrix[5], gameMatrix[8]]);
    line.push([gameMatrix[0], gameMatrix[4], gameMatrix[8]]);
    line.push([gameMatrix[2], gameMatrix[4], gameMatrix[6]]);

    let lineKey = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < line.length; i += 1) {
      if (line[i].includes(0)) {
        if (
          line[i][0] * line[i][1] === 1 ||
          line[i][0] * line[i][2] === 1 ||
          line[i][1] * line[i][2] === 1
        ) {
          return lineKey[i][line[i].indexOf(0)];
        } else if (
          line[i][0] * line[i][1] === 4 ||
          line[i][0] * line[i][2] === 4 ||
          line[i][1] * line[i][2] === 4
        ) {
          return lineKey[i][line[i].indexOf(0)];
        }
      }
    }

    let sumGameMatrix = 0;

    for (let j of gameMatrix) {
      sumGameMatrix += j;
    }

    if (gameMatrix[4] === 0) {
      return 4;
    } else if (sumGameMatrix < 3) {
      switch (0) {
        case gameMatrix[0]:
          return 0;
          break;
        case gameMatrix[2]:
          return 2;
          break;
        case gameMatrix[6]:
          return 6;
          break;
        case gameMatrix[8]:
          return 0;
          break;
        default:
          break;
      }
    }

    for (let i = 0; i < line.length; i += 1) {
      if (line[i][0] + line[i][1] + line[i][2] === 1) {
        return lineKey[i][line[i].indexOf(0)];
      }
    }

    if (gameMatrix.includes(0)) {
      return gameMatrix.indexOf(0);
    }

    // return; //Must return value from 0 to 8
  }

  getUserName() {
    return "Литовченко Юрий";
  }
}
