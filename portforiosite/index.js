$('#home-picture').on('inview', function () {
    const element0 = document.querySelector('#pic0');
    element0.animate(
      {
        transform: [
          'translateX(-10000px)',
          'translateX(0px)'
        ],
        opacity: [
          '0',
          '1'
        ]
      },
      {
        duration: 3000,
        fill: 'forwards',
        easing: 'ease'
      }
    );
    const element1 = document.querySelector('#pic1');
    element1.animate(
      {
        transform: [
          'translateY(1000px)',
          'translateY(0px)'
        ],
        opacity: [
          '0',
          '1'
        ]
      },
      {
        duration: 2800,
        fill: 'forwards',
        easing: 'ease'
      }
    );
    const element2 = document.querySelector('#pic2');
    element2.animate(
      {
        transform: [
          'translateX(10000px)',
          'translateX(0px)'
        ],
        opacity: [
          '0',
          '1'
        ]
      },
      {
        duration: 2500,
        fill: 'forwards',
        easing: 'ease'
      }
    );
    const element3 = document.querySelector('#pic3');
    element3.animate(
      {
        transform: [
          'translateY(-10000px)',
          'translateY(0px)'
        ],
        opacity: [
          '0',
          '1'
        ]
      },
      {
        duration: 2000,
        fill: 'forwards',
        easing: 'ease'
      }
    );
  var homeItemFunc1 = document.querySelector('.home-item2');
  var homeItemFunc2 = document.querySelector('.home-item2-2');
  homeItemFunc1.animate(
    {
      transform: [
        'translateX(-2000px)',
        'translateX(0px)'
      ]
    },
    {
      duration: 2000,
      fill: 'forwards',
      easing: 'ease'
    }
  );
  homeItemFunc2.animate(
    {
      transform: [
        'translateX(-2000px)',
        'translateX(0px)'
      ]
    },
    {
      duration: 2000,
      fill: 'forwards',
      easing: 'ease'
    }
  );
});

$('#me-pic').on('inview', function () {
  const homeAni = document.querySelector('#me-pic');
  homeAni.animate(
    {
      opacity: [
        '0',
        '1'
      ]
    },
    {
      duration: 4000,
      fill: 'forwards',
      easing: 'ease'
    }
  );
  const homeAni2 = document.querySelector('#me-ani1');
  homeAni2.animate(
    {
      transform: [
        'translateX(1000px)',
        'translateX(0px)'
      ]
    },
    {
      duration: 2000,
      fill: 'forwards',
      easing: 'ease'
    }
  );
  const homeAni3 = document.querySelector('#me-ani2');
  homeAni3.animate(
    {
      transform: [
        'translateX(1000px)',
        'translateX(0px)'
      ]
    },
    {
      duration: 2300,
      fill: 'forwards',
      easing: 'ease'
    }
  );
});

$('#jsskil').on('inview', function () {
  var htmlPercent = document.querySelector('#htmlskil');
  anime({
    targets: htmlPercent,
    innerHTML: ' 80%',
    width: '160px',
    easing: 'linear',
    delay: 1000,
    round: 1
  });
});
$('.skill-item3').on('inview', function () {
  var cssPercent = document.querySelector('#cssskil');
  anime({
    targets: cssPercent,
    innerHTML: '80%',
    width:'160px',
    easing: 'linear',
    delay: 1000,
    round: 1
  });
  var vuePercent = document.querySelector('#vueskil');
  anime({
    targets: vuePercent,
    innerHTML: '50%',
    width: '100px',
    easing: 'linear',
    delay: 1000,
    round: 1
  });
  var swiftPercent = document.querySelector('#swiftskil');
  anime({
    targets: swiftPercent,
    innerHTML: '40%',
    width: '80px',
    easing: 'linear',
    delay: 1000,
    round: 1
  });
  var jsPercent = document.querySelector('#jsskil');
  anime({
    targets: jsPercent,
    innerHTML: '50%',
    width:'80px',
    easing: 'linear',
    delay: 1000,
    round: 1
  });
});