import React from 'react';
import './Profiles.css'
import PerfisUsuario from '../PerfisUsuario';

function Profile() {
    return(
        <div className="background">
          <div className='profiles'>
            <div className='box-profiles'>
              <PerfisUsuario nome='Fulano' imagem={'https://em-content.zobj.net/source/microsoft-teams/337/boy_1f466.png'} />
              <PerfisUsuario nome='Fulana' imagem={'https://em-content.zobj.net/source/microsoft-teams/337/woman_1f469.png'} />
              <PerfisUsuario nome='Fulaninho' imagem={'https://em-content.zobj.net/source/microsoft-teams/337/ghost_1f47b.png'} />
          </div>

        </div>
        </div>
    );
}

export default Profile;