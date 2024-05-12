(function () {
  // navbar
  if ($('.nav-link').length > 0) {
    $('.nav-link, .navbar-brand').on('click', function() {
      $('.nav-link.active').removeClass('active');
      $(this).addClass('active');
    });
  }

  // charts
  var chart1 = document.getElementById('chart1');
  var chart2 = document.getElementById('chart2');
  var chart3 = document.getElementById('chart3');
  var chart4 = document.getElementById('chart4');
  var options = {
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: '#040404',
      bodyFontColor: '#fff',
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 60
  }
  var borderColor = 'transparent';
  var backgroundColor = ['#9a8ce3', '#3ac3c9', '#ffce03', '#ffa71c'];
  var hoverBackgroundColor = ['grey', 'grey', 'grey', 'grey'];
  var hoverBorderColor = 'rgba(234, 236, 244, 1)';

  if (chart1) {
    new Chart(chart1, {
      type: 'doughnut',
      options,
      data: {
        labels: ['JavaScript ES6', 'React', 'HTML5', 'CSS3'],
        datasets: [{
          data: [50, 40, 7, 3],
          borderColor,
          backgroundColor,
          hoverBackgroundColor,
          hoverBorderColor
        }]
      }
    });
  }

  if (chart2) {
    new Chart(chart2, {
      type: 'doughnut',
      options,
      data: {
        labels: ['Node.js', 'Express', 'Koa', 'Java', 'Spring'],
        datasets: [{
          data: [30, 20, 10, 20, 20],
          borderColor,
          backgroundColor,
          hoverBackgroundColor,
          hoverBorderColor
        }]
      }
    });
  }

  if (chart3) {
    new Chart(chart3, {
      type: 'doughnut',
      options,
      data: {
        labels: ['MongoDB', 'MySQL', 'PostgreSQL'],
        datasets: [{
          data: [40, 34, 27],
          borderColor,
          backgroundColor,
          hoverBackgroundColor,
          hoverBorderColor
        }]
      }
    });
  }

  if (chart4) {
    new Chart(chart4, {
      type: 'doughnut',
      options,
      data: {
        labels: ['GitHub', 'Asana', 'Trello', 'Redmine', 'Adobe Xd'],
        datasets: [{
          data: [40, 15, 15, 20, 10],
          borderColor,
          backgroundColor,
          hoverBackgroundColor,
          hoverBorderColor
        }]
      }
    });
  }

  // carousel
  if ($('.owl-carousel').length > 0) {
    $('.owl-carousel').owlCarousel({
      animateIn: 'fadeIn',
      animateOut: 'fadeOut',
      items: 1,
      autoplay: false,
      dots: true,
      loop: true
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