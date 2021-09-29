const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

//Event listener for textarea when any choice is entered
textarea.addEventListener('keyup', (e) => {
    createTags(e.target.value); //trigger new choices
  if(e.key === 'Enter') {
      
    setTimeout(() => {
        e.target.value = '';
    }, 10);
    randomSelect()
  }

})

function createTags(input){
    const tags = input.split(',').filter(tag => tag.trim() !== '').map(tag => tag.trim()); //this adds the choices as array when , is encountered plus leaves white spaces using filter
    // console.log(tags);

    tagsEl.innerHTML = ''; // for emptying the choices

    //to add new choices 

    tags.forEach(tag => {
        const tagEl = document.createElement('span');
        tagEl.classList.add('tag');
        tagEl.innerText = tag;
        tagsEl.appendChild(tagEl);
    })
}

function randomSelect() {
    const times = 30; //no.of times it highlights choices when picking

    // This run's the random choice but didn't stop
    const interval = setInterval(() => {
        const randomTag = pickRandomTag();

        hightlightTag(randomTag)

        setTimeout(() => {
            unHightlightTag(randomTag);
        }, 100);
    },100);

   // This picks up the random choice

    setTimeout(() => {
        clearInterval(interval);

        setTimeout(() => {
            
            const randomTag = pickRandomTag();

            hightlightTag(randomTag);

        }, 100);
    }, times * 100);
}

//Random picker function
function pickRandomTag() {
    const tags = document.querySelectorAll('.tag');
    return tags[Math.floor(Math.random()*tags.length)];
}

//highlighter function

function hightlightTag(tag){
    tag.classList.add('highlight');
}

function unHightlightTag(tag){
    tag.classList.remove('highlight');
}
