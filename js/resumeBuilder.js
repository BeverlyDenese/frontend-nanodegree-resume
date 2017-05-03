/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
 var name = "Beverly Nixon";
 var role = "Software Developer";
 var skills = ["Java", "Teaching" ];
 var formattedName = HTMLheaderName.replace("%data%", name);  
 var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

 var bio = {
	"name" : "Beverly Nixon",
	"role"  : "Software Developer",
	"contacts" : {
		"mobile" : "561-324-7710",
		"email" : "beverlynixon@gmail.com",
		"github" : "BeverlyDenese",
		//"twitter": "@BevDenese",
		"location": "Montana"
		
	},
	"welcomeMsg" : "Hello! How can I help you?",
	//"skills" : ["Java", "Teaching", "Patience"],
	"bioPic" : "images/me.jpg"
	
	
};

 var formattedName = HTMLheaderName.replace("%data%", bio.name);  
 var formattedRole = HTMLheaderRole.replace("%data%", bio.role); 
 var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);  
 var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github); 
 var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email); 
 //var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);  
 var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);  
 var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPic);  
 var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);  
 //var formattedSkills = HTMLskills.replace(%data%, bio.skills)
 
 
 $("#header").prepend(formattedBioPic);
 $("#header").append(formattedMobile);
 $("#header").append(formattedEmail);
 $("#header").append(formattedGithub);
 //$("#header").append(formattedTwitter);
 $("#header").append(formattedLocation);
 
 $("#header").append(formattedWelcomeMsg);
 $("#header").append(HTMLskillsStart);
 //$("#header").append(formattedSkills);
 
 var work = {
	"jobs" : [
	{
	 "employer": "Valencia College",
	 "position":"Hands-on Math Cooridinator",
	 "location": "Orlando, FL",
	 "dates": "May 2015 - August 2016",
	 "description": {
		"multilineDescription": [
			"Successfully create, design, and test hands-on tools for use",
			"in mathematics instruction,  Writer,  Director and Producer of",
			"a series of videos that show my colleagues how to use hands-on ",
			"teaching techniques, Consistently seek more effective tools and",
			"techniques to better serve the students"
		]
	 }
	},
	{
	 "employer": "Valencia College",
	 "position":"Senior Curriculum Assistant",
	 "location": "Orlando, FL",
	 "dates": "2009 - August 2016",
	 "description": {
		 "multilineDescription" : [
			"Design and present workshops on various mathematical topics from",
			"Developmental Math through College Algebra,  Actively  listen to students",
			"to effectively answer their questions, Encourage, motivate, and support all",
			"students and ensure they are successful in their program of study, Lead ",
			"students to develop their problem solving skills"
			]
	 }
	},
	
	{
	 "employer": "Valencia College",
	 "position":"Adjunct Professor of Mathematics",
	 "location": "Orlando, FL",
	 "dates": "2012",
	 "description": {
		 "multilineDescription" : [
			"Designed, implemented, and presented creative lessons for " ,
			"Math I, Created exams to assess students’ retention of concepts" ,
			"85 percent of my students passed the state-wide assessment test"
			]
	 }
	},
	
	{
	 "employer": "Valencia College",
	 "position":"Curriculum Assistant",
	 "location": "Orlando, FL",
	 "dates": "2008 - 2009",
	 "description": {
		 "multilineDescription" : [
			"Taught problem solving strategies to struggling developmental",
			"mathematics students, Earned the Certificate in Tutor Training:",
			"Advanced/Level II from the College Reading and Learning Association" 
			]
	 }

	}
	
	
	]
 }
 

 
 var education = {
	 "schools" : [
	 {
	 "name": "Valencia College",
	 "location": "Orlando, FL",
	 "degree": "AS",
	 "major" : "Computer Programming and Analysis",
	 "dates": "Dec 2016",
	 "url":"valenciacollege.edu"
	 }, 
	 
	 {
	 "name": "Florida Atlantic University",
	 "location": "Boca Raton, FL",
	 "degree": "BA",
	 "major" : "Mathematics",
	 "dates": "May 1997",
	 "url":"fau.edu"
	 }
	 
	 ],
	 
	"onlineCourses" : [
	 {
	 "title": "JavaScript",
	 "school": "Udacity",
	 "dates": "May 2017",
	 "url":"udacity.com"
	 }, 
	 
	 {
	 "title": "GitHub",
	 "school": "Udacity",
	 "dates": "March 2017",
	 "url":"udacity.com"
	 },
	 
	 {
	 "title": "The Complete Cyber Security Course",
	 "school": "Udemy",
	 "dates": "in progress",
	 "url":"udemy.com"
	 }
	 
	 ]
 }
 

				
$("#main").append(work["position"]);
$("#main").append(education.name);	

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 




 




