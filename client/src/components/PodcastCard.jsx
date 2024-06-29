import Avatar from '@mui/material/Avatar';
import styled from 'styled-components';
import { IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HeadsetIcon from '@mui/icons-material/Headset';


const PlayIcon = styled.div`
    padding: 10px;
    border-radius: 50%;
    z-index: 100;
    display: flex;
    align-items: center;
    background: #9000ff !important;
    color: white !important;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    position: absolute !important;
    top: 45%;
    right: 10%;
    display: none;
    transition: all 0.4s ease-in-out;
    box-shadow: 0 0 16px 4px #9000ff50 !important;
`;
const Card = styled.div`
    position: relative;
    text-decoration: none;
    background-color: ${({ theme }) => theme.card};
    max-width: 220px;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 16px;
    border-radius: 6px;
    box-shadow: 0 0 16px 0 rgba(0, 0, 0, 0.1);
    &:hover {
        cursor: pointer;
        transform: translateY(-8px);
        transition: all 0.4s ease-in-out;
        box-shadow: 0 0 18px 0 rgba(0, 0, 0, 0.3);
        filter: brightness(1.3);
    }

    &:hover ${PlayIcon}{
        display: flex;
    }
`;

const Top = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 150px;
    position: relative;
`;

const Favorite = styled(IconButton)`
    color: white;
    top: 8px;
    right: 6px;
    padding: 6px !important;
    border-radius: 50%;
    z-index: 100;
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme.text_secondary + 50};
    color: white !important;
    position: absolute !important;
    backdrop-filter: blur(4px);
    box-shadow: 0 0 16px 6px #222423 !important;
`;

const CardImage = styled.img`
    object-fit: cover;
    width: 220px;
    height: 140px;
    border-radius: 6px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);
    &:hover {
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.4);
    }
`;

const CardInformation = styled.div`
    display: flex;
    align-items: flex-end;
    font-weight: 450;
    padding: 14px 8px 8px 0px;
    width: 100%;
`;

const MainInfo = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: flex-start;
    gap: 4px;
`;

const Title = styled.div`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2; //If line increases by 2 (...) will be shown
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text_secondary};
`;

const Description = styled.div`
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text_secondary};
    font-size: 12px;
`;

const CreatorInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    margin-top: 6px;
`;

const Creator = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const CreatorName = styled.div`
    font-size: 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: ${({ theme }) => theme.text_secondary};
`;

const Views = styled.div`
    font-size: 10px;
    color: ${({ theme }) => theme.text_secondary};
    width: max-content;
`;

const PodcastCard = () => {
    return (
        <Card>
            <div>
                <Top>
                    <Favorite>
                        <FavoriteIcon style={{ width: '16px', height: '16px' }} />
                    </Favorite>
                    <CardImage src="https://media.wired.com/photos/620eb0f39266d5d11c07b3c5/master/pass/Gear-Podcast-Gear-1327244548.jpg" />
                </Top>
                <CardInformation>
                    <MainInfo>
                        <Title>The Tim Ferris Show</Title>
                        <Description>
                            The Tim Ferris Show is a podcast hosted by Tim Ferris. MaryLou wore the tiara with pride. There was something that made doing anything she didn't really want to do a bit easier when she wore it. She really didn't care what those staring through the window were thinking as she vacuumed her apartment.
                        </Description>

                        <CreatorInfo>
                            <Creator>
                                <Avatar style={{ width: '26px', height: '26px' }}>R</Avatar>
                                <CreatorName>Revant</CreatorName>
                            </Creator>
                            <Views>12 Views</Views>
                        </CreatorInfo>
                    </MainInfo>
                </CardInformation>
            </div>
            <PlayIcon>
                {
                    "video" === "video" ? (
                        <PlayArrowIcon style={{width: "28px", height: "28px"}}/>
                    ) : (
                        <HeadsetIcon style={{width: "28px", height: "28px"}}/>
                    )
                }
                
            </PlayIcon>
        </Card>
    );
};

export default PodcastCard;
