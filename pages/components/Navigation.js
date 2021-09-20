import Link from 'next/Link'
import { Menu } from "semantic-ui-react";


const Navigation = () => {
    return(
    
            <Menu stackable>
                <Menu.Item><Link href="/">Home</Link></Menu.Item>
                
                <Menu.Item
                ><Link href="/videos">Videos</Link></Menu.Item>
            </Menu>
        
    )
}


export default Navigation;