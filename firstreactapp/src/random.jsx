function Random(){
    let random = Math.random()* 100;

    return <h1 style={{'background': '#345233',
        'font-size':'20px'
    }}>Random number is {Math.round(random)}</h1>
}

export default Random;