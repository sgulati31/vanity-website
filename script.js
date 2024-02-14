const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'vanity.css';
document.head.appendChild(link);

document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("back-to-top-btn");

    // Add click event listener to the button
    backToTopButton.addEventListener("click", function() {
        // Scroll to the top of the page
        window.scrollTo({
            top: 0,
            behavior: "smooth" // Smooth scroll behavior
        });
    });

    // Show the button when the user scrolls down, hide it when at the top
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
});



        // Function to gradually increase opacity
        function fadeInElements() {
            var elements = document.querySelectorAll('.kokoro-container, .kokoro-info-container, .kokoro');
            var opacityStep = 1 / 120; // Step to increase opacity to reach 100% in 2 seconds
            var currentOpacity = 0; // Initial opacity
            
            var interval = setInterval(function() {
                currentOpacity += opacityStep;
                
                if (currentOpacity >= 1) {
                    clearInterval(interval); // Stop increasing opacity when it reaches 100%
                }
                
                // Apply the current opacity to each element
                elements.forEach(function(element) {
                    element.style.opacity = currentOpacity;
                });
            }, 16); // Run the interval every 16 milliseconds for smoother animation
        }
    
        // Call the fadeInElements function when the window loads
        window.addEventListener('load', fadeInElements);

        function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Function to handle scroll event
  function handleScroll() {
    var elements = document.querySelectorAll('.animated-element');
    elements.forEach(function(element) {
      if (isInViewport(element)) {
        element.classList.add('appear'); // Add the 'appear' class when the element is in view
      }
    });
  }

  // Add scroll event listener
  window.addEventListener('scroll', handleScroll);

  // Initial check when the page loads
  handleScroll();
