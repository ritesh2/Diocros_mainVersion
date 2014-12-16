/*This function is used for storing of blocks*/
function storeBlocks(){
	var fs = require('fs');
	var folder_name=document.getElementById("fileName").value;
	var root = 'C:/Program Files (x86)/Diocros';
	var path = root+'/workspace/';
	if(folder_name.length>0){
			path+=folder_name.trim()+'/';
			fs.mkdir(path, function(){});
			path+=folder_name.trim()+'.dio';

			var xml = Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace());
			var code_text = 	Blockly.Xml.domToText(xml);
			document.getElementById("output").value+= code_text;				                
		
			fs.writeFile(path,code_text,function(err){
				document.getElementById("output").value+= "\nSaved";				                
				getProjectNames();
				if(err){
					alert('Unable to save '+err);
					document.getElementById("output").value+= "\nNot Saved";				                
				}
			});
	}else{
		alert('Enter the sketch name');
	}

}


/*This function is used for retrieving the blocks from a saved file*/
function restoreBlocks(){

	var code_text = '';
	var fs = require('fs');
	var folder_name=document.getElementById("fileName").value;
	var root = 'C:/Program Files (x86)/Diocros';
	var path = root+'/workspace/';
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


/*This code is used for saving the source code (AVR code) into a file*/
function saveCode(){
		storeBlocks();
		var fs = require('fs');
		var folder_name=document.getElementById("fileName").value;
		var root = 'C:/Program Files (x86)/Diocros';
		var path = root+'/workspace/';
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


/*This is used for invoking the batchfile which compiles and burns the avr code*/
function burnCode(){
		saveCode();
		storeBlocks();
		var file_name = document.getElementById("fileName").value;
		child_process.execFile('.\\bin\\c_and_gen.bat',[file_name], function(error, stdout, stderr){
				document.getElementById("output").value+= stdout;				                
				document.getElementById("output").value+= stderr;	            
              });
	}


function clearConsole(){
			document.getElementById("output").value= "";
	}	


function showCode() {
  			Blockly.Diocros.INFINITE_LOOP_TRAP = null;
		    var code = Blockly.Diocros.workspaceToCode();
		    alert(code);
  }


/*This function os for appending the name to a given HTML list*/
function appendNameToList(name){
					var node = document.createElement("LI");
					var txt = document.createTextNode(name);
					node.appendChild(txt);
					document.getElementById("projList").appendChild(node);
			}


/*This function is for getting the names of the project from the workspace*/
function getProjectNames(){
				var fs = require('fs');
				var selectbox = document.getElementById("projSelect");
				for(var i=selectbox.options.length-1;i>=0;i--)
				{
					selectbox.remove(i);
				}
				fs.readdir("C:/Program Files (x86)/Diocros/workspace/", function(err,files){
					var length=0;
					if((files.length!=null)){
						length+= files.length;
					}
					for(var i=0;i<files.length;i++){
						//appendNameToList(files[i]);
						addOptionToSelect(files[i]);
					}
				});
}

/*This function is used to add OPTION element to HTML select element */
function addOptionToSelect(name) {
			var x = document.createElement("OPTION");
			x.setAttribute("value", name);
			var t = document.createTextNode(name.toUpperCase());
			x.appendChild(t);
			document.getElementById("projSelect").appendChild(x);
	}

