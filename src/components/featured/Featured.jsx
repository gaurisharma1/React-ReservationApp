import "./featured.css"

const Featured = () => {
    return (
       <div className="featured">
        <div className="featuredItem">
            <img src="https://cdn.pixabay.com/photo/2017/10/10/07/48/hills-2836301_960_720.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Dublin</h1>
                <h2>123 properties</h2>
                
            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cdn.pixabay.com/photo/2014/12/08/02/59/benches-560435_960_720.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Reno</h1>
                <h2>533 properties</h2>

            </div>
        </div>
        <div className="featuredItem">
            <img src="https://cdn.pixabay.com/photo/2016/02/10/21/57/heart-1192662_960_720.jpg" alt="" className="featuredImg" />
            <div className="featuredTitles">
                <h1>Austin</h1>
                <h2>523 properties</h2>

            </div>
        </div>
       </div>
    )
}

export default Featured


