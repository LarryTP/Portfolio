// Navbar scroll resize //
var navbar = document.querySelector(".navbar");
window.onscroll = () =>{
    this.scrollY > 20 ? navbar.classList.add("sticky") : navbar.classList.remove("sticky");
}

// Nav toggle //
const navMenu = document.querySelector(".menu");
      navToggle = document.querySelector(".menu-btn");
      if(navToggle) {
        navToggle.addEventListener("click" , () => {
            navMenu.classList.toggle("active");
        })
      }

      const navLink = document.querySelectorAll(".nav-link");
      function linkAction() {
        const navMenu = document.querySelector(".menu");
        navMenu.classList.remove("active")
      }
      navLink.forEach(n => n.addEventListener("click", linkAction))

      const Section = document.querySelectorAll('section[id')
      function scrollActive() {
          const scrollY = window.pageYOffset 
          Section.forEach(current => {
            const sectionHeight = current.offsetHeight
            const sectionTop = current.offsetTOp - 50;
            sectionId = current.getAttribute('id')
            if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.add('active')
            }
            else {
                document.querySelector('.links a[href*=' + sectionId + ']').classList.remove('active')
            }
          })
      }
      window.addEventListener('scroll', scrollActive)

// Skills Animation //
const skills_wrap = document.querySelector(".about-skills"),
      skills_bar = document.querySelectorAll(".progress-line");
      window.addEventListener("scroll", () => {
          skillsEffect();
      })
      function checkScroll(el) {
          let rect = el.getBoundingClientRect();
          if(window.innerHeight >= rect.top + el.offsetHeight) return true;
          return false; 
      }
      function skillsEffect() {
        if(!checkScroll(skills_wrap)) return;
        skills_bar.forEach((skill) => (skill.style.width = skill.dataset.progress));
      }

// Item Filter //
        const FilterContainer = document.querySelector(".portfolio-filter"),
              filterBtns = FilterContainer.children;
              totalFilterBtn = filterBtns.length;
              PortfolioItems = document.querySelectorAll(".portfolio-item"),
              totalportfolioItem = PortfolioItems.length;
              for(let i=0; i < totalFilterBtn; i++) {
                filterBtns[i].addEventListener("click", function() {
                    FilterContainer.querySelector(".active").classList.remove("active");
                    this.classList.add("active");
                    const filterValue = this.getAttribute("data-filter")
                    for( let k=0; k<totalportfolioItem; k++) {
                        if(filterValue === PortfolioItems[k].getAttribute("data-category")) {
                            PortfolioItems[k].classList.remove("hide");
                            PortfolioItems[k].classList.add("show");
                        }
                        else {
                            PortfolioItems[k].classList.remove("show");
                            PortfolioItems[k].classList.add("hide");
                        }
                        if(filterValue === "all") {
                            PortfolioItems[k].classList.remove("hide");
                            PortfolioItems[k].classList.add("show");
                        }
                    }
                })
              }

// Lightbox //        
              const lightbox = document.querySelector(".lightbox"),
                    lightboxImg = lightbox.querySelector(".lightbox-img"),
                    lightboxClose = lightbox.querySelector(".lightbox-close"),
                    lightboxText = lightbox.querySelector(".caption-text"),
                    lightboxCounter = lightbox.querySelector(".caption-counter");
                    let itemIndex = 0;
                    for(let i=0; i<totalportfolioItem; i++) {
                        PortfolioItems[i].addEventListener("click", function() {
                            itemIndex=i;
                            changeItem();
                            toggleLightbox();
                        })
                    }

                    function nextItem() {
                        if(itemIndex == totalportfolioItem-1) {
                            itemIndex=0;
                        }
                        else {
                            itemIndex++
                        }
                        changeItem();
                    }
                    
                    function prevItem() {
                        if(itemIndex == 0) {
                            itemIndex=totalportfolioItem-1;
                        }
                        else {
                            itemIndex--
                        }
                        changeItem();
                    }

                    function toggleLightbox() {
                        lightbox.classList.toggle("open");
                    }
                    function changeItem() {
                        imgSrc = PortfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
                        lightboxImg.src=imgSrc;
                        lightboxText.innerHTML=PortfolioItems[itemIndex].querySelector("h4").innerHTML;
                        lightboxCounter.innerHTML=(itemIndex+1) + " of " + totalportfolioItem;
                    }

                    lightbox.addEventListener("click", function(event) {
                        if(event.target === lightboxClose || event.target === lightbox) {
                            toggleLightbox()
                        }
                    })

                    const menuBtn = document.getElementById("menu-btn");
                    const navLinks = document.getElementById("nav-links");
                    const menuBtnIcon = menuBtn.querySelector("i");
                    
                    menuBtn.addEventListener("click", (e) => {
                      navLinks.classList.toggle("open");
                    
                      const isOpen = navLinks.classList.contains("open");
                      menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
                    });
                    
                    navLinks.addEventListener("click", (e) => {
                      navLinks.classList.remove("open");
                      menuBtnIcon.setAttribute("class", "ri-menu-line");
                    });
                    
                    const scrollRevealOption = {
                      distance: "50px",
                      origin: "bottom",
                      duration: 1000,
                    };
                    
                    ScrollReveal().reveal(".header__image img", {
                      ...scrollRevealOption,
                      origin: "right",
                    });
                    ScrollReveal().reveal(".header__content h1", {
                      ...scrollRevealOption,
                      delay: 500,
                    });
                    ScrollReveal().reveal(".header__content .section__description", {
                      ...scrollRevealOption,
                      delay: 1000,
                    });
                    ScrollReveal().reveal(".header__content .header__btn", {
                      ...scrollRevealOption,
                      delay: 1500,
                    });
                    
                    ScrollReveal().reveal(".explore__image img", {
                      ...scrollRevealOption,
                      origin: "left",
                    });
                    ScrollReveal().reveal(".explore__content .section__header", {
                      ...scrollRevealOption,
                      delay: 500,
                    });
                    ScrollReveal().reveal(".explore__content .section__description", {
                      ...scrollRevealOption,
                      delay: 1000,
                    });
                    ScrollReveal().reveal(".explore__content .explore__btn", {
                      ...scrollRevealOption,
                      delay: 1500,
                    });
                    
                    ScrollReveal().reveal(".banner__card", {
                      ...scrollRevealOption,
                      interval: 500,
                    });
                    
                    ScrollReveal().reveal(".chef__image img", {
                      ...scrollRevealOption,
                      origin: "right",
                    });
                    ScrollReveal().reveal(".chef__content .section__header", {
                      ...scrollRevealOption,
                      delay: 500,
                    });
                    ScrollReveal().reveal(".chef__content .section__description", {
                      ...scrollRevealOption,
                      delay: 1000,
                    });
                    ScrollReveal().reveal(".chef__list li", {
                      ...scrollRevealOption,
                      delay: 1500,
                      interval: 500,
                    });
                    
                    const swiper = new Swiper(".swiper", {
                      loop: true,
                    
                      pagination: {
                        el: ".swiper-pagination",
                      },
                    });