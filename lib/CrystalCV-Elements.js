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

var CrystalCV_Experience_StartDate = document.registerElement(
    'CrystalCV-Experience-StartDate',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Start Date Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iExperience = 0;iExperience < person.experience.length;iExperience++)
                    {
                        if(person.experience[iExperience].name == parent_name)
                            person.experience[iExperience].startDate = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Experience_EndDate = document.registerElement(
    'CrystalCV-Experience-EndDate',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience End Date Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iExperience = 0;iExperience < person.experience.length;iExperience++)
                    {
                        if(person.experience[iExperience].name == parent_name)
                            person.experience[iExperience].endDate = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Experience_Title = document.registerElement(
    'CrystalCV-Experience-Title',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Title Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iExperience = 0;iExperience < person.experience.length;iExperience++)
                    {
                        if(person.experience[iExperience].name == parent_name)
                            person.experience[iExperience].title = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Experience_Company = document.registerElement(
    'CrystalCV-Experience-Company',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Company Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iExperience = 0;iExperience < person.experience.length;iExperience++)
                    {
                        if(person.experience[iExperience].name == parent_name)
                            person.experience[iExperience].company = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Experience_Department = document.registerElement(
    'CrystalCV-Experience-Department',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Department Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iExperience = 0;iExperience < person.experience.length;iExperience++)
                    {
                        if(person.experience[iExperience].name == parent_name)
                            person.experience[iExperience].department = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Experience_Supervisor = document.registerElement(
    'CrystalCV-Experience-Supervisor',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iExperience = 0;iExperience < person.experience.length;iExperience++)
                    {
                        if(person.experience[iExperience].name == parent_name)
                            person.experience[iExperience].supervisor = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Experience_Task = document.registerElement(
    'CrystalCV-Experience-Task',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iExperience = 0;iExperience < person.experience.length;iExperience++)
                    {
                        if(person.experience[iExperience].name == parent_name) {
                            if (person.experience[iExperience].tasks == null) {
                                person.experience[iExperience].tasks = [];
                            }

                            person.experience[iExperience].tasks.push(this.innerHTML);
                        }
                    }
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

var CrystalCV_Publication_Author = document.registerElement(
    'CrystalCV-Publication-Author',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name) {
                            if (person.publication[iPublication].authors == null) {
                                person.publication[iPublication].authors = [];
                            }

                            person.experience[iPublication].authors.push(this.innerHTML);
                        }
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_Title = document.registerElement(
    'CrystalCV-Publication-Title',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].title = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_Conference = document.registerElement(
    'CrystalCV-Publication-Conference',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].conference = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_Journal = document.registerElement(
    'CrystalCV-Publication-Journal',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].journal = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_Year = document.registerElement(
    'CrystalCV-Publication-Year',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].year = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_Volume = document.registerElement(
    'CrystalCV-Publication-Volume',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].volume = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_No = document.registerElement(
    'CrystalCV-Publication-No',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].no = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_Page = document.registerElement(
    'CrystalCV-Publication-Page',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].page = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_City = document.registerElement(
    'CrystalCV-Publication-City',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].city = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_State = document.registerElement(
    'CrystalCV-Publication-State',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].state = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_PatentNo = document.registerElement(
    'CrystalCV-Publication-PatentNo',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].patentNo = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_Department = document.registerElement(
    'CrystalCV-Publication-Department',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].department = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_University = document.registerElement(
    'CrystalCV-Publication-University',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].university = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_DOI = document.registerElement(
    'CrystalCV-Publication-DOI',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].doi = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_Edition = document.registerElement(
    'CrystalCV-Publication-Edition',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].edition = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_Type = document.registerElement(
    'CrystalCV-Publication-Type',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].type = this.innerHTML;
                    }
                }}
            }
        )
    }
);

var CrystalCV_Publication_Note = document.registerElement(
    'CrystalCV-Publication-Note',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iPublication = 0;iPublication < person.publication.length;iPublication++)
                    {
                        if(person.publication[iPublication].name == parent_name)
                            person.publication[iPublication].note = this.innerHTML;
                    }
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

var CrystalCV_Skill_Item = document.registerElement(
    'CrystalCV-Skill-Item',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Experience Supervisor Loaded...');
                    var parent_name = this.parentElement.getAttribute('name');

                    for(var iSkill = 0;iSkill < person.skill.length;iSkill++)
                    {
                        if(person.skill[iSkill].name == parent_name) {
                            if (person.skill[iSkill].items == null) {
                                person.skill[iSkill].items = [];
                            }

                            person.skill[iSkill].items.push(this.innerHTML);
                        }
                    }
                }}
            }
        )
    }
);

/*
 * Accomplishments & Rewards
 * */
var CrystalCV_AccomplishmentsAndRewards= document.registerElement(
    'CrystalCV-AccomplishmentsAndRewards',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Skill Loaded...');
                    if(person.accomplishments == null)
                    {
                        person.accomplishments = [];
                    }
                    var name = this.getAttribute("name");
                    person.accomplishments.available = true;
                    person.accomplishments.push({'name':name});
                }}
            }
        )
    }
);

/*
* Certificate
* */
var CrystalCV_Certificate= document.registerElement(
    'CrystalCV-Certificate',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Skill Loaded...');
                    if(person.certificates == null)
                    {
                        person.certificates = [];
                    }
                    var name = this.getAttribute("name");
                    person.certificates.available = true;
                    person.certificates.push({'name':name});
                }}
            }
        )
    }
);

/*
 * Honors & Activities
 * */
var CrystalCV_HonorsAndActivities= document.registerElement(
    'CrystalCV-HonorsAndActivities',
    {
        prototype: Object.create(
            HTMLElement.prototype,{
                createdCallback: {value: function() {
                    //console.log('CrystalCV Skill Loaded...');
                    if(person.activities == null)
                    {
                        person.activities = [];
                    }
                    var name = this.getAttribute("name");
                    person.activities.available = true;
                    person.activities.push({'name':name});
                }}
            }
        )
    }
);