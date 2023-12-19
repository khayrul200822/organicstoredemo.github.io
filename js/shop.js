/** preloader initialize**/
$('.js-preloader').preloadinator({
  minTime: 2000
});

//get elements
const color_areas = document.querySelectorAll(".color_box");

color_areas.forEach((color_area) => {
  const color_display_board = color_area.querySelector(".color_board");
  const color_sport = color_area.querySelector(".color_div");
  const color_card = color_area.querySelector(".color_field");
  const color_uniqe_name = color_area.querySelector(".color_name");
  color_area.addEventListener("mouseover", () => {
    color_display_board.style.display = "flex"
    let current_bg_color = getComputedStyle(color_sport , null)["backgroundColor"];
    color_card.style.backgroundColor = `${current_bg_color}`
 

    //***color name founder */
    function getClosestColorName(rgbCode) {
      // Define a list of color names and their RGB values
      const colorNames = {
          "Red": [255, 0, 0],
          "Green": [0, 255, 0],
          "Blue": [0, 0, 255],
          "Crimson": [220, 20, 60],
          "Darkcyan": [0, 139, 139],
          "Violet": [238, 130, 238],

      };
  
      // Convert the input RGB code to an array of integers
      const rgbArray = rgbCode.replace(/[^\d,]/g, '').split(',').map(Number);
  
      // Calculate the Euclidean distance between the input RGB and each color in the list
      let closestColor = null;
      let closestDistance = Number.MAX_SAFE_INTEGER;
  
      for (const [colorName, colorValue] of Object.entries(colorNames)) {
          const distance = calculateEuclideanDistance(rgbArray, colorValue);
  
          if (distance < closestDistance) {
              closestColor = colorName;
              closestDistance = distance;
          }
      }

      return closestColor;
  }
  
  function calculateEuclideanDistance(arr1, arr2) {
      return Math.sqrt(arr1.reduce((sum, value, index) => sum + Math.pow(value - arr2[index], 2), 0));
  }
  
  // Example usage
  const rgbCode = current_bg_color; // Replace with your RGB code
  const colorName = getClosestColorName(rgbCode);
  color_uniqe_name.textContent = colorName

  })
  color_area.addEventListener("mouseout", () => {
    color_display_board.style.display = "none"
  })
})

//script for price range making
const price_inputs = document.querySelectorAll(".range_div input");
const progress_bar = document.querySelector(".price_progress");
let price_gap = 1000;

price_inputs.forEach( input  => {
  input.addEventListener("input", (e) => {
    let minValue = parseInt(price_inputs[0].value);
    let maxValue = parseInt(price_inputs[1].value)
    if(maxValue - minValue < price_gap){
      if(e.target.className ==="min_price_range"){
        price_inputs[0].value = maxValue - price_gap
      }else{
        price_inputs[1].value = minValue + price_gap
      }
    }else{
       progress_bar.style.left = (minValue / price_inputs[0].max)*100 + "%";
    progress_bar.style.right = 100- (maxValue / price_inputs[1].max) * 100 +"%"
    }
   
    
  })
})

var swiper = new Swiper(".mySwiper", {
  // slidesPerView: 1,
  // mousewheel: true,
  keyboard: true,
  autoplay: false,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination2',
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
  },

});
