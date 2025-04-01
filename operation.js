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

//Place new Examples Here. Links for each video must be 'Videos/....filename'

//Chapter 1

new VideoExample(1.1,`New video, who dis?`,'Videos/Video Example 1.1.mp4');
new VideoExample(1.2,'','Videos/Video Example 1.2.mp4');
new VideoExample(1.3,'','Videos/Video Example 1.3.mp4');
new VideoExample(1.4,'','Videos/Video Example 1.4.mp4');
new VideoExample(1.5,'','Videos/Video Example 1.5.mp4');

//Chapter 2

new VideoExample(2.1,'','Videos/Video Example 2.1.mp4');
new VideoExample(2.2,'','Videos/Video Example 2.2.mp4');
new VideoExample(2.3,'','Videos/Video Example 2.3.mp4');
new VideoExample(2.4,'','Videos/Video Example 2.4.mp4');
new VideoExample(2.5,'','Videos/Video Example 2.5.mp4');
new VideoExample(2.6,'','Videos/Video Example 2.6.mp4');
new VideoExample(2.7,'','Videos/Video Example 2.7.mp4');
new VideoExample(2.8,'','Videos/Video Example 2.8.mp4');
new VideoExample(2.9,'','Videos/Video Example 2.9.mp4');
new VideoExample(2.10,'','Videos/Video Example 2.10.mp4');
new VideoExample(2.11,'','Videos/Video Example 2.11.mp4');
new VideoExample(2.12,'','Videos/Video Example 2.12.mp4');
new VideoExample(2.13,'','Videos/Video Example 2.13.mp4');
new VideoExample(2.14,'','Videos/Video Example 2.14.mp4');
new VideoExample(2.15,'','Videos/Video Example 2.15.mp4');
new VideoExample(2.10,'','Videos/Video Example 2.10.mp4');

//Chapter 3

new VideoExample(3.1,'','Videos/Video Example 3.1.mp4');
new VideoExample(3.2,'','Videos/Video Example 3.2.mp4');
new VideoExample(3.3,'','Videos/Video Example 3.3.mp4');
new VideoExample(3.4,'','Videos/Video Example 3.4.mp4');
new VideoExample(3.5,'','Videos/Video Example 3.5.mp4');
new VideoExample(3.6,'','Videos/Video Example 3.6.mp4');
new VideoExample(3.7,'','Videos/Video Example 3.7.mp4');
new VideoExample(3.8,'','Videos/Video Example 3.8.mp4');
new VideoExample(3.9,'','Videos/Video Example 3.9.mp4');
new VideoExample(3.10,'','Videos/Video Example 3.10.mp4');
new VideoExample(3.11,'','Videos/Video Example 3.11.mp4');
new VideoExample(3.12,'','Videos/Video Example 3.12.mp4');
new VideoExample(3.13,'','Videos/Video Example 3.13.mp4');
new VideoExample(3.14,'','Videos/Video Example 3.14.mp4');
new VideoExample(3.15,'','Videos/Video Example 3.15.mp4');
new VideoExample(3.16,'','Videos/Video Example 3.16.mp4');
new VideoExample(3.17,'','Videos/Video Example 3.17.mp4');
new VideoExample(3.18,'','Videos/Video Example 3.18.mp4');
new VideoExample(3.19,'','Videos/Video Example 3.19.mp4');
new VideoExample(3.20,'','Videos/Video Example 3.20.mp4');
new VideoExample(3.21,'','Videos/Video Example 3.21.mp4');
new VideoExample(3.22,'','Videos/Video Example 3.22.mp4');
new VideoExample(3.23,'','Videos/Video Example 3.23.mp4');
new VideoExample(3.24,'','Videos/Video Example 3.24.mp4');
new VideoExample(3.25,'','Videos/Video Example 3.25.mp4');
new VideoExample(3.26,'','Videos/Video Example 3.26.mp4');
new VideoExample(3.27,'','Videos/Video Example 3.27.mp4');
new VideoExample(3.28,'','Videos/Video Example 3.28.mp4');
new VideoExample(3.29,'','Videos/Video Example 3.29.mp4');
new VideoExample(3.30,'','Videos/Video Example 3.30.mp4');
new VideoExample(3.31,'','Videos/Video Example 3.31.mp4');

//Chapter 4

new VideoExample(4.1,'','Videos/Video Example 4.1.mp4');
new VideoExample(4.2,'','Videos/Video Example 4.2.mp4');
new VideoExample(4.3,'','Videos/Video Example 4.3.mp4');
new VideoExample(4.4,'','Videos/Video Example 4.4.mp4');
new VideoExample(4.5,'','Videos/Video Example 4.5.mp4');
new VideoExample(4.6,'','Videos/Video Example 4.6.mp4');
new VideoExample(4.7,'','Videos/Video Example 4.7.mp4');
new VideoExample(4.8,'','Videos/Video Example 4.8.mp4');
new VideoExample(4.9,'','Videos/Video Example 4.9.mp4');


//

document.addEventListener('DOMContentLoaded',() => {
    console.log('WOO');
    G = new DropDown();
})
