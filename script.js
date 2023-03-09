$(document).ready(function() {

/*project card dynamically rendered data*/

  var projectData = [  
    {
      title: 'Garden Weather',
      text: '<p>Built a garden weather app that when given the user input of location tells the user the temperature outside and whether the temperature is within the range that a specific crop can handle. Displays a list of common garden crops and the temperature ranges that they can handle alongside a dynamically rendered green check or red x mark. Created dynamic messages telling users whether a certain plant is happy based on the current weather temperature for the user’s area. I used JavaScript and the OpenWeatherMapAPI.</p>',

      image: ['assets/projectsnapshots/GardenWeather.PNG'],
      link: ['https://sierra25.github.io/Garden-Weather-App/'],
      readMore: ['https://github.com/sierra25/Garden-Weather-App']

    },
    {
      title: 'Sticky Notes',
      text: '<p>This is a sticky notes app. It allows the user to write the title and description of their task in the content of their sticky notes using the input fields in the UI form. Each note is saved in local storage and is then displayed on the screen. To create or clear a note the user can press the add or delete buttons. The input field contents will automatically clear for users to input new note content when users click their mouse inside the input fields. The app also allows users to change the background color of the page. It is responsive on all devices. I used Javascript, HTML, and CSS in this project.</p>',

      image: ['assets/projectsnapshots/notes-app-snip.PNG'],
      link: ['https://sierra25.github.io/Notes-App/'],
      readMore: ['https://github.com/sierra25/Notes-App/']

    }, 
    {

      title: 'DayPlanner',
      text: '<p>Created a dynamic user interface people can use to plan out the hours in their day. The app visualizes the hours of the day via a pie chart and time block schedule board. Implemented a useful tool for calculating the hours spent on each task for users interested in building a schedule that is correctly allocating the time available in a twenty four hour day. The schedule has add and delete functionality for each task the user inputs and lets the user know what their current sum of hours is and the hours in the day that they have remaining.</p>',

      image: ['assets/projectsnapshots/dayplanner.PNG'],
      link: ['https://sierra25.github.io/Dayplanner-3/'],
      readMore: ['https://github.com/sierra25/Dayplanner-3']

    },
    
    {
      title: 'Falling Petals',
      text: '<p>Made a kid friendly version of the game “Hangman”. My aim was for the game to be created as an educational tool for teachers to use in a noncompetitive, classroom setting. In this iteration of the game players have more opportunity to correctly guess the word in comparison to a regular game of Hangman.I used Javascript, HTML, and CSS in this project.</p>',

      image: ['assets/projectsnapshots/HangmanGameSnapShot.png'],
      link: ['https://sierra25.github.io/Flower-Game/'],
      readMore: ['assets/projectReadMe/Falling Petals Game Readme.pdf']

    }, 
    {
      title: 'Sortable Movie Database',
      text: '<p>This is a Movie Database. There is login validation functionality for users. It allows the user to sort movies in the database based on title, year, oldest, most recent, or by keywords. When a user clicks on a movie, other information such as Year, Cast and Genres is displayed. The user can specify the number of movies displayed on a page. I used Python, Flask, and SQLite in this project.</p>',

      image: ['assets/projectsnapshots/movie_app_snip.PNG'],
      link: ['https://sierra25.github.io/Movie-Database-Flask-App/'],
      readMore: ['https://github.com/sierra25/Movie-Database-Flask-App']

    }, {
      title: 'Algorithm Simulations',
      text: '<p>This program is a virtual-memory page replacement algorithm simulation that runs different page replacement algorithms and outputs the number of page faults that occur in each run. The program is written in C++. It implements the following page replacement algorithms: First-In First-Out (FIFO), Least Recently Used (LRU), and Optimal (OPT). I used C++ and ran it through Linux servers.</p>',

      image: ['assets/projectsnapshots/PageReplacementAlgorithm1.png'],
      link: ['assets/projectReadMe/PageReplacementReadMe.pdf'],
      readMore: ['https://github.com/sierra25/algorithms/']

    }
  ];

  // added listener to all the cards so they will flip when clicked
  function addListener() {
    var cards = document.querySelectorAll(".card.effect_click");

    for (var i = 0; i < cards.length; i++) {
      clickListener(cards[i]);
    }

    function clickListener(card) {
      card.addEventListener("click", function() {
        this.classList.toggle("flipped");
      });
    }
  }

  //adds portfolio project card elements to the HTML
  function showProjectCards() {
    var html = '';

    projectData.forEach(function(project) {
      html += '<div class="col-sm-6 col-md-4">';
      html += '<div class="card effect_click"><div class="card_front">';
      html += '<figure><img class="img-responsive" src="' + project.image[0] + '">';
      html += '<figcaption class="project-title">';
      html += project.title;
      html += '</figcaption></figure></div>';

      html += '<div class="card_back"><figure>';
      html += '<div class="project-title">' + project.title + '</div>';
      html += '<figcaption">';
      html += '<div class="project-body">' + project.text + '</div>';
      html += '<a target="_blank" href="'+ project.readMore +'"class="btn btn-primary">Read More</a> &nbsp';
      html += '<a target="_blank" href="'+ project.link +'"class="btn btn-primary">Live Demo</a> &nbsp';
      

      

      html += '</div></figcaption></figure></div>';
      html += '</div>';
      html += '</div>';
    });

    $('#theProjects').append(html);
    addListener();
  }

  showProjectCards();

  
});

/*adding cool cursor effect*/

var trail = {
  dots: null,
  mousex:0,
  mousey:0,
  length:10,
  Dot: function()
  {
    var oDot = document.createElement("div");
    $(oDot).addClass("dot");
    $(document.body).append(oDot);
    return oDot;
  },

  createDots: function()
  {
    trail.dots = [];
    for(i=0;i<trail.length;i++)
    {
      var dot = new trail.Dot();          
      $(dot).css({opacity:(trail.length-i)/trail.length});
      trail.dots[i]= dot;
    }
  },
  
  follow: function(tx, ty, dot)
  {
    var dotx = parseInt($(dot).css("left"));
    var doty = parseInt($(dot).css("top"));
    var newx = ((tx+dotx*2)/3);
    var newy = ((ty+doty*2)/3);
    
    $(dot).css({top:newy, left:newx});    
  },
  
  move: function()
  {
    trail.follow(trail.mousex, trail.mousey, trail.dots[0]);
    
    for(i=1;i<trail.length;i++)
    {
      dot = trail.dots[i-1];
      var tx = parseInt($(dot).css("left"));
      var ty = parseInt($(dot).css("top"));
      trail.follow(tx,ty, trail.dots[i]);
    }
  },
  mousemove: function(mx,my)
  {
    trail.mousex = mx;
    trail.mousey = my;
  },
  
  initialize: function()
  {
    trail.createDots();
    setInterval(function(){ trail.move(); }, 40);
  }
};
    
trail.initialize();

$(document).mousemove(function(e){
  trail.mousemove(e.pageX, e.pageY);
});