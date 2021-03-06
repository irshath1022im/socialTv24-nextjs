import { Dropdown,  Icon,  IconGroup,  Menu } from "semantic-ui-react";
import Link from 'next/link'


const Navigation = () => {


    return(
            <>
            {/* <IconGroup>
                <Icon name="align justify" size="big" onClick={ () => setMenuVisible(!menuVisible)} />
            </IconGroup> */}
            
             <Menu color="orange">
                            <Menu.Item>
                                <Link href="/"><a>Home</a></Link>
                            </Menu.Item>

                            <Menu.Item>
                                <Link href="/videos" ><a>Videos</a></Link>
                            </Menu.Item>
                    
                    
                            <Dropdown item text="Categories">
                                <Dropdown.Menu> 
                                    <Dropdown.Item><Link href="/"><a>Local News</a></Link></Dropdown.Item>
                                    <Dropdown.Item>Nintavur</Dropdown.Item>
                                    <Dropdown.Item>Janaza</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                    
            </Menu>
           
           </>
        
    )
}


export default Navigation;