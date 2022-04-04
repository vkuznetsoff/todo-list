
const TodoItems = ({items}) => {
    debugger
    let itemsList = items.map((i) => (
        // <Item item={i} />
        <div>{i}</div>
      ));


    return (
        <div>
            {itemsList}
        </div>
    )
}

const Item = ({item}) => {
    debugger
    return <div>
        {item}
    </div>
}

export default TodoItems