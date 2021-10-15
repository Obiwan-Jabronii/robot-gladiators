var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney)

var enemyNames = ["Gear Head", "Bender", "Mr. Roboto"];
var enemyHealth = 50;
var enemyAttack = 12;

// Game States
// "WIN" - Player robot has defeated all enemy-robots
//    * Fight all enemy-robots
//    * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less
var fight = function(enemyName) {
    while(playerHealth > 0 && enemyHealth > 0) {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle?");

    if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you want to skip this fight?"); 
        
        if (confirmSkip) {
        window.alert(playerName + " has chosen to skip the fight!");
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
        }
    }
        enemyHealth = enemyHealth - playerAttack;
        
        console.log(playerName + " attacked " + enemyNames[i] + "! " + enemyNames[i] + " now has " + enemyHealth + " health remaining.");
        
        if (enemyHealth <= 0) {
            window.alert(enemyNames[i] + " has died");
            break;
        }
        else {
        window.alert(enemyNames[i] + " still has " + enemyHealth + " health left.")
        }
         
        playerHealth = playerHealth - enemyAttack;
         
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }  
};
for(var i= 0; i < enemyNames.length; i++) {
    var pickedEnemyName = enemyNames[i];
    enemyHealth = 50;
    fight(enemyNames[i]);

}

//console.log(enemyNames);
//for(var i=0; i < enemyNames.length; i++) {
  //  console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index.");
