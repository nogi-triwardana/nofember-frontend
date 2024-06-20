import { RiHome6Line } from "react-icons/ri";
import { FiChevronRight } from "react-icons/fi";
import { Container, TextContainer } from "./breadcrumbs.styles";
import { Text } from "theme-ui";
import { useNavigate } from '@tanstack/react-router'

const BreadCrumbs = ({ items }: BreadCrumbsType) => {
  const navigate = useNavigate();

  return (
    <Container>
      <RiHome6Line />
      <FiChevronRight />
      {items?.map((item: ItemBreadCrumbType, key: number) => (
        <>
          <TextContainer
            key={'breadcrumbs-' + key}
            onClick={() => 
              navigate({
                to: item?.path
              })
            }
          >
            <Text>{item?.label}</Text>
          </TextContainer>
          {key !== items?.length - 1 && <FiChevronRight />}
        </>
      ))}
    </Container>
  );
};

export default BreadCrumbs;