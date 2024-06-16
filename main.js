(function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;
  
    let birthday = "June 17, 2024 00:44:00",
        countDown = new Date(birthday).getTime(),
        x = setInterval(function() {    
  
          let now = new Date().getTime(),
              distance = countDown - now;
  
          document.getElementById("days").innerText = Math.floor(distance / (day)),
            document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
            document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
            document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
  
          //do something later when date is reached
          if (distance < 0) {
            let headline = document.getElementById("headline"),
                countdown = document.getElementById("countdown"),
                content = document.getElementById("content");
               

  
            // headline.innerText = "Wish you many more happy returns of the day Harsha!!!";
            countdown.style.display = "none";
            headline.style.display = "none";
            content.style.display = "block";
  
            clearInterval(x);
            // Create a container for the video and link
            let container = document.createElement("div");
            container.style.textAlign = "center"; // Center align the content
            container.style.width = "100%"; // Ensure it takes full width
            container.style.marginTop = "20px"; // Add some space above the container

            // Create first video element
            let video1 = document.createElement("video");
            video1.src = "Special.mp4"; // Replace with your video path
            video1.controls = true; // Enable player controls
            video1.autoplay = true; // Autoplay the video
            video1.style.width = "100%";
            video1.style.height = "500px";
            // video1.style.maxWidth = "600px"; // Set video width (adjust as needed)

           // Append first video to the container
           container.appendChild(video1);

             // Create link to another HTML page
             let link = document.createElement("a");
             link.href = "photos/gift.html"; // Replace with the URL of your another HTML page
             link.innerText = "Press this after the video ends, and let's share sweet memories of us, cherishing every moment ❤️❤️❤️"; // Text displayed for the link
             link.style.display = "block"; // Ensure the link appears as a block element
             link.style.marginTop = "10px";
             // Append link to the container
            container.appendChild(link);

            // Append the container to the body or any desired container
            document.body.appendChild(container);

          }
          //seconds
        }, 0)
    }());
