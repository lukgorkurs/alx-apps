import { Link } from 'react-router-dom'

function Footer () {

    return (

        <div>
            <hr/>

            <ul>
                <li><Link to = "/">home...</Link></li>
                <li><Link to = "/add">add..</Link></li>
                <li><Link to = "/about">about...</Link></li>
                <li><Link to = "/edit">edit...</Link></li>
            </ul>
        </div>



    )



}

export default Footer;