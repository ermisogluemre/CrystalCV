/**
 * Created by emree on 11/13/2015.
 */
//console.log("Loaded CrystalCV-Elements.js");

//CrystalCV Body Element
var CrystalCV_Body = document.registerElement(
    'CrystalCV-Body',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Loaded...');
                    var template_name = this.getAttribute("template");
                    person.template = template_name;
                }}
            }
        )
    }
);

/*
* Personal Information
* */
var CrystalCV_First_Name = document.registerElement(
    'CrystalCV-FirstName',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV First Name Loaded...');
                    person.firstName = this.innerHTML;
                }}
            }
        )
    }
);

var CrystalCV_Last_Name = document.registerElement(
    'CrystalCV-LastName',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Last Name Loaded...');
                    person.lastName = this.innerHTML;
                }}
            }
        )
    }
);

var CrystalCV_Email = document.registerElement(
    'CrystalCV-Email',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Email Loaded...');
                    person.email = this.innerHTML;
                }}
            }
        )
    }
);

var CrystalCV_Title = document.registerElement(
    'CrystalCV-Title',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Title Loaded...');
                    person.title = this.innerHTML;
                }}
            }
        )
    }
);

var CrystalCV_Phone = document.registerElement(
    'CrystalCV-Phone',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Phone Loaded...');
                    person.phone = this.innerHTML;
                }}
            }
        )
    }
);

/*
* Education
* */

var CrystalCV_Education = document.registerElement(
    'CrystalCV-Education',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Education Loaded...');
                    if(person.education == null)
                    {
                        person.education = [];
                    }
                    var name = this.getAttribute("name");
                    person.education.available = true;
                    person.education.push({'name':name});
                }}
            }
        )
    }
);

var CrystalCV_School = document.registerElement(
    'CrystalCV-School',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].school = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Attended = document.registerElement(
    'CrystalCV-School-Attended',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].attended = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Graduated = document.registerElement(
    'CrystalCV-School-Graduated',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].graduated = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Address = document.registerElement(
    'CrystalCV-School-Address',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].address = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Country = document.registerElement(
    'CrystalCV-School-Country',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].country = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Advisor = document.registerElement(
    'CrystalCV-School-Advisor',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].advisor = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Grade = document.registerElement(
    'CrystalCV-School-Grade',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].grade = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Capstone = document.registerElement(
    'CrystalCV-School-Capstone',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].capstone = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Thesis = document.registerElement(
    'CrystalCV-School-Thesis',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].thesis = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Minor = document.registerElement(
    'CrystalCV-School-Minor',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].minor = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Major = document.registerElement(
    'CrystalCV-School-Major',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].major = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_School_Degree = document.registerElement(
    'CrystalCV-School-Degree',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV School Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSchool = 0;iSchool < person.education.length;iSchool++)
                    {
                        if(person.education[iSchool].name == parent_name)
                            person.education[iSchool].degree = this.innerHTML;
                    }
                }}
            }
        )
    }
);

/*
* Experience
* */
var CrystalCV_Experience= document.registerElement(
    'CrystalCV-Experience',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Loaded...');
                    if(person.experience == null)
                    {
                        person.experience = [];
                    }
                    var name = this.getAttribute("name");
                    person.experience.available = true;
                    person.experience.push({'name':name});
                }}
            }
        )
    }
);

/*
* Publication
* */
var CrystalCV_Publication= document.registerElement(
    'CrystalCV-Publication',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Publication Loaded...');
                    if(person.publication == null)
                    {
                        person.publication = [];
                    }
                    var name = this.getAttribute("name");
                    person.publication.available = true;
                    person.publication.push({'name':name});
                }}
            }
        )
    }
);
/*
* Skills
* */
var CrystalCV_Skill= document.registerElement(
    'CrystalCV-Skill',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Skill Loaded...');
                    if(person.skill == null)
                    {
                        person.skill = [];
                    }
                    var name = this.getAttribute("name");
                    person.skill.available = true;
                    person.skill.push({'name':name});
                }}
            }
        )
    }
);