// let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let berg = document.getElementById("berg");
let thup = document.getElementById("thup");
let text = document.getElementById("text");
let textt = document.getElementById("textt");


window.addEventListener('scroll', function(){
    var value = window.scrollY;
    // bg.style.top = value * 0.5 + "px";
    moon.style.left = -value * 0.5 + "px";
    berg.style.top = value * 0.15 + "px";
    text.style.top = value * 1 + "px";
    textt.style.top = value * 1 + "px";

})
function reply_click(clicked_id)
{
    location.href = "../"+clicked_id+".html";
}
function reply_opd_click(opdclicked_id)
{
    location.href = "../"+opdclicked_id+".html";
}


/** 
* Make flexbox grids super easy!
* ---
* @param columns  —  Number of columns
* @param margin  —  Margin with unit
*/

const flexGrid = ({ columns, margin }) => {
  const width = `${100 / columns}%`;
  const unitlessMargin = margin.match(/[\d?.]/g).join('');
  const unit = margin.match(/[a-zA-Z%]+/g).join('');
  const calcMargin = ((unitlessMargin * columns) - unitlessMargin) / columns;
  return (`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &:after {
      flex: auto;
      margin: 0 auto;
      content: "";
    }
    >* {
      width: calc(${width} - ${calcMargin});
      margin-left: ${unitlessMargin / 2}${unit};
      margin-right: ${unitlessMargin / 2}${unit};
      &:nth-child(1) {
        margin-left: 0;
      }
      &:nth-child(${columns}n) {
        margin-right: 0;
      }
      &:nth-child(${columns}n + 1) {
        margin-left: 0;
      }
    }
  `)
}