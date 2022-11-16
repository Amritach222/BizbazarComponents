import ShareIcon from '@mui/icons-material/Share';
import {useState} from "react";
import {FacebookIcon, TwitterShareButton, FacebookShareButton, LinkedinIcon, LinkedinShareButton, TwitterIcon} from "react-share";
const shareUrl='https://getbootstrap.com/docs/5.0/components/dropdowns/'
const Share=()=>{
    const [open, setOpen] = useState(false);
   
    const handleOpen=(e)=>{
        setOpen(!open);
    }
    const handleClose=(e)=>{
        e.preventDefault();
        setOpen(false)
    }
    return(
        <div className="share">
            <div className="dropdown">
            <ShareIcon type="button" id="dropdownMenuButton1"
                       data-bs-toggle="dropdown" aria-expanded="false"
                       className='text-secondary fa-hand-pointer dropdown-toggle'/>

                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li >
                        <FacebookShareButton  url={shareUrl} quote='Share on facebook'>
                            <FacebookIcon size={20}/> Share on facebook
                        </FacebookShareButton>
                    </li>
                    <li >
                        <TwitterShareButton
                            url={shareUrl} quote='Share on twitter'>
                            <TwitterIcon size={20}/> Share on twitter
                        </TwitterShareButton>
                    </li>
                    <li >
                        <LinkedinShareButton  url={shareUrl} quote='Share on linkedin'>
                            <LinkedinIcon size={20}/> Share on LinkedIn
                        </LinkedinShareButton>
                    </li>

                </ul>
            </div>
            <div className={open?'share_sites':'d-none'} >
            <ul className="list-group">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Morbi leo risus</li>
                <li className="list-group-item">Porta ac consectetur ac</li>
                <li className="list-group-item">Vestibulum at eros</li>
            </ul>
        </div>
        </div>
    )
}
export default Share;