import{ React, Component} from'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from "reselect"
import { selectMenuSection } from '../redux/Directory/directory.selector'
import '../scss/homepage.scss'
import MenuItem from './MenuItem'

 const DirectoryMenu = ({menuSection})=>(
             <div className="directory-menu">
                 {menuSection.map( ({id, ...otherMenuSectionProps}) =>(
                     <MenuItem key={id} {...otherMenuSectionProps} />
                 ))}
             </div>
         )
  
 
const mapStateToProps = createStructuredSelector({
  menuSection: selectMenuSection,
})



 export default connect( mapStateToProps ) (DirectoryMenu)