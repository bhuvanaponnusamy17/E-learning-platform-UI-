function openCourse(title, videoUrl) {
  const main = document.getElementById("main");
  main.innerHTML = `
    <section class="video-section">
      <button class="back-btn" onclick="goBack()">⬅ Back</button>
      <h2>${title}</h2>
      <div class="video-box">
        <iframe src="${videoUrl}" allowfullscreen></iframe>
      </div>
      <button class="quiz-btn" onclick="startQuiz('${title}')">Take Quiz</button>
    </section>
  `;
}

function startQuiz(courseTitle) {
  const main = document.getElementById("main");
  main.innerHTML = `
    <section class="quiz">
      <h2>${courseTitle} — Quiz</h2>
      <p><strong>1.</strong> What does HTML stand for?</p>
      <label><input type="radio" name="q1" value="a"> HyperText Markup Language</label><br>
      <label><input type="radio" name="q1" value="b"> Hyper Tool Multi Language</label><br><br>

      <p><strong>2.</strong> Which tag is used for creating a hyperlink?</p>
      <label><input type="radio" name="q2" value="a"> &lt;link&gt;</label><br>
      <label><input type="radio" name="q2" value="b"> &lt;a&gt;</label><br><br>

      <button class="quiz-btn" onclick="checkQuiz('${courseTitle}')">Submit Quiz</button>
    </section>
  `;
}

function checkQuiz(courseTitle) {
  const q1 = document.querySelector('input[name="q1"]:checked');
  const q2 = document.querySelector('input[name="q2"]:checked');

  if (!q1 || !q2) {
    alert("Please answer all questions!");
    return;
  }

  let score = 0;
  if (q1.value === "a") score++;
  if (q2.value === "b") score++;

  if (score === 2) {
    alert("🎉 Great job! You passed the quiz!");
    showCertificate(courseTitle);
  } else {
    alert("Try again! You need all answers correct to pass.");
  }
}

function showCertificate(courseTitle) {
  document.body.innerHTML = `
    <div style="text-align:center; padding:50px;">
      <h1>🏅 Certificate of Completion</h1>
      <p>This is to certify that</p>
      <h2><em>Student Name</em></h2>
      <p>has successfully completed the course</p>
      <h3>${courseTitle}</h3>
      <button class="cert-btn" onclick="downloadCertificate('${courseTitle}')">Download Certificate</button>
    </div>
  `;
}

function downloadCertificate(courseTitle) {
  const text = `Certificate of Completion\\n\\nThis certifies that Student Name has successfully completed ${courseTitle}.`;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "certificate.txt";
  link.click();
}

function goBack() {
  location.reload();
}
