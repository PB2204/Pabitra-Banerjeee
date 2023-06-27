"use strict";

$('#about-me-btn').click(function () {
    console.log("entered function");
    $('#about-me').show('slow', function () {
        document.getElementById("intro").style.display = 'none';
        document.getElementById("keyboard").style.display = 'none';
        document.getElementById("keyboard-bottom").style.display = 'none';
        document.getElementById("full-screen").style.height = '620px';
        document.getElementById("full-screen").style.width = '1000px';
        document.getElementById("toolbar").style.fontSize = '15px';

    });
});

$('#contact-btn').click(function () {
    console.log("entered function");
    $('#contact').show('slow', function () {
        document.getElementById("intro").style.display = 'none';
        document.getElementById("keyboard").style.display = 'none';
        document.getElementById("keyboard-bottom").style.display = 'none';
        document.getElementById("full-screen").style.height = '620px';
        document.getElementById("full-screen").style.width = '1000px';
        document.getElementById("toolbar").style.fontSize = '15px';
    });
});

$('#project-btn').click(function () {
    console.log("entered function");
    $('#projects').show('slow', function () {
        document.getElementById("intro").style.display = 'none';
        document.getElementById("keyboard").style.display = 'none';
        document.getElementById("keyboard-bottom").style.display = 'none';
        document.getElementById("full-screen").style.height = '620px';
        document.getElementById("full-screen").style.width = '1000px';
        document.getElementById("toolbar").style.fontSize = '15px';
    });
});

$('#about-me-reroute-btn').click(function () {
    console.log("entered function");
    $('#about-me').show('slow', function () {
        document.getElementById("intro").style.display = 'none';
        document.getElementById("projects").style.display = 'none';
        document.getElementById("contact").style.display = 'none';
        document.getElementById("keyboard").style.display = 'none';
        document.getElementById("keyboard-bottom").style.display = 'none';
        document.getElementById("full-screen").style.height = '620px';
        document.getElementById("full-screen").style.width = '1000px';
        document.getElementById("toolbar").style.fontSize = '15px';
    });
});

$('#projects-reroute-btn').click(function () {
    console.log("entered function");
    $('#projects').show('slow', function () {
        document.getElementById("intro").style.display = 'none';
        document.getElementById("contact").style.display = 'none';
        document.getElementById("about-me").style.display = 'none';
        document.getElementById("keyboard").style.display = 'none';
        document.getElementById("keyboard-bottom").style.display = 'none';
        document.getElementById("full-screen").style.height = '620px';
        document.getElementById("full-screen").style.width = '1000px';
        document.getElementById("toolbar").style.fontSize = '15px';
    });
});

$('#contact-reroute-btn').click(function () {
    console.log("entered function");
    $('#contact').show('slow', function () {
        document.getElementById("intro").style.display = 'none';
        document.getElementById("projects").style.display = 'none';
        document.getElementById("about-me").style.display = 'none';
        document.getElementById("keyboard").style.display = 'none';
        document.getElementById("keyboard-bottom").style.display = 'none';
        document.getElementById("full-screen").style.height = '620px';
        document.getElementById("full-screen").style.width = '1000px';
        document.getElementById("toolbar").style.fontSize = '15px';
    });
});

$('#intro-reroute-btn').click(function () {
    console.log("entered function");
    $('#intro').show('fast', function () {
        document.getElementById("about-me").style.display = 'none';
        document.getElementById("projects").style.display = 'none';
        document.getElementById("contact").style.display = 'none';
        document.getElementById("keyboard").style.display = '';
        document.getElementById("keyboard-bottom").style.display = '';
        document.getElementById("full-screen").style.height = '340px';
        document.getElementById("full-screen").style.width = '645px';
        document.getElementById("toolbar").style.fontSize = '8px';
    });
});

// Check if the browser window is closing successfully
function closeBrowserTab() {
    if (confirm("Are you sure you want to close this tab?")) {
      window.close(); // Close the current browser tab
    }
  }
  
  // Call the closeBrowserTab function when a button or link is clicked
  document.getElementById("closeButton").addEventListener("click", closeBrowserTab);  