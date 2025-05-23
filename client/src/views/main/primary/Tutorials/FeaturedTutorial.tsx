import { FC } from "react";
import styled, { css } from "styled-components";

import Button from "../../../../components/Button";
import Img from "../../../../components/Img";
import TutorialDetails from "../../../../components/Tutorial/TutorialDetails";
import { PgTheme, PgTutorial, TutorialData } from "../../../../utils/pg";

interface FeaturedTutorialProps {
  tutorial: TutorialData;
}

const FeaturedTutorial: FC<FeaturedTutorialProps> = ({ tutorial }) => (
  <Wrapper>
    <LeftWrapper>
      <Thumbnail src={tutorial.thumbnail} />
    </LeftWrapper>

    <RightWrapper>
      <RightTopWrapper>
        <Name>{tutorial.name}</Name>
        <Description>{tutorial.description}</Description>
      </RightTopWrapper>
      <RightBottomWrapper>
        <TutorialDetails
          details={[
            { kind: "level", data: tutorial.level },
            { kind: "framework", data: tutorial.framework },
            { kind: "languages", data: tutorial.languages },
            // TODO: Enable once there are more tutorials with various categories
            // { kind: "categories", data: tutorial.categories },
          ]}
        />

        <Button
          onClick={() => PgTutorial.open(tutorial.name)}
          kind="secondary"
          fontWeight="bold"
        >
          START LEARNING
        </Button>
      </RightBottomWrapper>
    </RightWrapper>
  </Wrapper>
);

const Wrapper = styled.div`
  ${({ theme }) => css`
    ${PgTheme.convertToCSS(
      theme.views.main.primary.tutorials.main.content.featured
    )};
  `}
`;

const LeftWrapper = styled.div`
  ${({ theme }) => css`
    border-top-left-radius: ${theme.views.main.primary.tutorials.main.content
      .featured.borderRadius};
    border-bottom-left-radius: ${theme.views.main.primary.tutorials.main.content
      .featured.borderRadius};
    overflow: hidden;
  `}
`;

const Thumbnail = styled(Img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RightWrapper = styled.div`
  flex: 1;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  gap: 1.5rem;
`;

const RightTopWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Name = styled.h1``;

const Description = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.default.textSecondary};
  `}
`;

const RightBottomWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  & > button {
    margin-left: auto;
  }
`;

export default FeaturedTutorial;
