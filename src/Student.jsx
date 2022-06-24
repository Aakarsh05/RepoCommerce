const Student = props =>{
    return (
        <div className="pass_card">
            <p>{props.name}</p>
            <p>{props.passId}</p>
            <p>{props.countryOfOrigin}</p>
        </div>
    )
}


export default Student
// const Student = (props) => {
//     return React.createElement("div", {class:"pass_card"}, [
//       React.createElement("p", {}, props.name),
//       React.createElement("p", {}, props.passId),
//       React.createElement("p", {}, props.countryOfOrigin),
      
//     ]);
  
// }