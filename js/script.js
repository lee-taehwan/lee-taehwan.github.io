(function () {
  // navbar
  if ($('.nav-link').length > 0) {
    $('.nav-link, .navbar-brand').on('click', function() {
      $('.nav-link.active').removeClass('active');
      $(this).addClass('active');
    });
  }

  // dark mode
  if ($('.btn-toggle').length > 0) {
    function switchMode(status) {
      $('link[media]').attr('media', status ? 'screen' : 'not screen');
    }

    $('.btn-toggle').on('click', function() {
      var useDarkMode = $(this).attr('data-use-dark-mode');
      switchMode(useDarkMode === 'true');
    });
  }

  const h1 = document.querySelector('h1')
  glitch(h1)
})();

function glitch(element) {
  let count = 0

  setInterval(() => {
    // element
    let skew = Math.random() * 20 - 10
    // element::before
    let top1 = Math.random() * 100
    let btm1 = Math.random() * 100
    // element::after
    let top2 = Math.random() * 100
    let btm2 = Math.random() * 100

    element.style.setProperty('--skew', `${skew}deg`)
    element.style.setProperty('--t1', `${top1}%`)
    element.style.setProperty('--b1', `${btm1}%`)
    element.style.setProperty('--t2', `${top2}%`)
    element.style.setProperty('--b2', `${btm2}%`)
    element.style.setProperty('--scale', `1`)

    count++

    if (count % 15 === 0) {
      let bigSkew = Math.random() * 180 - 90
      element.style.setProperty('--skew', `${bigSkew}deg`)
    }

    if (count % 30 === 0) {
      let bigScale = 1 + Math.random() / 2
      element.style.setProperty('--scale', `${bigScale}`)
    }
  }, 100)
}

// 아래 코드를 버튼 클릭시 실행되도록 바꿔줘
function savePDF() {
  html2canvas(document.querySelector("#capture")).then(canvas => {
    // base64 url 로 변환
    var imgData = canvas.toDataURL('image/jpeg');

    var imgWidth = 210; // 이미지 가로 길이(mm) A4 기준
    var pageHeight = imgWidth * 1.414; // 출력 페이지 세로 길이 계산 A4 기준
    var imgHeight = canvas.height * imgWidth / canvas.width;
    var heightLeft = imgHeight;
    var margin = 0;

    var doc = new jsPDF('p', 'mm', 'a4');
    var position = 0;

    // 첫 페이지 출력
    doc.addImage(imgData, 'jpeg', margin, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    // 한 페이지 이상일 경우 루프 돌면서 출력
    while (heightLeft >= 20) {
      position = heightLeft - imgHeight;
      doc.addPage();
      doc.addImage(imgData, 'jpeg', margin, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    // 파일 저장
    doc.save('sample.pdf');
  });
}