import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';
import { Link } from 'react-router-dom';

library.add(faHome);
library.add(faSearch)


const Sidebar = () => {
    return ( <div className="sidebar-container">
<Link to="/"><FontAwesomeIcon icon="home" /> </Link>
<Link to="/"> HOME</Link>
<Link to="/search"><FontAwesomeIcon icon="search" /></Link>
<Link to="/search"> SEARCH</Link>


    
  
    
    
    </div> );
}
 
export default Sidebar;