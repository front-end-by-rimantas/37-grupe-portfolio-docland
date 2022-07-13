function syllabus (syllabusData) {

    console.log(`Bal'a dash, malanore`);
    
    const DOM = document.querySelector('#syllabusJS');
    
    
    let HTML = ``;
    for (const item of syllabusData) {
        HTML += `<div class="WeekBox">
        <div class="WeekNumber">
            <img src="${item.picture}" alt="Calendar">
            <h3>${"Week" +item.week}</h3>
        </div>
        <div class="WeekPlan">
            <div class="ListAndDropdown">
                <h3>${item.weekPlan}</h3>
                <i class="fa fa-angle-up" aria-hidden="true"></i>
            </div>    
            <div class="AboutPlan">
                <p>${item.aboutPlan}</p>
            </div>
            <div class="lecture">    
                <p>${item.hours + " Hours to complete"}</p>
                <p>${item.lectures + " Lectures"}</p>
                <p>${item.videos + " Videos"}</p>
            </div>
            <div class="dropWeekPlan"> 
                <hr class="courseLine">
                <div class="courseList">
                    <div class="courseName"><p><i class="fa fa-play-circle-o" aria-hidden="true"></i>${item.about1}</p></div>
                    <div class="courseLength">
                        <p>${item.courseLength}</p>
                    </div>
                    <div class="courseStatus">
                        <strong>${item.courseStatus1}</strong>
                    </div>
                </div>
                <div class="courseList">
                    <div class="courseName"><p><i class="fa fa-play-circle-o" aria-hidden="true"></i>${item.about2}</p></div>
                    <div class="courseLength">
                        <p>${item.courseLength}</p>
                    </div>
                    <div class="courseStatus">
                        <strong>${item.courseStatus2}</strong>
                    </div>
                </div>
                <div class="courseList">
                    <div class="courseName"><p><i class="fa fa-play-circle-o" aria-hidden="true"></i>${item.about3}</p></div>
                    <div class="courseLength">
                        <p>${item.courseLength}</p>
                    </div>
                    <div class="courseStatus">
                        <strong>${item.courseStatus2}</strong>
                    </div>
                </div>
                <div class="courseList">
                    <div class="courseName"><p><i class="fa fa-play-circle-o" aria-hidden="true"></i>${item.about4}</p></div>
                    <div class="courseLength">
                        <p>${item.courseLength}</p>
                    </div>
                    <div class="courseStatus">
                        <strong>${item.courseStatus2}</strong>
                    </div>
                </div>
                <div class="courseList">
                    <div class="courseName"><p><i class="fa fa-play-circle-o" aria-hidden="true"></i>${item.about5}</p></div>
                    <div class="courseLength">
                        <p>${item.courseLength}</p>
                    </div>
                    <div class="courseStatus">
                        <strong>${item.courseStatus2}</strong>
                    </div>
                </div>
                <div class="courseList">
                    <div class="courseName"><p><i class="fa fa-play-circle-o" aria-hidden="true"></i>${item.about6}</p></div>
                    <div class="courseLength">
                        <p>${item.courseLength}</p>
                    </div>
                    <div class="courseStatus">
                        <strong>${item.courseStatus2}</strong>
                    </div>
                </div>
            </div>
        </div>
    </div>`
                    
    }
    DOM.innerHTML = HTML;
    }
    export { syllabus }

    // for later use hehe yea boi

/* <!-- <div class="instruktor-box">
<div class="zainstruktor">
<img src="./img/people/atlepausis.png" alt="atlepausis">
<div class="about-instructor">
<h6>Sarah Taylor</h6>
<p>UX Consultant & Expertise</p>
<ul>
<li><i class="fa fa-trophy" aria-hidden="true"></i><p>Top Instructor in Skillshare</p></li>
<li><i class="fa fa-user" aria-hidden="true"></i><p>30K+ Students</p></li>
<li><i class="fa fa-desktop" aria-hidden="true"></i><p>10 total courses</p></li>
</ul>
</div>
</div>
<p>
The course has been really helpful. I have been able to understand the fundamentals ofUI Design. The importance of wireframing, prototyping, colours and how to study other site wireframing and to implement them into my UI/UX Creative process.
</p>
</div>
<div class="instruktor-box instruktor2">
<img src="./img/people/kazlauskas.png" alt="kazlauskas">
</div> --> 
*/