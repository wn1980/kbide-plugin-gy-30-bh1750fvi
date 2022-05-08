Blockly.JavaScript['bh1750'] = function(block) {
  var variable_bh17501 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('bh17501'), Blockly.Variables.NAME_TYPE);
  var text_mbh1750add = block.getFieldValue('BH1750ADD');
  var value_bh1750sda = Blockly.JavaScript.valueToCode(block, 'BH1750SDA', Blockly.JavaScript.ORDER_ATOMIC);
  var value_bh1750scl = Blockly.JavaScript.valueToCode(block, 'BH1750SCL', Blockly.JavaScript.ORDER_ATOMIC);
  var dropdown_bh1750_i2c_port = block.getFieldValue('BH1750_I2C_PORT');
  var dropdown_bh1750_mode = block.getFieldValue('BH1750_MODE');
  // TODO: Assemble JavaScript into code variable.
    var code =
      `
#EXTINC#include <Wire.h>#END
#EXTINC#include <BH1750.h>#END

#VARIABLE
BH1750 ${variable_bh17501}(${text_mbh1750add});
#END
//${dropdown_bh1750_i2c_port}.begin(${value_bh1750sda},${value_bh1750scl});\n
${variable_bh17501}.begin(BH1750::${dropdown_bh1750_mode},${text_mbh1750add},&${dropdown_bh1750_i2c_port});
\n
`;
  return code;
};

Blockly.JavaScript['bh1750read'] = function(block) {
  var variable_bh17501 = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('bh17501'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_bh17501}.readLightLevel()`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};

Blockly.JavaScript['bh1750read_klux'] = function(block) {
  var variable_bh17501k = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('bh17501'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble JavaScript into code variable.
  var code = `${variable_bh17501k}.readLightLevel()/1000.`;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.JavaScript.ORDER_NONE];
};
