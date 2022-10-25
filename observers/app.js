class EventObserver {
    constructor() {
        this.observers = []
    }
    subscribe(fn) {
        this.observers.push(fn)
        console.log(`You are now subscribed to ${fn.name}`)
    }
    unsubscribe(fn) {
        //filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. the filter returns a new list and reassingns the list of observers
        this.observers = this.observers.filter((item) => {
            if (item !== fn) {
                return item
            }
        })
        console.log(`you are now unsubscribed from ${fn.name}`)
    }
    fire() {
        this.observers.forEach(item => {
            item.call()
        })
    }
}


const click  = new EventObserver()

//event listeners

document.querySelector('.sub-ms').addEventListener('click', ()=>{
    click.subscribe(getMilliseconds)
})
document.querySelector('.unsub-ms').addEventListener('click', ()=>{
    click.unsubscribe(getMilliseconds)
})
document.querySelector('.sub-s').addEventListener('click', ()=>{
    click.subscribe(getSeconds)
})
document.querySelector('.unsub-s').addEventListener('click', ()=>{
    click.unsubscribe(getSeconds)
})


document.querySelector('.fire').addEventListener('click', ()=>{
    click.fire()
})

//click handler

const getMilliseconds = ()=>{
    console.log(`Current miliseconds: ${new Date().getMilliseconds() }`)
}

const getSeconds = ()=>{
    console.log(`Current seconds: ${new Date().getSeconds() }`)
}