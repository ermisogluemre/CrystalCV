/**
 * Created by emree on 11/13/2015.
 */
//console.log("Loading CrystalCV");

function loadScripts(file,callback)
{
    var imported = document.createElement('script');

    if (imported.readyState){  //IE
        imported.onreadystatechange = function(){
            if (imported.readyState == "loaded" ||
                imported.readyState == "complete"){
                imported.onreadystatechange = null;
                callback();
            }
        };
    } else {  //Others
        imported.onload = function(){
            callback();
        };
    }

    imported.src = file;
    document.head.appendChild(imported);
}

var person = {};

loadScripts("lib/ejs.js",function(){});

loadScripts("lib/document-register-element.js",function(){
    loadScripts("lib/CrystalCV-Elements.js",function(){});
});

console.log(person);





