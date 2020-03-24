let finObj = {};
function insertItems(key){
    let obj = finObj;
    for(i in obj){
      if(obj[i]){
          let items = obj[i].items;
          for(let i = 0;i<items.length;i++){
              let itemsLength = items[i].length;
              if(itemsLength !== 3){
                 let lastItemArr = items[i][itemsLength-1].split(":");
                 let testItem = parseInt(lastItemArr[0]);
                 let noOfOccOfItem = parseInt(lastItemArr[1]);
                 if(testItem == key){
                    noOfOccOfItem++;
                    items[i][itemsLength-1] = [''+testItem+":"+noOfOccOfItem+''];
                 }
              }
          }
      }  
    }
    if(typeof obj[key] == "undefined") obj[key] = {"items":[""+key+":1"]};
    
    console.log(finObj);
    console.log(JSON.stringify(finObj));
 }
//insertItems(1);
function manager(){
    let name = this.name;
    console.log("Manager name is "+name);
 }
 let me = {
    name:"red"
 }
 manager.bind(me);
 manager();
 