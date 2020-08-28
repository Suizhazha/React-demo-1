import React from "react"
import ReactDOM from "react-dom"


let n = 0

//此时APP就是一个React函数组件，而不是单纯的React元素
const App =()=> React.createElement("div", {className: "red"},
  [n,
    React.createElement("button", {
      onClick: () => {
        n += 1
        ReactDOM.render(
          App(), document.querySelector("#root")
        )
      }
    }, "+1")
  ]
)

ReactDOM.render(
  App(), document.querySelector("#root")
)


