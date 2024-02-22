window.onload = function() {
    //Adding subject field
    var addSubjectBtn = document.getElementById("add-subjects");
    addSubjectBtn.onclick= function() {
        var div = document.createElement("div");
        div.id = "horizontal";

        //subject
        var subject = document.createElement("input");
        subject.name ="subject";
        subject.placeholder= "Subject Name";
        subject.type = "text";

        //fullmarks
        var fullmarks = document.createElement("input");
        fullmarks.type = "fullmarks";
        fullmarks.placeholder ="Fullmarks";
        fullmarks.type ="number";
        fullmarks.value = 100;
        
        //obtained marks
        var obtainedMarks = document.createElement("input");
        obtainedMarks.name ="obtainedMarks";
        obtainedMarks.placeholder ="Obtained Marks";
        obtainedMarks.type ="text";
        obtainedMarks.className = "obtained-marks"

        // Delete button
        var deleteButton = document.createElement("button");
        deleteButton.innerHTML ="<i class='fa fa-trash'></i>";
        deleteButton.className="delete-button";

        //adding input inside div tag
        div.append(subject);
        div.append(fullmarks);
        div.append(obtainedMarks);
        div.append(deleteButton);

        //adding div tag to form
        var dynamicArea=document.getElementById("dynamic-area");
        dynamicArea.append(div);


    // Creating subject tr
    var subjectTr= document.createElement("tr");
    subjectTr.style.textAlign = "center";

    var subjectTd = document.createElement("td");
    subjectTd.setAttribute("colspan","3");

    var fulllmarksTd = document.createElement("td");
fulllmarksTd.innerHTML =100;

    var obtainedTd =document.createElement("td");
    obtainedTd. setAttribute("colspan","2");

    subjectTr.append(subjectTd);
    subjectTr.append(fulllmarksTd);
    subjectTr.append(obtainedTd);

    var subjectBody = document.getElementById("subject-body");
    subjectBody.append(subjectTr);

    // live preview subjectand marks entry
    subject.oninput = function(){
        subjectTd.innerHTML = this.value
    }

    fullmarks.oninput = function(){
        fulllmarksTd.innerHTML = this.value
    }

    obtainedMarks.oninput = function(){
        obtainedTd.innerHTML = this.value

        // Calculate total marks
        var totalMarks = 0;
        var obm = document.getElementsByClassName("obtained-marks");
        for(var i=0; i<obm.length; i++)
        {
            var num = Number(obm[i].value);
            totalMarks = totalMarks+num;
        }
       var totalMarksTd = document.getElementById("total-marks");
        totalMarksTd.innerHTML = totalMarks;
   
        // Calculate percentage
    var noOfSubjects = obm.length;
    var percentage = parseInt(totalMarks/noOfSubjects);
    var percentageTd = document.getElementById("percentage");
    percentageTd.innerHTML = percentage+ "%";

    // Finding grade
    var grade ='';
    if(percentage> 90) grade = 'A+';
    else if(percentage> 80) grade = A;

    else if(percentage> 70) grade = B;

    else if(percentage> 60) grade = C;

    else if(percentage> 50) grade = D;
   
    else grade = 'E';

    var gradeTd = document.getElementById("grade");
    gradeTd.innerHTML = grade;

    }

        //Deleting row
        deleteButton.onclick = function(){
        div.remove()
        }
    }
    // Upload a student preview image
    var studentPicInput= document.getElementById("student-pic-input");
    studentPicInput.onchange = function() {
        var file = this.files[0];
        var url = URL.createObjectURL(file);
        var studentPic = document.getElementById("student-pic");
        studentPic.src = url;  
    }

    // Upload a student school logo
    var schoolLogoInput= document.getElementById("school-logo-input");
    schoolLogoInput.onchange = function() {
        var file = this.files[0];
        var url = URL.createObjectURL(file);
        var schoolLogo = document.getElementById("school-logo");
        schoolLogo .src = url;  
    }
        //live preview school name
        var schoolNameInput = document.getElementById("school-name-input");
        schoolNameInput.oninput = function() {
            var schoolName = document.getElementById("school-name");
            schoolName.innerHTML = this.value;
        }

        // Tagline live preview
        var taglineInput = document.getElementById("tagline");
        taglineInput.oninput = function() {
            var tagline = document.getElementById("tagline-text");
            tagline.innerHTML = this.value;
        }

         // Candidate name live preview
         var candidateNameInput = document.getElementById("candidate-name-input");
         candidateNameInput.oninput = function() {
             var candidateName = document.getElementById("candidate-name");
             candidateName.innerHTML = this.value;
         }
          // Father name live preview
          var fatherNameInput = document.getElementById("father-name-input");
          fatherNameInput.oninput = function() {
              var fatherName = document.getElementById("father-name");
              fatherName.innerHTML = this.value;
          }
          // DOB live preview
          var dobInput = document.getElementById("dob-input");
            dobInput.oninput = function() {
              var dob = document.getElementById("dob");
              dob.innerHTML = this.value;
          }

          //Gender live preview
          var chooseGender = document.getElementById("choose-gender");
          chooseGender.oninput = function() {
            var gender = document.getElementById("gender");
            gender.innerHTML = this.value;

          }
          // Roll live preview
          var rollInput = document.getElementById("roll-input");
            rollInput.oninput = function() {
            var roll = document.getElementById("roll");
            roll.innerHTML = this.value;

          }
    
}