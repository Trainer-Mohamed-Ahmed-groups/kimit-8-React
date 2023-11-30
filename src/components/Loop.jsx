export default function Loop() {
    var items = ["item 1", "item 2", "item 3", "item 4", "item 5"]

    var newItems = items.filter((item, index) => index < 3)
    return (
        <div>
            <h1 className="text-center">Loop</h1>
            <ul>
                {
                    items.map((item, index) =>
                        <li key={index}>{item.toUpperCase()}</li>
                    )
                }
            </ul>
            <hr />
            <ul>
                {
                    newItems.map(item =>
                        <li key={Math.random()}>{item.toUpperCase()}</li>
                    )
                }
            </ul>
        </div>
    )
}
