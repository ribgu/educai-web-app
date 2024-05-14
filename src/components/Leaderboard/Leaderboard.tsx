import Box from '@mui/material/Box/Box'
import Typography from '../Typography/Typography'
import CardLeaderboard from '../CardLeaderbord/cardLeaderboard'

export default function Leaderboard() {
    return (
        <Box sx={{
            width: '30%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
            marginLeft: '20px',
            borderRadius: '10px',
            border: '1px solid #E0E0E0',
            gap: '12px',
            }}>
              <Box sx={{
                display: 'flex',
                marginTop: '16px',
                gap: '10px',
                alignItems: 'center',
              }}>
              <img src='../../public/IconsPages/iconLeaderboard.svg' alt='Pódio com uma estrela no topo'/>
              <Typography variant='title-leaderboard'>Leaderboard</Typography>
              </Box>
              <Typography variant='body1'>Alunos que mais acertaram questões</Typography>
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '90%',
              }}>
                <Typography variant='body1'>#</Typography>
                <Typography variant='body1'>Nome</Typography>
                <Typography variant='body1'>Questões</Typography>
              </Box>

              <Box sx={{
                width: '100%',
                height: '80%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                overflowY: 'auto',
                gap: '10px',
              }}>
               <CardLeaderboard nome='Julia' foto='https://static.vecteezy.com/ti/vetor-gratis/p3/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg' posicao={1} acertos={10} />
               <CardLeaderboard nome='Julia' foto='https://static.vecteezy.com/ti/vetor-gratis/p3/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg' posicao={1} acertos={10} />
               <CardLeaderboard nome='Julia' foto='https://static.vecteezy.com/ti/vetor-gratis/p3/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg' posicao={1} acertos={10} />
               <CardLeaderboard nome='Julia' foto='https://static.vecteezy.com/ti/vetor-gratis/p3/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg' posicao={1} acertos={10} />
               <CardLeaderboard nome='Julia' foto='https://static.vecteezy.com/ti/vetor-gratis/p3/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg' posicao={1} acertos={10} />
               <CardLeaderboard nome='Julia' foto='https://static.vecteezy.com/ti/vetor-gratis/p3/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg' posicao={1} acertos={10} />
               <CardLeaderboard nome='Julia' foto='https://static.vecteezy.com/ti/vetor-gratis/p3/2275818-avatar-feminino-mulher-perfil-icone-para-rede-vetor.jpg' posicao={1} acertos={10} />
              </Box>
            </Box>
    )
}