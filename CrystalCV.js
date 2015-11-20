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

function loadCSS(file,callback)
{
    var imported = document.createElement('link');

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

    imported.rel = "stylesheet";
    imported.type = "text/css";
    imported.href = file;
    document.head.appendChild(imported);
}

var person = {};

 person.firstName = "-| First Name |-";
 person.lastName = "-| Last Name |-";
 person.email = "-| Email |-";
 person.title = "-| Title |-";
 person.phone = "-| Phone |-";

 person.education = [];
 person.education.available = false;
 person.experience = [];
 person.experience.available = false;
 person.publication = [];
 person.publication.available = false;
 person.skill = [];
 person.skill.available = false;

loadScripts("lib/document-register-element.js",function(){
    loadScripts("lib/CrystalCV-Elements.js",function(){
        var template_url_css = 'templates/'+person.template+'/template.css';
        loadCSS(template_url_css,function(){
            loadScripts("lib/ejs.js",function(){
                var template_url = 'templates/'+person.template+'/template.ejs';
                var html = new EJS({url: template_url}).render(person);
                var cv_content = document.getElementsByTagName("CrystalCV-Body")[0];
                cv_content.innerHTML = html;
            });
        });
    });
});






//console.log(person);





