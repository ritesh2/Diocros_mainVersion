/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Logic blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.logic');

goog.require('Blockly.Blocks');

Blockly.Blocks['forward'] = {
  init: function() {
	this.setHelpUrl('http://www.example.com/');
    this.appendDummyInput("forward")
        .appendField("forward");
	this.setColour(20);
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Diocros['forward'] = function(block) {

  var value_forward = Blockly.Diocros.valueToCode(block, 'forward', Blockly.Diocros.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'forward(';
	code = code.concat(value_forward);
	code = code.concat(');\n');
  return code;
};


Blockly.Blocks['backward'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
     this.appendDummyInput("backward")
        .appendField("backward");
    this.setPreviousStatement(true);
	this.setNextStatement(true);
    this.setTooltip('');
  }
};



Blockly.Diocros['backward'] = function(block) {
  var value_backward = Blockly.Diocros.valueToCode(block, 'backward', Blockly.Diocros.ORDER_ATOMIC);
  // TODO: Assemble JavaScript into code variable.
  var code = 'backward();\n';
  return code;
};


Blockly.Blocks['wait'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendValueInput("A")
		 .appendField("wait");
		this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
Blockly.Diocros['wait'] = function(block) {
  var value_A= parseInt(Blockly.Diocros.valueToCode(block, 'A', Blockly.Diocros.ORDER_ATOMIC));
  
	var time  = block.getFieldValue('name');
	
  // TODO: Assemble JavaScript into code variable.

  var code = 'delay(';
code = code.concat(value_A);
code = code.concat(');\n');
  return code;
};


//This is a generic block for led switching
Blockly.Blocks['led'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendValueInput("pin_number")
        .setCheck("Number")
        .appendField("Led ")
        .appendField(new Blockly.FieldDropdown([["ON", "on"], ["OFF", "off"], ["", ""]]), "mode")
        .appendField(" Position");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};
 
Blockly.Diocros['led'] = function(block) {
  var value_pin_number = Blockly.Diocros.valueToCode(block, 'pin_number', Blockly.Diocros.ORDER_ATOMIC);
  var dropdown_mode = block.getFieldValue('mode');
  // TODO: Assemble Diocros into code variable.
    var code = '';
   switch(dropdown_mode){
    case 'on' : code = code.concat('led_on(');break; 
	case 'off' : code = code.concat('led_off(');break; 
      }
	if(value_pin_number.trim()=='')
			value_pin_number=0;
	  code= code.concat(value_pin_number+');\n');
  
  return code;
};



//This block is for indicator

Blockly.Blocks['indicator'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput()
        .appendField("Indicator")
        .appendField(new Blockly.FieldDropdown([["ON", "on"], ["OFF", "off"], ["", ""]]), "mode")
        .appendField(" Direction")
        .appendField(new Blockly.FieldDropdown([["UP", "up"], ["RIGHT", "right"], ["BOTTOM", "bottom"], ["LEFT", "left"]]), "direction");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Diocros['indicator'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  var dropdown_direction = block.getFieldValue('direction');
  // TODO: Assemble Diocros into code variable.
  var code = '';
  if(dropdown_mode.trim()=='on'){
 	 switch(dropdown_direction){
		case 'up':code= code.concat('indicator_on(1)');break;
		case 'right':code= code.concat('indicator_on(2)');break;
		case 'bottom':code= code.concat('indicator_on(3)');break;
		case 'left':code= code.concat('indicator_on(4)');break;
	 }
  }else{
	switch(dropdown_direction){
		case 'up':code= code.concat('indicator_off(1)');break;
		case 'right':code= code.concat('indicator_off(2)');break;
		case 'bottom':code= code.concat('indicator_off(3)');break;
		case 'left':code= code.concat('indicator_off(4)');break;
	 }
  }
	code = code.concat(';\n');
  return code;
};


//This block is for switching on and off of buzzer.

Blockly.Blocks['buzzer'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput()
        .appendField("Buzzer")
        .appendField(new Blockly.FieldDropdown([["ON", "on"], ["OFF", "off"], ["", ""]]), "mode");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

Blockly.Diocros['buzzer'] = function(block) {
  var dropdown_mode = block.getFieldValue('mode');
  // TODO: Assemble Diocros into code variable.
  var code = '';
  if(dropdown_mode.trim()=='on'){
	code= code.concat('buzzer_on()');
  }else{
	  code= code.concat('buzzer_off()');
  }
  code = code.concat(';\n');
  return code;
};


Blockly.Blocks['sample_block'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
	this.setColour(40);
    this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput("1"), "number");

    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};

Blockly.Diocros['sample_block'] = function(block) {
	 var text_number = block.getFieldValue('number');
  // TODO: Assemble Diocros into code variable.
  var code = text_number;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Diocros.ORDER_NONE];
};


Blockly.Blocks['led_rgb'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(65);
    this.appendDummyInput()
           .appendField(new Blockly.FieldColour("#ff0000"), "NAME");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setTooltip('');
  }
};
Blockly.Diocros['led_rgb'] = function(block) {
  var colour_name = block.getFieldValue('NAME');
  // TODO: Assemble Diocros into code variable.
  var code = '...';
  return [code, Blockly.Diocros.ORDER_NONE];
};

Blockly.Blocks['main'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(290);
    this.appendStatementInput("main")
        .appendField("Start");
    this.setTooltip('');
  }
};

Blockly.Diocros['main'] = function(block) {
  var statements_main = Blockly.Diocros.statementToCode(block, 'main');
  // TODO: Assemble Diocros into code variable.
  var code = '';
  code = code.concat('#include<avr/io.h>\n#include<util/delay.h>\n');
  code = code.concat('void main(){\n');
  code=code.concat(statements_main);
  code=code.concat('}');
  return code;
};

