const Pagination = (page_items=[]) => {
    const pagination = document.createElement("nav")
    pagination.innerHTML = '<ul class="pagination"></ul>'
    pagination.querySelector("ul").replaceChildren(
        ...page_items.map(page_item => PageItem(page_item))
    );

    return pagination
}

const PageItem = ({text="", onclick = () => null, isActive=() => false}) => {
    const page_item = document.createElement("li");
    page_item.classList.add("page-item", "page-link", isActive() ? "active" : "not-active");
    page_item.innerHTML = text
    page_item.addEventListener("click", onclick)

    return page_item
}

export default Pagination;
export {
    PageItem,
}
