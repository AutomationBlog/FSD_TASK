const fs = require("fs");
const jsonFile = fs.readFileSync("Tasks/Day_4_Task/resume.json", "utf8");
const resumeData = JSON.parse(jsonFile);

console.log(
  "************************** resume.JSON **************************"
);
// Basics details
console.log("Name:", resumeData.basics.name);
console.log("Label:", resumeData.basics.label);
console.log("Website:", resumeData.basics.website);
console.log("Summary:", resumeData.basics.summary);

// Iterate over experience using forEach loop
console.log(
  "************************** forEach loop **************************"
);
console.log("Work Experience:");
resumeData.work.forEach((job) => {
  console.log("Company:", job.company);
  console.log("Position:", job.position);
  console.log("Summary:", job.summary);
  console.log("Start Date:", job.startDate);
  console.log("End Date:", job.endDate);
  console.log("Highlights:", job.highlights.join("\n    - "));
});

// Iterate over education using for loop
console.log("************************** for loop **************************");
console.log("Education:");
for (let i = 0; i < resumeData.education.length; i++) {
  const education = resumeData.education[i];
  console.log("Institution:", education.institution);
  console.log("Area of Study:", education.area);
  console.log("Study Type:", education.studyType);
  console.log("Start Date:", education.startDate);
  console.log("End Date:", education.endDate);
  console.log("GPA:", education.gpa);
  console.log("Courses:", education.courses.join(", "));
  console.log("\n");
}

// Iterate over skills using for...of loop
console.log(
  "************************** for...of loop **************************"
);
console.log("Skills:");
for (const skill of resumeData.skills) {
  console.log("Category:", skill.name);
  console.log("Keywords:", skill.keywords.join(", "));
  console.log("\n");
}

// Iterate over interests using for...in loop
console.log(
  "************************** for...in loop **************************"
);
console.log("Interests:");
for (const index in resumeData.interests) {
  const interest = resumeData.interests[index];
  console.log("Category:", interest.name);
  console.log("Keywords:", interest.keywords.join(", "));
  console.log("\n");
}
