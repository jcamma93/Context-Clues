$(document).ready(function () {
    const friends = ["Mom", "Dad", "Nicole", "Jay", "Kona"];
    const locations = ["Gamestop", "Target", "Walmart", "The Mall", "Lowe's", "Home Depot", "Best Buy", "Aldi", "Kohl's", "Starbucks"];
    const weapons = ["battle axe", "dagger", "long sword", "crossbow", "cannon", "musket", "Desert Eagle", "AK-47", "sniper rifle", "bazooka", "flamethrower", "shotgun", "bayonnet", "candlestick", "rope", "wrench", "lead pipe", "dagger", "fireplace poker", "hammer"];

    for (var i = 1; i <= 100; i++) {
        var $h3 = $("<h3>Accusation " + i + "</h3>");
        $($h3).appendTo("main");
        $($h3).click(getAlert(i));
    }

    function getAlert(i) {
        let friend = friends[i % 5];
        let location = locations[i % 10];
        let weapon = weapons[i % 20];
        function accuAlert() {
            alert("I accuse " + friend + " with the " + weapon + " in " + location + "!");
        }
        return accuAlert;
    }
});