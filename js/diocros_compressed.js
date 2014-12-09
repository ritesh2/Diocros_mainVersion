"use strict";goog.provide("Blockly.Blocks.logic"),goog.require("Blockly.Blocks"),Blockly.Blocks.forward={init:function(){this.setHelpUrl("http://www.example.com/"),this.appendDummyInput("forward").appendField("forward"),this.setColour(20),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")}},Blockly.Diocros.forward=function(t){var e=Blockly.Diocros.valueToCode(t,"forward",Blockly.Diocros.ORDER_ATOMIC),o="forward(";return o=o.concat(e),o=o.concat(");\n")},Blockly.Blocks.backward={init:function(){this.setHelpUrl("http://www.example.com/"),this.setColour(20),this.appendDummyInput("backward").appendField("backward"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")}},Blockly.Diocros.backward=function(t){var e=(Blockly.Diocros.valueToCode(t,"backward",Blockly.Diocros.ORDER_ATOMIC),"backward();\n");return e},Blockly.Blocks.wait={init:function(){this.setHelpUrl("http://www.example.com/"),this.setColour(20),this.appendValueInput("A").appendField("wait"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")}},Blockly.Diocros.wait=function(t){var e=parseInt(Blockly.Diocros.valueToCode(t,"A",Blockly.Diocros.ORDER_ATOMIC)),o=(t.getFieldValue("name"),"_delay_ms(");return o=o.concat(e),o=o=o.concat("000"),o=o.concat(");\n")},Blockly.Blocks.led={init:function(){this.setHelpUrl("http://www.example.com/"),this.setColour(20),this.appendValueInput("pin_number").setCheck("Number").appendField("Led ").appendField(new Blockly.FieldDropdown([["ON","on"],["OFF","off"],["",""]]),"mode").appendField(" Position"),this.setInputsInline(!0),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")}},Blockly.Diocros.led=function(t){var e=Blockly.Diocros.valueToCode(t,"pin_number",Blockly.Diocros.ORDER_ATOMIC),o=t.getFieldValue("mode"),i="";switch(o){case"on":i=i.concat("led_on(");break;case"off":i=i.concat("led_off(")}return""==e.trim()&&(e=0),i=i.concat(e+");\n")},Blockly.Blocks.indicator={init:function(){this.setHelpUrl("http://www.example.com/"),this.setColour(20),this.appendDummyInput().appendField("Indicator").appendField(new Blockly.FieldDropdown([["ON","on"],["OFF","off"],["",""]]),"mode").appendField(" Direction").appendField(new Blockly.FieldDropdown([["UP","up"],["RIGHT","right"],["BOTTOM","bottom"],["LEFT","left"]]),"direction"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")}},Blockly.Diocros.indicator=function(t){var e=t.getFieldValue("mode"),o=t.getFieldValue("direction"),i="";if("on"==e.trim())switch(o){case"up":i=i.concat("indicator_on(1)");break;case"right":i=i.concat("indicator_on(2)");break;case"bottom":i=i.concat("indicator_on(3)");break;case"left":i=i.concat("indicator_on(4)")}else switch(o){case"up":i=i.concat("indicator_off(1)");break;case"right":i=i.concat("indicator_off(2)");break;case"bottom":i=i.concat("indicator_off(3)");break;case"left":i=i.concat("indicator_off(4)")}return i=i.concat(";\n")},Blockly.Blocks.buzzer={init:function(){this.setHelpUrl("http://www.example.com/"),this.setColour(20),this.appendDummyInput().appendField("Buzzer").appendField(new Blockly.FieldDropdown([["ON","on"],["OFF","off"],["",""]]),"mode"),this.setPreviousStatement(!0),this.setNextStatement(!0),this.setTooltip("")}},Blockly.Diocros.buzzer=function(t){var e=t.getFieldValue("mode"),o="";return o=o.concat("on"==e.trim()?"buzzer_on()":"buzzer_off()"),o=o.concat(";\n")},Blockly.Blocks.sample_block={init:function(){this.setHelpUrl("http://www.example.com/"),this.setColour(40),this.appendDummyInput().appendField(new Blockly.FieldTextInput("1"),"number"),this.setInputsInline(!0),this.setOutput(!0),this.setTooltip("")}},Blockly.Diocros.sample_block=function(t){var e=t.getFieldValue("number"),o=e;return[o,Blockly.Diocros.ORDER_NONE]},Blockly.Blocks.led_rgb={init:function(){this.setHelpUrl("http://www.example.com/"),this.setColour(65),this.appendDummyInput().appendField(new Blockly.FieldColour("#ff0000"),"NAME"),this.setInputsInline(!0),this.setOutput(!0),this.setTooltip("")}},Blockly.Diocros.led_rgb=function(t){var e=(t.getFieldValue("NAME"),"...");return[e,Blockly.Diocros.ORDER_NONE]},Blockly.Blocks.main={init:function(){this.setHelpUrl("http://www.example.com/"),this.setColour(290),this.appendStatementInput("main").appendField("Start"),this.setTooltip("")}},Blockly.Diocros.main=function(t){var e=Blockly.Diocros.statementToCode(t,"main"),o="";return o=o.concat("#include<avr/io.h>\n#include<util/delay.h>\n#include<avr/leds.h>\n"),o=o.concat("void main(){\n"),o=o.concat(e),o=o.concat("}")};