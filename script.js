const chars = {'T':'A', 'A':'U', 'C':'G', 'G':'C'}
var adn = prompt("Inserte ADN");

adn = adn.replace(/[TACG]/g, m => chars[m]);

document.write(adn);
