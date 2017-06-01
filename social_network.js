var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


//List everyone and for each of them, list the names of who they follow and who follows them
function whoIFollow(id){ //f01
  var list = data[id].follows;
  for (var i = 0; i < list.length; i++) {
    list.splice(i,1,data[list[i]].name);
  }
    return list;
}

function whoFollowsMe(id){
  var keys = Object.keys(data);
  for (var j in keys){
    console.log(keys.indexOf(id));

  }

}

function listFollowers() {  //name: names
  var keys = Object.keys(data);

  for (var i = 0; i < keys.length; i++) {
    var result = data[keys[i]].name + " follows: ";

    var follows = whoIFollow(keys[i]);
    var follwers = whoFollowsMe(keys[i]);
//    result += follows.join();


    console.log(result);
  }
}

listFollowers();








