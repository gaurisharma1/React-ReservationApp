import "./PropertyList.css"

const PropertyList = () => {
    return(
        <div className="pList">
            <div className="pListItem">
                <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?cs=srgb&dl=pexels-thorsten-technoman-338504.jpg&fm=jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Hotels</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_960_720.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Appartments</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Resorts</h1>
                    <h2>2331 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://media.istockphoto.com/id/1393610514/photo/exterior-of-luxurious-modern-villa-with-swimming-pool-and-garden.jpg?b=1&s=170667a&w=0&k=20&c=elACgl_CH1eKZDaZD6mQx5dEp57H7vjE9bmeN_g3Xg0=" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Villas</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
            <div className="pListItem">
                <img src="https://cdn.pixabay.com/photo/2016/12/06/14/33/log-cabin-1886620_960_720.jpg" alt="" className="pListImg" />
                <div className="pListTitles">
                    <h1>Cabins</h1>
                    <h2>233 hotels</h2>
                </div>
            </div>
        </div>
    );
};

export default PropertyList;

