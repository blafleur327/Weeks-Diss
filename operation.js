let collection = {};

/**
 * Builds a new video example.
 * @param {string} example Chapter.example '1.1' optionally '1.1a'
 * @param {string} description 
 * @param {File} video 
 * @param {HTMLElement} parent 
 */
function VideoExample (example,description,video) {
    this.chapter = String(example).split('.')[0];
    this.example = String(example).split('.')[1];
    this.description = description;
    this.video = video;
    if (collection[this.chapter] == undefined) {
        collection[this.chapter] = {};
    }
    collection[this.chapter][this.example] = this;
}

/**
 * Manages the operation of dual select HTML elements. 
 * @param {array} array 
 */
function DropDown (array = collection) {
    let l1 = document.querySelector(`#layer1`);
    for (let [key,value] of Object.entries(array)) {
        let sel = document.createElement('option');
        sel.innerHTML = `${key}`;   
        l1.appendChild(sel);
    }
    /**
     * Traverses collection object via a string.
     * @param {string} value chapter . example
     * @returns Video Example object
     */
    this.traverse = (value) => {
        let inds = String(value).split('.');    //Cast as string just in case
        if (inds.length == 2) {
            return collection[inds[0]][inds[1]];
        }
        else if (inds.length == 1) {
            return collection[inds];
        }
        else {
            console.error('Must provide input!');
        }
    }
    /**
     * Updates the Video player object.
     * @param {float} item 1.1 = Chapter 1, Example 1.
     */
    this.updatePlayer = (item) => {
        document.querySelectorAll(`#player > *`).forEach(elem => {
            elem.remove();
        });
        console.log(item);
        let vid = document.createElement('video');
        let src = document.createElement('source');
        let r = document.getElementById(`right`);
        r.classList.remove('void');
        r.classList.add('box');
        let find = this.traverse(item);
        console.log(find);
        src.setAttribute('src',find.video);
        vid.setAttribute('width','600');
        vid.setAttribute('height','400');
        src.setAttribute('type','video/mp4');
        vid.setAttribute('controls','true');
        vid.appendChild(src);
        document.querySelector('#desc').innerHTML = find.description;
        document.querySelector('#player').appendChild(vid);
    }

    document.querySelector(`#exampleTitle`).innerHTML = `Chapter 1 Example 1`;
    this.updatePlayer(`1.1`); //Default
    l1.addEventListener('click',() => {
            console.log(`Selected Chapter: ${l1.value}`);
            document.querySelector(`#exampleTitle`).innerHTML = `Chapter ${l1.value} Example 1`;
            this.updatePlayer(`${l1.value}.1`); //Default
            let l2 = document.querySelector('#layer2'); 
            l2.innerHTML = ''; //Clear ddown.
            let initialLayer = this.traverse(l1.value);
            console.log(initialLayer);
            for (let [k,v] of Object.entries(initialLayer)) {
                let opt = document.createElement('option');
                opt.innerHTML = `${k}`;
                l2.appendChild(opt);
            }
            l2.classList.remove('void');
            l2.addEventListener('change',() => {
                console.log(`Selected Chapter ${l1.value}...Example ${l2.value}`);
                this.updatePlayer(`${l1.value}.${l2.value}`);
                document.querySelector(`#exampleTitle`).innerHTML = `Chapter ${l1.value} Example ${l2.value}`;
            })
    });
}

let G;

//Place new Examples Here. Links for each video must be 'Videos/....filename'

//Chapter 1

new VideoExample('1.1',`Triggering different music in .hack//INFECTION – Part 1 (Warning: Flashing lights)`,'Videos/Video Example 1.1.mp4');
new VideoExample('1.2',`Daytime music change in Genshin Impact.`,'Videos/Video Example 1.2.mp4');
new VideoExample('1.3',`Analytical gameplay actions in Persona 3 Reload. (Warning: Images that can cause motion sickness)`,'Videos/Video Example 1.3.mp4');
new VideoExample('1.4',`Typical gameplay action in Persona 3 Reload. (Warning: Images that can cause motion sickness)`,'Videos/Video Example 1.4.mp4');
new VideoExample('1.5',`Volume attenuation in Persona 3 Reload. (Warning: Images that can cause motion sickness)`,'Videos/Video Example 1.5.mp4');

//Chapter 2

new VideoExample('2.1',`Beginning of the Metamorphosis stage from Tetris Effect: Connected. (Warning: Flashing lights and images that can cause motion sickness)`,'Videos/Video Example 2.1.mp4');
new VideoExample('2.2',`Climax and failure in the Metamorphosis stage from Tetris Effect: Connected. (Warning: Flashing lights and images that can cause motion sickness)`,'Videos/Video Example 2.2.mp4');
new VideoExample('2.3',`Musical inputs in the Downtown Jazz stage from Tetris Effect: Connected. (Warning: Flashing lights and images that can cause motion sickness)`,'Videos/Video Example 2.3.mp4');
new VideoExample('2.4',`Music change in the Monsoon boss from Metal Gear Rising: Revengeance. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 2.4.mp4');
new VideoExample('2.5',`Open zone trigger in Stray. (Warning: Camera motion can cause motion sickness)`,'Videos/Video Example 2.5.mp4');
new VideoExample('2.6',`Entrance zone trigger in Stray. (Warning: Camera motion can cause motion sickness)`,'Videos/Video Example 2.6.mp4');
new VideoExample('2.7',`Culling zone trigger in Tales of Arise. (Warning: Camera motion can cause motion sickness)`,'Videos/Video Example 2.7.mp4');
new VideoExample('2.8',`Chill Penguin boss loading area from Mega Man X.`,'Videos/Video Example 2.8.mp4');
new VideoExample('2.9',`Removed music in Phoenix Wright: Ace Attorney – Trials and Tribulations.`,'Videos/Video Example 2.9.mp4');
new VideoExample('2.10',`Music change in boss room of Kirby Super Star. (Warning: Flashing lights)`,'Videos/Video Example 2.10.mp4');
new VideoExample('2.11',`Disruptive vocal lines in the combat of Tales of Arise. (Warning: Flashing lights, violence, and images that may cause motion sickness)`,'Videos/Video Example 2.11.mp4');
new VideoExample('2.12',`Time change in Okami.`,'Videos/Video Example 2.12.mp4');
new VideoExample('2.13',`Music state change in Banjo-Kazooie`,'Videos/Video Example 2.13.mp4');
new VideoExample('2.14',`Last lap’s change in music in Mario Kart 8 Deluxe. (Warning: Flashing lights)`,'Videos/Video Example 2.14.mp4');
new VideoExample('2.15',`Flourish attack from Monsoon in Metal Gear Rising: Revengeance. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 2.15.mp4');

//Chapter 3

new VideoExample('3.1',`Swap game mode from Puyo Puyo Tetris 2. (Warning: Flashing lights)`,'Videos/Video Example 3.1.mp4');
new VideoExample('3.2',`Combat music changes in Genshin Impact. (Warning: Flashing lights, violence, and images that can cause motion sickness)`,'Videos/Video Example 3.2.mp4');
new VideoExample('3.3',`Astalos fight and theme association in Monster Hunter Rise: Sunbreak. (Warning: Flashing lights, violence, and images that can cause motion sickness)`,'Videos/Video Example 3.3.mp4');
new VideoExample('3.4',`Surprise combat with Bazelgeuse in Monster Hunter World: Iceborne. (Warning: Flashing lights, violence, and images that can cause motion sickness)`,'Videos/Video Example 3.4.mp4');
new VideoExample('3.5',`Combat with lethal and achieve victory in Yu-Gi-Oh! Master Duel. (Warning: Flashing lights)`,'Videos/Video Example 3.5.mp4');
new VideoExample('3.6',`Combat with lethal and denied victory in Yu-Gi-Oh! Master Duel. (Warning: Flashing lights)`,'Videos/Video Example 3.6.mp4');
new VideoExample('3.7',`Segmented music triggers in Untitled Goose Game. (Warning: Images that can cause motion sickness)`,'Videos/Video Example 3.7.mp4');
new VideoExample('3.8',`Rewarded exploration in Super Metroid`,'Videos/Video Example 3.8.mp4');
new VideoExample('3.9',`Entering and exiting combat in Star Ocean First Departure R. (Warning: Flashing lights)`,'Videos/Video Example 3.9.mp4');
new VideoExample('3.10',`Visual novel vs combat music in Digimon Survive.`,'Videos/Video Example 3.10.mp4');
new VideoExample('3.11',`Sundowner’s counterattacking shield from Metal Gear Rising: Revengeance. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 3.11.mp4');
new VideoExample('3.12',`Input speed for an S-Rank clear of Stage 1.2 from Sonic Frontiers. (Warning: Flashing lights and images that can cause motion sickness)`,'Videos/Video Example 3.12.mp4');
new VideoExample('3.13',`Movement speed in the City Escape stage from Sonic Adventure 2: Battle.`,'Videos/Video Example 3.13.mp4');
new VideoExample('3.14',`Pumpkin Hill stage with many hints and lower rank from Sonic Adventure 2: Battle.`,'Videos/Video Example 3.14.mp4');
new VideoExample('3.15',`Pumpkin Hill stage with longer time, no hints, and higher rank from Sonic Adventure 2: Battle.`,'Videos/Video Example 3.15.mp4');
new VideoExample('3.16',`Detection state changes in Metal Gear Solid 2: Sons of Liberty. (Warning: Blood and violence)`,'Videos/Video Example 3.16.mp4');
new VideoExample('3.17',`Evening time with and without rain in Persona 5 Royal.`,'Videos/Video Example 3.17.mp4');
new VideoExample('3.18',`Character Select and Continue timers in Marvel vs. Capcom 2: New Age of Heroes. (Warning: Flashing lights)`,'Videos/Video Example 3.18.mp4');
new VideoExample('3.19',`Input and duration of the ladder scene from Metal Gear Solid 3: Snake Eater.`,'Videos/Video Example 3.19.mp4');
new VideoExample('3.20',`Supportive ally NPC voice triggers in Corneria from Star Fox 64. (Warning: Flashing lights and images that can cause motion sickness)`,'Videos/Video Example 3.20.mp4');
new VideoExample('3.21',`Various supportive multiplayer audio triggers from Genshin Impact. (Warning: Flashing lights, violence, and images that can cause motion sickness)`,'Videos/Video Example 3.21.mp4');
new VideoExample('3.22',`The player’s control over music and informative audio triggers in VA11 HALL-A.`,'Videos/Video Example 3.22.mp4');
new VideoExample('3.23',`Phase change with a new riff in Monsoon’s boss fight from Metal Gear Rising: Revengeance. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 3.23.mp4');
new VideoExample('3.24',`Phase change with added vocals in Monsoon’s boss fight from Metal Gear Rising: Revengeance. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 3.24.mp4');
new VideoExample('3.25',`Final attack with a concluding riff in Monsoon’s boss fight from Metal Gear Rising: Revengeance. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 3.25.mp4');
new VideoExample('3.26',`Phase changes accompanied by thickening musical textures in the Abyss boss fight from Marvel vs. Capcom 2: New Age of Heroes. (Warning: Flashing lights)`,'Videos/Video Example 3.26.mp4');
new VideoExample('3.27',`Progressive music changes in Hades. (Warning: Flashing lights, violence, and partial nudity)`,'Videos/Video Example 3.27.mp4');
new VideoExample('3.28',`Expected Doom’s Bride boss music from Catherine: Full Body. (Warning: Flashing lights, partial nudity, and horror imagery)`,'Videos/Video Example 3.28.mp4');
new VideoExample('3.29',`Unexpected final boss music from Catherine: Full Body. (Warning: Flashing lights, partial nudity, horror imagery, and end game spoilers)`,'Videos/Video Example 3.29.mp4');
new VideoExample('3.30',`Final phase music change with the main theme from Monster Hunter Rise. (Warning: Flashing lights, violence, and images that can cause motion sickness)`,'Videos/Video Example 3.30.mp4');
new VideoExample('3.31',`Expected inputs in the microwave torture scene from Metal Gear Solid 4: Guns of the Patriots. (Warning: Flashing lights, blood, violence, and images of war)`,'Videos/Video Example 3.31.mp4');

//Chapter 4

new VideoExample('4.1',`No engagement with Jetstream Sam in Metal Gear Rising: Revengeance. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 4.1.mp4');
new VideoExample('4.1a',`Simple rhythmic stereo alternation panning example (for Figure 4.1).`,'Audio/Audio Example 4.1.mp4');
new VideoExample('4.2',`Engaging combat with Jetstream Sam in Metal Gear Rising: Revengeance. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 4.2.mp4');
new VideoExample('4.2a',`Simple panning sweep example (for Figure 4.2).`,'Audio/Audio Example 4.2.mp4');
new VideoExample('4.3',`Rhythmic stereo panning in Flashman.EXE’s boss fight from Mega Man Battle Network 3 Blue Version. (Advice: Wear headphones. Warning: Flashing lights)`,'Videos/Video Example 4.3.mp4');
new VideoExample('4.3a',`Simple motivic panning example (for Figure 4.3).`,'Audio/Audio Example 4.3.mp4');
new VideoExample('4.4',`Diegetic disruptive laughing location in Metal Gear Solid 4: Guns of the Patriots. (Advice: Wear headphones. Warning: Blood, violence, and images that can cause motion sickness)`,'Videos/Video Example 4.4.mp4');
new VideoExample('4.5',`Overabundance of lock-on triggers in Ace Combat 7: Skies Unknown. (Warning: Flashing lights and images that can cause motion sickness)`,'Videos/Video Example 4.5.mp4');
new VideoExample('4.6',`Musical texture muffling important audio triggers in Ace Combat 7: Skies Unknown. (Warning: Flashing lights and images that can cause motion sickness)`,'Videos/Video Example 4.6.mp4');
new VideoExample('4.7',`Misrepresented intensity in the final boss of Catherine: Full Body. (Warning: Flashing lights, partial nudity, horror imagery, and end game spoilers)`,'Videos/Video Example 4.7.mp4');
new VideoExample('4.8',`Tricking to rhythmic dissonance and music changes in Jet Set Radio Future. (Advise: Wear headphones. Warning: Images that can cause motion sickness)`,'Videos/Video Example 4.8.mp4');
new VideoExample('4.9',`Pulse Transforming Tempo Modulation in Bebop’s boss fight in Teenage Mutant Ninja Turtles: Shredder’s Revenge. (Warning: Flashing lights)`,'Videos/Video Example 4.9.mp4');
new VideoExample('4.10',`Attacking to polyrhythms in NieR: Automata. (Advise: Wear headphones. Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 4.10.mp4');
new VideoExample('4.11',`Hazard cycles causing weak beat movement in Astro Bot. `,'Videos/Video Example 4.11.mp4');
new VideoExample('4.12',`Player invasion in “safe area” of Elden Ring. (Warning: Blood and violence)`,'Videos/Video Example 4.12.mp4');
new VideoExample('4.13',`Retaining world sounds in the menu of Metal Gear Solid 4: Guns of the Patriots. `,'Videos/Video Example 4.13.mp4');
new VideoExample('4.14',`Surprise new boss phase in Dark Mind’s final boss fight in Kirby & The Amazing Mirror. (Warning: Flashing lights)`,'Videos/Video Example 4.14.mp4');
new VideoExample('4.15',`Regular combat music vs Unique Monster music in Xenoblade Chronicles Definitive Edition. (Warning: Flashing lights and violence)`,'Videos/Video Example 4.15.mp4');
new VideoExample('4.16',`Wrong music for the Unique Monster Frenzied Bana in Xenoblade Chronicles Definitive Edition. (Warning: Flashing lights and violence)`,'Videos/Video Example 4.16.mp4');
new VideoExample('4.17',`Key card music change for cards with animations in Yu-Gi-Oh! Master Duel. (Warning: Flashing lights)`,'Videos/Video Example 4.17.mp4');
new VideoExample('4.18',`Stealing the bell and continuous music in Untitled Goose Game. (Warning: Images that can cause motion sickness)`,'Videos/Video Example 4.18.mp4');
new VideoExample('4.19',`No distinct combat music in NieR: Automata. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 4.19.mp4');
new VideoExample('4.20',`Disruptive fishing via lack of music change in NieR: Automata. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 4.20.mp4');
new VideoExample('4.21',`Corrupted Memories boss fight music from NieR: Automata. (Warning: Flashing lights, blood, violence, and end game spoilers)`,'Videos/Video Example 4.21.mp4');
new VideoExample('4.22',`Starting Ending E in NieR: Automata. (Warning: Flashing lights, blood, violence, and end game spoilers)`,'Videos/Video Example 4.22.mp4');
new VideoExample('4.23',`Disruptive music in the “final boss” of NieR: Automata. (Warning: Flashing lights and end game spoilers)`,'Videos/Video Example 4.23.mp4');

//Chapter 5

new VideoExample('5.1',`No inputs in Monsoon’s boss battle from Metal Gear Rising: Revengeance. (Warning: Flashing lights, blood, and violence)`,'Videos/Video Example 5.1.mp4');
new VideoExample('5.2',`Quest Clear music change in Monster Hunter Rise: Sunbreak. (Warning: Flashing lights, violence, and images that can cause motion sickness)`,'Videos/Video Example 5.2.mp4');
new VideoExample('5.3',`Initial detection and chase with SA-X from Metroid Fusion. (Warning: Flashing lights)`,'Videos/Video Example 5.3.mp4');
new VideoExample('5.4',`Obscured music climax in Redout. (Warning: Flashing lights and images that can cause motion sickness)`,'Videos/Video Example 5.4.mp4');
new VideoExample('5.5',`Opponent’s music on player’s turn in Sid Meier’s Civilization VI.`,'Videos/Video Example 5.5.mp4');
new VideoExample('5.6',`Voice-lined triggers after checkpoint in Ace Combat 7: Skies Unknown. (Warning: Flashing lights, crude language, and images that can cause motion sickness)`,'Videos/Video Example 5.6.mp4');
new VideoExample('5.7',`Repetitive music in Mementos from Persona 5. (Warning: Flashing lights)`,'Videos/Video Example 5.7.mp4');
new VideoExample('5.8',`Music changes in Mementos from Persona 5 Royal. (Warning: Flashing lights and end game spoilers)`,'Videos/Video Example 5.8.mp4');
new VideoExample('5.9',`Fighting to jazz and funk in Marvel vs. Capcom 2: New Age of Heroes. (Warning: Flashing lights)`,'Videos/Video Example 5.9.mp4');

/*Site is live at...https://blafleur327.github.io/Weeks-Diss/   
*/

document.addEventListener('DOMContentLoaded',() => {
    console.log('WOO');
    G = new DropDown();
})
