let collection = {};

/**
 * Builds a new video example.
 * @param {float} number Chapter.example
 * @param {string} description 
 * @param {File} video 
 * @param {HTMLElement} parent 
 */
function VideoExample (number,description,video) {
    this.chapter = String(number).split('.')[0];
    this.example = String(number).split('.')[1];
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
     * Traverses collection object via a float.
     * @param {float} value chapter . example
     * @returns Video Example object
     */
    this.traverse = (value) => {
        let inds = String(value).split('.');
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

//Place new Examples Here.


//

document.addEventListener('DOMContentLoaded',() => {
    console.log('WOO');
    G = new DropDown();
})