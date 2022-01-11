import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import { withRouter } from "react-router-dom";

import './collection-preview.styles.scss';

const CollectionPreview = ({ title, items, location }) => (
    <div className='collection-preview'>
        { title === 'Pack' 
            ?      
                <>
                <h1 className='title'> 
                    <p className="title-sm"> shop the </p> 
                    THEME OF PACKS 
                </h1> 
                {/* <div className="punchline"> One mood, three flavors—explore our best-selling flavor combinations. </div> */}
                </>
            : 
                <>
                <h1 className='title'> 
                    <p className="title-sm"> explore </p>
                    ALL FLAVORS 
                </h1> 
                </>
        }
        

        <div className='preview'>
            { location.pathname === '/shop' 
                ?
                items.map((item) => (
                    // <div key={item.id}> {item.name} </div>
                    <CollectionItem key={item.id} item={item}/>
                ))
                :
                items.filter((item, i) => i<2 ).map((item) => (
                    // <div key={item.id}> {item.name} </div>
                    <CollectionItem key={item.id} item={item}/>
                ))
            }

        </div>

    </div>
);
export default withRouter(CollectionPreview);
