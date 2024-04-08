var blogCount = 0;
        var isButtonDisabled = false;
    
        function addBlog() {               
                if (blogCount < 3) {
                    // If not reached the limit, add a new blog
                    appendNewBlog();
                } else {
                    // If the limit is reached, remove the oldest blog, then add a new blog
                    var blogContainer = document.getElementById('blogContainer');
                    var oldestBlog = blogContainer.firstElementChild;
                    blogContainer.removeChild(oldestBlog);
    
                    // Add a page separator after removing the oldest blog
                    var separator = document.createElement('hr');
                    separator.className = 'page-separator';
                    blogContainer.appendChild(separator);
    
                    // Add a new blog
                    appendNewBlog();
                }
        }
    
        function appendNewBlog() {
            var blogContainer = document.getElementById('blogContainer');
    
            // Create a new blog post element
            var blogElement = document.createElement('div');
            blogElement.className = 'col-md-4 mb-4';
    
            // Blog post content
            blogElement.innerHTML = `
                <div class="card">
                    <img src="/site/Images/html-icon.png" class="card-img-top custom-card-img" alt="blog-image">
                    <div class="card-body">
                        <h5 class="card-title">New Blog</h5>
                        <p>This is a new blog post.</p>
                        <a href="#" class="btn btn-primary">Read More</a>
                    </div>
                </div>
            `;
    
            // Append the new blog post to the container
            blogContainer.appendChild(blogElement);
    
            // Add a page separator after each new blog post
            var separator = document.createElement('hr');
            separator.className = 'page-separator';
            blogContainer.appendChild(separator);
    
            blogCount++;
        }

for (i = 0; i < 3; i++){
    addBlog()
}

document.addEventListener("DOMContentLoaded", function() {
    const navbar = document.querySelector('.navbar');
    const navbarHeight = navbar.offsetHeight;
  
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
  
      if (scrollPosition >= navbarHeight) {
        navbar.style.top = '0';
      } else {
        navbar.style.top = navbarHeight - scrollPosition + 'px';
      }
    });
  });
  