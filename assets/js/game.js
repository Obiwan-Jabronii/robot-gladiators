var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerAttack, playerHealth, playerMoney)
var randomNumber = function(min, max) {
    var value = Math.floor(Math.random() * (max - min + 1) + min);
    return value;
};
var enemyNames = ["Gear Head", "Bender", "Mr. Roboto"];
var enemyHealth = randomNumber(40, 60);
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
        playerMoney = Math.max(0, playerMoney - 10);
        console.log("playerMoney", playerMoney);
        break;
        }
    }
        var damage = randomNumber(playerAttack - 3, playerAttack);
        enemyHealth = Math.max(0, enemyHealth - damage);
        
        console.log(playerName + " attacked " + enemyName + "! " + enemyName + " now has " + enemyHealth + " health remaining.");
        
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney = playerMoney + 20;
            break;
        }
        else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.")
        }
        var damage = randomNumber(enemyAttack - 3, enemyAttack)
        playerHealth = Math.max(0, playerHealth - damage);
        ;
         
        console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");
        if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
        break;
        } else {
        window.alert(playerName + " still has " + playerHealth + " health left.");
        }
    }  
};
var startGame = function(){
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

for (var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0) {
       
        window.alert("Welcome to Robot Gladiators! Round " + ( i + 1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = randomNumber(40, 60);
        fight(pickedEnemyName); 
    if (playerHealth > 0 && i < enemyNames.length - 1){

        var storeConfirm = window.confirm("The fight is over would you like to visit the store?")
        if (storeConfirm) {
            shop();
        }
    }
    } else {
        window.alert("You have lost your robot in battle! Game Over");
        break;
        }
    } 
    
    endGame();
};
 var endGame= function() {
     if(playerHealth > 0) {
        window.alert("Great job you survived! You now have a score of " + playerMoney + ".")
     }
     else {
         window.alert("You've lost your robot in battle.");
     }
     var playAgainConfirm = window.confirm("Would you like to play again?")
 
    if(playAgainConfirm) {
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon.")
    }
 }
 var shop= function(){
    var shopOptionPrompt = window.prompt(
        "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the shop? PLease enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice."
    )
    switch (shopOptionPrompt) {
        case "REFILL":
        case "refill":
            if (playerMoney >= 7){
            window.alert("Refilling the players health by 20 for 7 dollars.");
            playerHealth = playerHealth + 20;
            playerMoney = playerMoney - 7;
            } else {
                window.alert("You do not have enough money!");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7) {
            window.alert("Upgrading player attack by 6 for 7 dollars.");
            playerAttack = playerAttack + 6;
            playerMoney = playerMoney - 7;
            } else {
                window.alert("You do not have enough money!");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store.");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            shop();
            break;
    }
 }
 
 startGame();
 


//console.log(enemyNames);
//for(var i=0; i < enemyNames.length; i++) {
  //  console.log(enemyNames[i]);
    //console.log(i);
    //console.log(enemyNames[i] + " is at " + i + " index.");
