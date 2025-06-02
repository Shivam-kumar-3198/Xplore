const people = ["Raj", "Vikram", "Satheesh"];

export default function List(){
    const listItems = people.map(
        person=><li>{person}</li>
    );
    return <ul>{listItems}</ul>
}