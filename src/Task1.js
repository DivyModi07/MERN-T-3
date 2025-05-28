// Create a react with 1 <H1> element in italic blue color with font size 20px ,also add list of five fruits starts with 'A',current time and current day along with 1 image.

// import srcimg from './logo192.png'

function Task1(){
    const s = {color:'blue',fontSize:'20px',fontStyle:'italic'}
    const fruit = ['Apple1','Apple3','Apple3','Apple4','Apple5']
    return(
        <div>
            <h1 style={s}>Hello from Task1</h1>
            <ol type='A'>
                <li>{fruit[0]}</li>
                <li>{fruit[1]}</li>
                <li>{fruit[2]}</li>
                <li>{fruit[3]}</li>
                <li>{fruit[4]}</li>
            </ol>
            <img src='logo192.png'/>
        </div>
    ) 
}

export default Task1
