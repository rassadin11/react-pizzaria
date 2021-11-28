import React from "react"
import classNames from "classnames"

const Button = ({ className, outline, ...props }) => {
    return (
        <div className={classNames('button', className, {
            'button--outline': outline
        })}>
            {props.children}
        </div>
    )
};

export default Button;