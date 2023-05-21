import { lazy } from 'react';
import ReactPlayer from 'react-player';
export const MyCustomVideo = (props) => {




    return (

        <div className={props.className}> 
            <ReactPlayer
                url={props.url}
                playing={true}
                controls={true}
                mute={false}
                loading={lazy}
            />
        </div>
    )
}