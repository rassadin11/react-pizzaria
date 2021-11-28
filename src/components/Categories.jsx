import classNames from "classnames";
import React from "react"

const Categories = ({ items, onClickItem, activeCategory, setActiveCategory }) => {
    return (
        <div>
            <div className="categories">
                <ul>
                    {items && items.map((item, idx) => {
                        return <li className={classNames({
                            'active': idx === activeCategory
                        })} onClick={() => onClickItem(idx)} key={`${item}_${idx}`}>{item}</li>
                    })}
                </ul>
            </div>
        </div>
    )
};

export default Categories;