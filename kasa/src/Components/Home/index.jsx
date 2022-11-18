import Data from '../../Data/data.json'
import styled from 'styled-components'
import './style-home.css'
import { Link } from 'react-router-dom'

const CoverImg = styled.img`
// background-size: cover;
width: 100%;
height: 100%;
border-radius: 10px;
`
const TitleCard = styled.span`
position: absolute;
font-style: normal;
font-weight: 500;
display: flex;
flex-wrap: wrap;
width: 300px;
top: 80%;
left: 20px;
line-height: 20px;
font-size: 18px;
color: white;
`
const LinkCard = styled(Link)`

`

export default function Home () {

    return(
        <div className='ContainerHomeCards'> 
            {
                Data.map(data => {
                    return (
                        <div className="CardContenair" key={data.id}>
                            <LinkCard to="/apartments">
                                <CoverImg src={data.cover} className="Cover" alt="images des biens à louer"/>
                                <TitleCard className='TitleCard'>{data.title}</TitleCard>
                            </LinkCard>
                        </div>
                    )
                })
            }
        </div>
    )
}