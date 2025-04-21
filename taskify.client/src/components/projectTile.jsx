
import { BsThreeDotsVertical } from 'react-icons/bs';


import '../views/styles/global.css';
import './styles/projectTile.css';



const ProjectTile = () => {
    return (
        <div className="projectTile">
            <div className='projectTile__logo'>
            </div>
            <div className='projectTile__body'>
                <div className="projectTile__body__header">
                    <h3 className='header'>Project Name</h3>
                    <BsThreeDotsVertical className='icon' />

                </div>
                <div className="projectTile__body__content">
                    <p className='content'>Lorem ipsum cos tam cos tam cos tam no jakis tam opis co mozna</p>
                </div>
                <div className="projectTile__body__footer">
                    <button className='button'>See</button>
                </div>
                
            </div>

            
        </div>
    );
};

export default ProjectTile;