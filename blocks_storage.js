function storeBlocks(){
	var fs = require('fs');
	var folder_name=document.getElementById("fileName").value;
	var path = './workspace/';
	if(folder_name.length>0){
			path+=folder_name.trim()+'/';
			fs.mkdir(path, function(){});
			path+=folder_name.trim()+'.dio';

			var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
			var code_text = 	Blockly.Xml.domToText(xml);
			document.getElementById("output").value+= code_text;				                
		
			fs.writeFile(path,code_text,function(err){
				document.getElementById("output").value+= "\nSaved";				                
				if(err){
					alert('Unable to save '+err);
					document.getElementById("output").value+= "\nNot Saved";				                
				}
			});
	}else{
		alert('Enter the sketch name');
	}

}


function restoreBlocks(){

	var code_text = '';
	var fs = require('fs');
	var folder_name=document.getElementById("fileName").value;
	var path = './workspace/';
	if(folder_name.length>0){
			path+=folder_name.trim()+'/';
			fs.mkdir(path, function(){});
			path+=folder_name.trim()+'.dio';

		fs.readFile(path,function(err,data){
			document.getElementById("output").value+= "\nData restored";				                
			if(err){
				alert('Unable to restore '+err);
				document.getElementById("output").value+= "\nNot Restored";
			}else{
				var code_dom= Blockly.Xml.textToDom(data);
				Blockly.Xml.domToWorkspace(Blockly.getMainWorkspace(), code_dom);
			}
		});
	}else{
		alert('Enter the sketch name');
	}
}

function saveCode(){
		var fs = require('fs');
		var folder_name=document.getElementById("fileName").value;
		var path = './workspace/';
		if(folder_name.length>0){
		path+=folder_name.trim()+'/';
		fs.mkdir(path, function(){});
		path+=folder_name.trim()+'.c';
			var code=Blockly.Diocros.workspaceToCode();
			document.getElementById("output").value=code;				                
					
			fs.writeFile(path, code, function (err) {
				if (err) throw err;
				document.getElementById("output").value+= "\nSaved";				                
			});
		}else{
			alert('Enter sketch name');
		}
	}

function burnCode(){
		saveCode();
		var file_name = document.getElementById("fileName").value;
		child_process.execFile('.\\bin\\c_and_gen.bat',[file_name], function(error, stdout, stderr){
				document.getElementById("output").value+= stdout;				                
				document.getElementById("output").value+= stderr;	            
              });
	}


function clearConsole(){
			document.getElementById("output").value= "";
	}	