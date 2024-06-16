
console.log("This sentence is printed before the onload function.");
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);

      
    }, 1000);
  };