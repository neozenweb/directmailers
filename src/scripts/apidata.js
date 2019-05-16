import React from 'react';

const api = "https://yapaapi.directmailers.com/api/lookup";
const headers = {
    "AccountId": "27DC27EB-621B-467F-A088-B10A3177225B",
    "AccountKey": "tqJ83p62XMnMy5mq3yP9rm0NH2LvKBYw"
}
const Http = new XMLHttpRequest();
        
export const getAll = () =>    
{
    console.log("Welcome to the APIData script.");
    var data = JSON.stringify({
      "Wait": true,
      "Authentication": {
        "AccountId": "27DC27EB-621B-467F-A088-B10A3177225B",
        "AccountKey": "tqJ83p62XMnMy5mq3yP9rm0NH2LvKBYw"
      },
      "Entry": {
        "Source": "YapaWeb",
        "Offer": "All",
        "Creative": "None",
        "Category": "None"
      },
      "Person": {
        "ResNum": "738354381",
        "Zip": "22314"
      }
    });
    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === this.DONE) {
        console.log(this.responseText);
      }
    });
    
    xhr.open("POST", "https://yapaapi.directmailers.com/api/lookup",true);
    xhr.setRequestHeader("authorization", "Basic Og==");
    xhr.setRequestHeader("accountkey", "tqJ83p62XMnMy5mq3yP9rm0NH2LvKBYw");
    xhr.setRequestHeader("accountid", "27DC27EB-621B-467F-A088-B10A3177225B");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("access-control-allow-origin", "http://localhost:8000");
    
    xhr.send(data);

   }
  
   