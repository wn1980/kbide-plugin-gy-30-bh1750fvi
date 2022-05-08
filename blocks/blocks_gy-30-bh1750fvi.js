Blockly.Blocks['bh1750'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("bh17501", null,["Plugin.bh1750"], ["Plugin.bh1750"]), "bh17501")
        .appendField("begin ADDR")
        .appendField(new Blockly.FieldTextInput("0x23"), "BH1750ADD");
		/*
    this.appendValueInput("BH1750SDA")
        .setCheck("Number")
        .appendField("SDA PIN");
    this.appendValueInput("BH1750SCL")
        .setCheck("Number")
        .appendField("SCL PIN");
		*/
	this.appendDummyInput()
		.appendField("I2C PORT")
		.appendField(new Blockly.FieldDropdown([["Wire1","Wire1"], ["Wire","Wire"], ["none","none"]]), "BH1750_I2C_PORT");
	this.appendDummyInput()
		.appendField("MODE")
		.appendField(new Blockly.FieldDropdown([["CONTINUOUS_HIGH_RES_MODE","CONTINUOUS_HIGH_RES_MODE"], ["CONTINUOUS_HIGH_RES_MODE_2","CONTINUOUS_HIGH_RES_MODE_2"], ["CONTINUOUS_LOW_RES_MODE","CONTINUOUS_LOW_RES_MODE"]]), "BH1750_MODE");
		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bh1750read'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("bh17501", null,["Plugin.bh1750"], ["Plugin.bh1750"]), "bh17501")
        .appendField("readLightLevel (lux)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    
 this.setTooltip("");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['bh1750read_klux'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("bh17501", null,["Plugin.bh1750"], ["Plugin.bh1750"]), "bh17501")
        .appendField("readLightLevel (kLux)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    
 this.setTooltip("");
 this.setHelpUrl("");
  }
};
