/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//the code for the assignment, loops through all iterations
window.onload = function() {
  //write your code here
  let artOrPossAdj = ["the", "a", "that", "your", "his", "her", "our"];
  let adjective = ["cozy", "humble", "modern", "subtle"];
  let noun = ["artist", "developer", "pagan", "sage"];
  let extensions = [".com", ".org", ".net"];

  for (
    let artOrPossAdjIndex = 0;
    artOrPossAdjIndex < artOrPossAdj.length;
    artOrPossAdjIndex++
  ) {
    for (
      let adjectiveIndex = 0;
      adjectiveIndex < adjective.length;
      adjectiveIndex++
    ) {
      for (let nounIndex = 0; nounIndex < noun.length; nounIndex++) {
        for (
          let extensionsIndex = 0;
          extensionsIndex < extensions.length;
          extensionsIndex++
        ) {
          console.log(
            artOrPossAdj[artOrPossAdjIndex] +
              adjective[adjectiveIndex] +
              noun[nounIndex] +
              extensions[extensionsIndex]
          );
        }
      }
    }
  }
};

//extra code because I like button generators
window.onclick = function() {
  let artOrPossAdj = ["the", "a", "that", "your", "his", "her", "our"];
  let adjective = ["cozy", "humble", "modern", "subtle"];
  let noun = ["artist", "developer", "pagan", "sage"];
  let extensions = [".com", ".org", ".net"];
  //
  let artOrPossAdjIndex = Math.floor(Math.random() * artOrPossAdj.length);
  let adjectiveIndex = Math.floor(Math.random() * adjective.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let extensionsIndex = Math.floor(Math.random() * extensions.length);
  document.getElementById("domainName").innerHTML =
    artOrPossAdj[artOrPossAdjIndex] +
    adjective[adjectiveIndex] +
    noun[nounIndex] +
    extensions[extensionsIndex];
};

//
