import React from 'react';
import './Profiles.css'
import PerfisUsuario from '../PerfisUsuario';
import SpatialNavigation, { Focusable } from 'react-js-spatial-navigation'

function Profile() {
    return(
        <div className="background">
          <div className='profiles'>
            <div className='box-profiles'>
              <PerfisUsuario nome='Andrew' imagem={'https://em-content.zobj.net/source/microsoft-teams/337/boy_1f466.png'} />
              <PerfisUsuario nome='Rachel' imagem={'https://em-content.zobj.net/source/microsoft-teams/337/woman_1f469.png'} />
              <PerfisUsuario nome='Nero' imagem={'https://em-content.zobj.net/source/microsoft-teams/337/ghost_1f47b.png'} />
          </div>

        </div>
        </div>
    );
}

export default Profile;