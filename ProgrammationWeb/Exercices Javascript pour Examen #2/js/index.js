// Utilisez la page https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String pour trouver les méthodes à utiliser
// Fiez vous sur les exemples de la page pour vous aider

// 1. Pour chaque string, allez chercher la 1ère lettre, assignez la à une variable et concaténez cette variable à acrostic
'balanced meals'
'identifiable milestones'
'regular graduations'
'third cousins'
'historic milestones'
'dear cousins'
'appropriate milestones'
'yearly festivals'

const acrostic = ``;

document.querySelector('.acrostic').innerHTML = acrostic;

// 2. Pour chaque string, remplacez les voyelles par des étoiles et assignez le résultat à une variable et concaténez cette variable à noVowels
const regex = /[aeiou]/gi;

'Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisci quia?'
'Est quos, quae vero, earum recusandae soluta itaque incidunt velit quo,'
'Labore eaque quas reiciendis tempora ipsa incidunt impedit magnam.'

const noVowels = ``;

document.querySelector('.noVowels').innerHTML = noVowels;

// 3. Enlevez les espaces avant et après et assignez le résultat à une variable et concaténez cette variable à noSpaces
'  Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisci quia?                                       '
'                                  Est quos, quae vero, earum recusandae soluta itaque incidunt velit quo,'
'Labore eaque quas reiciendis tempora ipsa incidunt impedit magnam.  '

const noSpaces = ``;

document.querySelector('.noSpaces').innerHTML = noSpaces;

// 3. Enlevez les espaces avant puis assignez le résultat à une variable et concaténez cette variable à noStartSpaces

'             Lorem ipsum dolor sit amet consectetur adipisicing elit. adipisci quia? '
'                                  Est quos, quae vero, earum recusandae soluta itaque incidunt velit quo, '
'                Labore eaque quas reiciendis tempora ipsa incidunt impedit magnam.'

const noStartSpaces = ``;

document.querySelector('.noStartSpaces').innerHTML = noStartSpaces;