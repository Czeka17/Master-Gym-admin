
function Legend(){
    const contentp = "<p>Tekst</p>"
  const contentspan = "<span>Tekst</span>"
  const contenta = '<a href="google.com" target="_blank">LINK</a>'
  const contentul = "<ul><li>pierwsze</li><li>drugie</li><li>trzecie</li></ul>"
  const contentol = "<ol><li>jeden</li><li>dwa</li><li>trzy</li></ol>"
  const contenthr = "<hr/>"
    return  <div>
    <h2>Legenda</h2>
    <p>{contentp}</p>
    <span>{contentspan}</span>
    <br/>
    <div >{contenta} <a>LINK</a></div>
   <ul>
      <li>pierwsze</li>
      <li>drugie</li>
      <li>trzecie</li>
    </ul>
    {contentul}
    <ol>
      <li>jeden</li>
      <li>dwa</li>
      <li>trzy</li>
    </ol>
    {contentol}
    <hr/>
    {contenthr}
  </div>
}
export default Legend;