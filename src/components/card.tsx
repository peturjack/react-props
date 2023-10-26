import "./card.css"

type Props = {
    background: string,
    name: string,
    about: string
}
const Card = (props:Props) => { 
    console.log(props)
    const style = {
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        width: "300px",
        height: "400px",
        marginLeft: "68px",
        marginTop: "20px",
    }
    


    return(
        <>
            <div style={style}>
                <div className="imageContainer">
                <img src={props.background} alt="very nice picture" className="firstImage">
                </img>
                </div>
                <div className="card-content">
                <h3>{props.name}</h3>
                <p>{props.about}</p>
                </div>
            </div>
        </>
    )
}
export default Card