function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  





function yipee() {
    alert(getCookie("number"))
    var cookie = getCookie("number"); // Example: this function should return a value like "3"
    const recipes = {
        1: {
            title: "Pancakes",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/25/69/0/picwslJ1c.jpg"
        },
        2: {
            title: "Banana Bread",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_250,ar_5:4/v1/img/feed/2886/xeKul9ZdTxKTXs3IGs16_20170323_193853.jpg"
        },
        3: {
            title: "Pizza Muffins",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/45/31/7/I1fZ8mB8QE2gAyGGg4uJ_0S9A5320.jpg"
        },
        4: {
            title: "Macaroni and Cheese",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/29/18/60/picaR4WW6.jpg"
        },
        5: {
            title: "Ground Beef Gyro",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/30/08/1/uaSpHBwtSIuQpcHZKQeu_0S9A0050.jpg"
        },
        6: {
            title: "Greek Salad",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_250,ar_5:4/v1/img/recipes/90/97/5/wgmo3GWuQ4G5cC8VWIqm-IMG_20140203_201743.jpg"
        },
        7: {
            title: "Chinese Fried Rice",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_960/v1/img/recipes/38/74/8/TCTWMVk2RVmMC8K039qk_0S9A2600.jpg"
        },
        8: {
            title: "Lagnasa",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/28/76/8/SyAcnUdwTHGQfekagLBj_ABEL%25203%2520-%2520final_1.png"
        },
        9: {
            title: "Southern Fried Chicken",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/39/61/8/3izidX0TR4eB7BJzCpQJ_SFC%25203%2520-%2520final_1.jpg"
        },
        10: {
            title: "Sloppy Joes",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/32/57/6/picSIWJMH.jpg"
        },
        11: {
            title: "Breakfast Smoothie",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/39/15/99/GqTfEvG6SfEQ2PFjgSmK_Smoothie3.JPG"
        },
        12: {
            title: "Easy Strawberry Jell-O Pie",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/97/98/4/vrVOSvu3TX6ZRGiZDfxG_strawberry-pie-13.jpg"
        },
        13: {
            title: "Silky Chocolate Peanut Butter Pie",
            image: "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/38/40/1/n2KbUbsUTE2dQ8UJHJj4_0S9A1081.jpg"
        }
    };
    

    // Helper function to get the recipe
    function getRecipe(cookie) {
        if (recipes[cookie]) {
            return recipes[cookie];
        } else {
            return { 
                title: "Unknown Recipe", 
                image: "https://via.placeholder.com/150?text=No+Image" 
            };
        }
    }

    // Get the recipe based on the cookie value
    const recipe = getRecipe(cookie);

    // Create the final HTML
    var final = `
        <main>${recipe.title}</main>
        <br>
        <div id="image"><img height="200px" src="${recipe.image}" alt="${recipe.title}" /></div>
    `;

    // Set the content of the element with ID "yes"
    document.getElementById("yes").innerHTML = final;
}