    var gui = require('nw.gui');
    var child_process = require('child_process');

	 var Menu = new gui.Menu({
        type:   'menubar'
    });
    
    var downloadMenu = new gui.Menu();

    downloadMenu.append(
        new gui.MenuItem({
            label: 'Download',
            click: function() {
              child_process.exec('cmd /c sample.bat', function(error, stdout, stderr){
                  alert('Platform : '+stderr);
                });
            }
        })
    );

   Menu.append(
        new gui.MenuItem({
            label: 'File',
            submenu: downloadMenu
        })
    );

  gui.Window.get().menu = Menu;
