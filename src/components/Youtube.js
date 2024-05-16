import ReactPlayer from "react-player";

function Youtube(props) {
	const url = "https://fb.watch/s6fS6ps3iG/";
    return (
        <div className="yt-section">
			<div className="vd">
				<ReactPlayer 
					url='https://www.youtube.com/watch?v=ysz5S6PUM-U' 
					playing={false}
					volume={0.5}
				/>
			</div>
			<div className="vd">
				<ReactPlayer 
					url={url}
					playing={false}
					volume={0.5}
				/>
			</div>
        </div>
    );
};

export default Youtube;