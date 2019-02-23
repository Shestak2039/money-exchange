// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency <= 0) return {};
    if (currency >= 10000){
    	return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    }

    let money = {
    	'H' : 0,
    	'Q' : 0,
    	'D' : 0,
    	'N' : 0,
    	'P' : 0
    };

    while (currency != 0) {
	    if (currency - 50 >= 0) {
	    	currency -= 50;
	    	money['H'] += 1;
	    } else if (currency - 25 >= 0) {
	    	currency -= 25;
	    	money['Q'] += 1;
	    } else if (currency - 10 >= 0) {
	    	currency -= 10;
	    	money['D'] += 1;
	    } else if (currency - 5 >= 0) {
	    	currency -= 5;
	    	money['N'] += 1;
	    } else if (currency - 1 >= 0) {
	    	currency -= 1;
	    	money['P'] += 1;
	    }
	 }

	 for (let key in money) {
	 	if (money[key] === 0) {
	 		delete money[key];
	 	}
	 }
	 return money;
}
