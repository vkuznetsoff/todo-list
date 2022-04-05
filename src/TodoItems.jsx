import "./TodoItems.css"

const TodoItems = ({ items, RemoveItem, SetComplited }) => {
    const handleDelete = (id) => {
        RemoveItem(id)
    }

    const handleItem = (id) => {
        debugger
        SetComplited(id)
    }
    let itemsList = items.map((i) => (
        <Item key={i.id} item={i} handleDelete={handleDelete} handleItem={handleItem}/>
    ));
    return (
        <div className="itemsList">
            {itemsList}
        </div>
    )
}


const Item = ({ item, handleDelete, handleItem }) => {
    debugger
    return (
        <div className="item">
            <div className={!item.complited ? "itemText" : "itemText complited"}
                onClick={() => {handleItem(item.id)}}>{item.value}</div>

            <div className="itemDelete" onClick={() => { handleDelete(item.id) }}>X</div>
        </div>

    )
}

export default TodoItems