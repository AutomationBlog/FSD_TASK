let countdownTen = function (callback) {
    setTimeout(function () {
    document.getElementById('heading').innerText = 10;
    console.log(10);
    callback();
  }, 1000);
};

let countdownNine = function (callback) {
    setTimeout(function () {
      document.getElementById("heading").innerText = 9;
    console.log(9);
    callback();
  }, 1000);
};

let countdownEight = function (callback) {
    setTimeout(function () {
      document.getElementById("heading").innerText = 8;
    console.log(8);
    callback();
  }, 1000);
};

let countdownSeven = function (callback) {
    setTimeout(function () {
      document.getElementById("heading").innerText = 7;
    console.log(7);
    callback();
  }, 1000);
};

let countdownSix = function (callback) {
    setTimeout(function () {
      document.getElementById("heading").innerText = 6;
    console.log(6);
    callback();
  }, 1000);
};

let countdownFive = function (callback) {
    setTimeout(function () {
      document.getElementById("heading").innerText = 5;
    console.log(5);
    callback();
  }, 1000);
};

let countdownFour = function (callback) {
    setTimeout(function () {
      document.getElementById("heading").innerText = 4;
    console.log(4);
    callback();
  }, 1000);
};

let countdownThree = function (callback) {
    setTimeout(function () {
      document.getElementById("heading").innerText = 3;
    console.log(3);
    callback();
  }, 1000);
};

let countdownTwo = function (callback) {
    setTimeout(function () {
      document.getElementById("heading").innerText = 2;
    console.log(2);
    callback();
  }, 1000);
};

let countdownOne = function (callback) {
    setTimeout(function () {
      document.getElementById("heading").innerText = 1;
    console.log(1);
    callback();
  }, 1000);
};

let independenceDay = function () {
    document.getElementById("heading").innerText = "Happy Independence Day!";
  console.log("Happy Independence Day!");
};

window.onload = countdownTen(function () {
  countdownNine(function () {
    countdownEight(function () {
      countdownSeven(function () {
        countdownSix(function () {
          countdownFive(function () {
            countdownFour(function () {
              countdownThree(function () {
                countdownTwo(function () {
                  countdownOne(function () {
                    independenceDay();
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
