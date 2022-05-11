const list_items = document.querySelectorAll('.list-item');
const lists = document.querySelectorAll('.list');

var dragged_item = null;

list_items.forEach((item) => {

        item.addEventListener('dragstart', () => {
            dragged_item = item;

            setTimeout(()=>{
                item.style.display = 'none';
            },0)
            // console.log("drag started");
        })

        item.addEventListener('dragend', () => {

            setTimeout(()=>{
                item.style.display = 'block';
                dragged_item = null;
            },0)
            // console.log("drag ended");
        })

    lists.forEach((list) => {

        list.addEventListener('dragover', (e) => {
            e.preventDefault();
            list.style.backgroundColor = 'rgba(0,0,0,0.2)'
        })

        // list.addEventListener('dropenter', (e) => {
        //     e.preventDefault();
        // })

        list.addEventListener('dragleave', (e) => {
            list.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })

        list.addEventListener('drop', (e) => {
            // console.log("dropped");
            list.append(dragged_item);
            list.style.backgroundColor = 'rgba(0,0,0,0.1)'
        })
    })
})