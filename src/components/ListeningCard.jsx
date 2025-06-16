
function ListeningCard() {
    return (
        <div className="listening-card-container">
            <div className="listening-card-trends">
                <span>SoundCloud</span>
                <p>Listen to latest trending Music all time</p>
                <span>With SoundCloud, you can get premium quality music for free trial-14 days</span>
                <div className="link-listen-now">
                    <img src={require('../assets/icons/Headphone.png')} alt="" />
                    <a href="">Listen now</a>
                </div>
            </div>
            <div>
                   <img src={require('../assets/img/WomanPic.png')} alt="" />
            </div>
        </div>
    )
}

export default ListeningCard