var bio =
{
    "name": "Jesse Emerson",
    "role": "Psychokiller",
    "contacts": {
        "mobile": "555-5555",
        "email": "mrloquacious@gmail.com",
        "github": "mrloquacious",
        "twitter": "nope",
        "blog": "no",
        "location": "Portland, OR"
    },
    "biopic": "images/Psychokiller.jpg",
    "welcomeMsg": "Quidquid latine dictum, altum videtur",

    "skills": [
    "torture", "revenge", "blood-curdling", "leading astray"
    ]
};

function displayBio() {

    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));

    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));

    var fMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var fEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var fTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    var fGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
    var fBlog = HTMLblog.replace("%data%", bio.contacts.blog);
    var fLocation = HTMLlocation.replace("%data%", bio.contacts.location);

    var formattedBio = fMobile + fEmail + fTwitter +fGitHub + fBlog + fLocation;

    $("#topContacts").append(formattedBio);

    var fBioPic = HTMLbioPic.replace("%data%", bio.biopic);

    $("#header").append(fBioPic);

    var fWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

    $("#header").append(fWelcomeMsg);


    if(bio.skills.length > 0) {

        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
}

displayBio();


var work =
{
    "jobs": [
    {
    "employer": "Lucifer",
    "title": "Killer",
    "dates": "Lifetime",
    "location": "Boise, ID",
    "description": "Lots of fun."
},
    {
    "employer": "God",
    "title": "Charmer",
    "dates": "A little while in the Middle Ages.",
    "location": "Osakis, MN",
    "description": "Too nice."
}
]
};

function displayWork() {

    for(job in work.jobs) {

        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

        var formattedWorkInfo = formattedEmployer + formattedTitle +formattedLocation + formattedDates + formattedDescription;

        $(".work-entry:last").append(formattedWorkInfo);
    }
}

displayWork();


var projects =
{
    "projects": [
    {
    "title": "Under-Assistant West Coast Killer",
    "dates": "1492-present",
    "description": "Fun.",
    "images": "images/Psychokiller.jpg"
},
    {
    "title": "Snowman",
    "dates": "1666-present",
    "description": "Cold.",
    "images": "images/Psychokiller.jpg"
}
]
};

projects.display = function() {

    for(project in projects.projects) {

        $("#projects").append(HTMLprojectStart);

        var fTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        var fDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        var fDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        var fImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        var fProjects = fTitle + fDates + fDescription + fImage;

        $(".project-entry:last").append(fProjects);
    }
}

projects.display();


var education =
{
    "schools": [
    {
    "name": "School of Life",
    "degree": "Doctor of Existance",
    "dates": "0 - present",
    "location": "Miami, FL",
    "major": "Death"
},
    {
    "name": "School of Death",
    "degree": "Doctor of Death",
    "dates": "0 - present",
    "location": "Los Angeles, CA",
    "major": "Destruction"
}
],

    "onlineCourses": [
    {
    "title": "Intro to Computer Science",
    "school": "Coursera",
    "dates": "2025",
    "url": "www.fw2b.com"
},
{
    "title": "JavaScript Basics",
    "school": "Udacity",
    "dates": "2016",
    "url": "www.fromwordstoblows.com"
}
]
};

function displayEducation() {

    for(school in education.schools) {

        $("#education").append(HTMLschoolStart);

        var fname = HTMLschoolName.replace("%data%", education.schools[school].name);
        var fdegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var fdates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        var flocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
        var fmajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);

        var formattedSchoolInfo = fname + fdegree + fdates + flocation + fmajor;

        $(".education-entry:last").append(formattedSchoolInfo);
    }

        $(".education-entry:last").append(HTMLonlineClasses);

    for(course in education.onlineCourses) {

        var fOtitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
        var fOschool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].school);
        var fOdates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
        var fOURL = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);

        var formattedOnlineClasses = fOtitle + fOschool + fOdates + fOURL;

        $(".education-entry:last").append(formattedOnlineClasses);
    }
}

displayEducation();

function inName() {
    var name = window.name;
    name = bio.name.trim().split(" ");
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0, 1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] + " " + name[1];
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);
