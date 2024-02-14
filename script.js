const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = 'vanity.css';
document.head.appendChild(link);

document.addEventListener("DOMContentLoaded", function() {
    var backToTopButton = document.getElementById("back-to-top-btn");

   
    backToTopButton.addEventListener("click", function() {
       
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });

    
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
        }
    });
});



        
        function fadeInElements() {
            var elements = document.querySelectorAll('.kokoro-container, .kokoro-info-container, .kokoro');
            var opacityStep = 1 / 120; 
            var currentOpacity = 0; 
            
            var interval = setInterval(function() {
                currentOpacity += opacityStep;
                
                if (currentOpacity >= 1) {
                    clearInterval(interval); 
                }
                
                
                elements.forEach(function(element) {
                    element.style.opacity = currentOpacity;
                });
            }, 16); 
        }
    
        
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

  
  function handleScroll() {
    var elements = document.querySelectorAll('.animated-element');
    elements.forEach(function(element) {
      if (isInViewport(element)) {
        element.classList.add('appear'); 
      }
    });
  }

  
  window.addEventListener('scroll', handleScroll);

  
  handleScroll();
