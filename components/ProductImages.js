import styled from "styled-components";
import {useState} from "react";

const BigImageWrapper = styled.div`
  text-align: center;
  height: 300px;
  display: flex;
  align-items: center;
`;
const BigImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin: auto;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;
const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-grow: 0;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 15px;
`;
const Thumbnail = styled.div`
  border: 2px solid #ddd;
  padding: 5px;
  border-radius: 5px;
  height: 40px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  ${props => props.active ?
      `border-color: #aaa;`
      :
      `border-color: transparent;
        opacity:.7`
  }
`;
const ProductImages = ({images}) => {
    const [activeImage, setActiveImage] = useState(images?.[0]);
    return (
        <>
            <BigImageWrapper>
                <BigImage src={activeImage}/>
            </BigImageWrapper>
            <ThumbnailWrapper>
                {images.map((image, index) => (
                    <Thumbnail
                        key={index}
                        active={image === activeImage}
                        onClick={() => setActiveImage(image)}>
                        <Image src={image} alt={index}/>
                    </Thumbnail>
                ))}
            </ThumbnailWrapper>
        </>
    )
}

export default ProductImages


