//import all function of spacecraft file

const {
    createSpacecraft,
    moveForward,
    moveBackward,
    turnLeft,
    turnRight,
    turnUp,
    turnDown,
    executeCommands,
} = require('./SpaceCraft');

//create spacecraft with position and direction

const spacecraft = createSpacecraft(0, 0, 0, 'N');
// ['f', 'r', 'u', 'b', 'l'];

//test custom commad

const commands = ['f', 'r', 'u', 'b', 'l'];

const finalSpacecraft = executeCommands(spacecraft, commands);
//print final output

console.log('Final Position:', finalSpacecraft.x, finalSpacecraft.y, finalSpacecraft.z);
console.log('Final Direction:', finalSpacecraft.direction);

